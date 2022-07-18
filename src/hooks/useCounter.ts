import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState(5)
  const elementToAnimated = useRef<any>(null)
  const tl = useRef(gsap.timeline())

  const handleClick = () => {
    setCounter(value => Math.min(maxCount, value + 1))
  }

  useLayoutEffect(() => {
    if (!elementToAnimated.current) return
    tl.current.to(elementToAnimated.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(elementToAnimated.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause()
  }, [])

  useEffect(() => {
    tl.current.play(0)
  }, [counter])

  return { counter, handleClick, elementToAnimated }
}
