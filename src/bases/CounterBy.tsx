import { useState } from 'react'

interface CounterByProps {
  initialValue: number
}

interface CounterStateProps {
  counter: number,
  clicks: number
}

export const CounterBy = ({ initialValue }: CounterByProps) => {
  const [{ counter, clicks }, setCounter] = useState<CounterStateProps>({
    counter: initialValue,
    clicks: 0
  })

  const handleClick = (value: number) => {
    setCounter({ clicks: clicks + 1, counter: counter + value })
  }

  return (
    <>
      <h1>CounterBy: { counter } </h1>
      <h1>Clicks: { clicks } </h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
}
