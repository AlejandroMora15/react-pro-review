import { useReducer } from 'react'

interface CounterStateProps {
  counter: number,
  previous: number,
  changes: number
}

const INITIAL_STATE: CounterStateProps = {
  counter: 0,
  previous: 0,
  changes: 0
}

type CounterAction =
  | { type: 'increaseBy', payload: { value: number }}
  | { type: 'reset'}

const counterReducer = (state: CounterStateProps, action: CounterAction): CounterStateProps => {
  const { counter, changes } = state
  switch (action.type) {
    case 'reset':
      return INITIAL_STATE
    case 'increaseBy':
      return {
        counter: counter + action.payload.value,
        changes: changes + 1,
        previous: counter
      }
    default:
      return state
  }
}

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } })
  }

  return (
    <>
      <h1>CounterReducerComponent:</h1>
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
