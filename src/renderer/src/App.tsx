import { Button } from '@nextui-org/react'

function App(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-5xl">Inventory XI</h1>
      <Button color="primary" variant="shadow">
        Open...
      </Button>
    </div>
  )
}

export default App
