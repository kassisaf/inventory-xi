import ChooseFolderButton from './components/ChooseFolderButton'

function App(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-5xl">Inventory XI</h1>
      <ChooseFolderButton />
    </div>
  )
}

export default App
