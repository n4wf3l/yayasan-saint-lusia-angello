const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const DIGITS = '0123456789'

const pick = (set: string) => set[Math.floor(Math.random() * set.length)]

/**
 * One frame of the scramble: characters lock into `target` from left to right as
 * `progress` goes 0 → 1 (the first at 35 %, the last at 100 %). Letters and digits
 * not yet locked show random glyphs of the same kind; spaces and punctuation stay put.
 */
export function scrambleFrame(target: string, progress: number) {
  const last = Math.max(target.length - 1, 1)
  let out = ''
  for (let i = 0; i < target.length; i++) {
    const ch = target[i]
    if (progress >= 0.35 + 0.65 * (i / last)) out += ch
    else if (/\d/.test(ch)) out += pick(DIGITS)
    else if (/\p{L}/u.test(ch)) out += pick(LETTERS)
    else out += ch
  }
  return out
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scrambles every visible text node under `roots` into its current (new-language)
 * text. Runs after React has committed the new text; each node ends on exactly the
 * value React wrote, so React's view of the DOM stays correct. Returns a cancel
 * function that snaps everything to its final text.
 */
export function scrambleVisibleText(roots: Element[], duration = 650) {
  const margin = 120
  // `written` is what we last put in the node: if React changes the node meanwhile, its value wins.
  const nodes: { node: Text; target: string; written: string | null }[] = []

  for (const root of roots) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement
        if (!parent || !node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT
        // SVG labels, screen-reader-only copies and form text keep their value.
        if (parent.closest('svg, script, style, textarea, .sr-only, [data-no-scramble]')) return NodeFilter.FILTER_REJECT
        const rect = parent.getBoundingClientRect()
        const visible = rect.bottom > -margin && rect.top < window.innerHeight + margin && rect.width > 0
        return visible ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
      },
    })
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      nodes.push({ node: n as Text, target: n.nodeValue ?? '', written: null })
    }
  }

  let frame = 0
  const finish = () => {
    cancelAnimationFrame(frame)
    for (const item of nodes) {
      if (item.written !== null && item.node.nodeValue === item.written) item.node.nodeValue = item.target
    }
  }
  if (nodes.length === 0) return finish

  const start = performance.now()
  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    if (progress >= 1) return finish()
    for (const item of nodes) {
      if (item.written !== null && item.node.nodeValue !== item.written) {
        item.written = null // React re-rendered this text: leave it alone.
        continue
      }
      if (item.written === null && item.node.nodeValue !== item.target) continue
      item.written = scrambleFrame(item.target, progress)
      item.node.nodeValue = item.written
    }
    frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
  return finish
}
