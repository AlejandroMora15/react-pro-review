import { CounterAction } from '../actions/actions'
import { CounterStateProps } from '../interfaces/interfaces'

export const INITIAL_STATE: CounterStateProps = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const counterReducer = (state: CounterStateProps, action: CounterAction): CounterStateProps => {
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
