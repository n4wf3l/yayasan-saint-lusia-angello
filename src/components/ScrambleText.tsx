import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

/**
 * Shows `text`; when it changes (a language switch), the letters scramble and
 * lock into the new word from left to right. The first render is plain.
 */
export function ScrambleText({ text, duration = 650 }: { text: string; duration?: number }) {
  const [display, setDisplay] = useState(text)
  const previous = useRef(text)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (previous.current === text) return
    previous.current = text
    if (reduce) {
      setDisplay(text)
      return
    }

    const length = text.length
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      let out = ''
      for (let i = 0; i < length; i++) {
        // Each letter stays scrambled until its turn: the first locks at 35%, the last at 100%.
        const lockAt = 0.35 + 0.65 * (i / Math.max(length - 1, 1))
        const target = text[i]
        out += progress >= lockAt || target === ' ' ? target : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setDisplay(out)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [text, duration, reduce])

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </>
  )
}
