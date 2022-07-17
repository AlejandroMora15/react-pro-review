import { useEffect, useState } from 'react'

interface CounterEffectProps {
  initialValue: number
}

const MAX_COUNT = 10

export const CounterEffect = ({ initialValue }: CounterEffectProps) => {
  const [counter, setCounter] = useState(initialValue)

  const handleClick = () => {
    setCounter(value => Math.min(MAX_COUNT, value + 1))
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <h1>CounterEffect: { counter } </h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}
