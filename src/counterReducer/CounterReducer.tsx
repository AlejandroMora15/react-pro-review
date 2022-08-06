import { useReducer } from 'react'
import { doIncreaseBy, doReset } from './actions/actions'
import { counterReducer, INITIAL_STATE } from './state/counterReducer'

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch(doReset())
  }

  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value))
  }

  return (
    <>
      <h1>CounterReducerComponent Segmented:</h1>
      <pre> { JSON.stringify(counterState) } </pre>
      <button onClick={() => increaseBy(1)}>
        +1
      </button>
      <button onClick={() => increaseBy(5)}>
        +5
      </button>
      <button onClick={() => increaseBy(10)}>
        +10
      </button>
      <button onClick={handleReset}>
        reset
      </button>
    </>
  )
}
