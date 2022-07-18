import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface CounterEffectProps {
  initialValue: number
}

const MAX_COUNT = 10

export const CounterEffect = ({ initialValue }: CounterEffectProps) => {
  const [counter, setCounter] = useState(initialValue)
  const counterElement = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {
    setCounter(value => Math.min(MAX_COUNT, value + 1))
  }

  useEffect(() => {
    if (counter < MAX_COUNT) return
    console.log('Se llegó al valor máximo')

    const tl = gsap.timeline()
    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
  }, [counter])

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={ counterElement }>{ counter }</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}
