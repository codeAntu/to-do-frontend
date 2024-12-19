import { Button } from '@nextui-org/react'
import Todos from './components/Todos'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const temp = 'Hello World'

  return (
    <div className='container mx-auto p-5 dark:bg-black dark:text-white'>
      <Todos />
    </div>
  )

  return (
    <>
      <div>Hello Vite + React!</div>
      <Button color='primary'>Click me</Button>
    </>
  )
}

export default App
