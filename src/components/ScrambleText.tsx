import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { scrambleFrame } from '../lib/scramble'

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

    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(scrambleFrame(text, progress))
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
