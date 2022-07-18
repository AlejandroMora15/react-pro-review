import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'

function App () {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy initialValue={10} />
      <CounterEffect initialValue={7} />
      <CounterHook />
    </>
  )
}

export default App
