function App(): JSX.Element {
  return (
    <div className="flex h-screen grow flex-col justify-between bg-zinc-800 text-zinc-50">
      <header className="bg-zinc-700 px-6 pb-3 pt-1">
        <div className="flex justify-center">
          <h1 className="bold text-3xl">Inventory XI</h1>
        </div>
      </header>

      <nav>
        <div className="flex justify-between">
          <div>Tabs</div>
          <div>Search</div>
        </div>
      </nav>

      <main className="grow">
        <div>Table</div>
      </main>

      <footer>
        <div className="flex gap-x-6 bg-zinc-700 px-6 py-1">
          <div>#/# slots used</div>
          <div># recoverable</div>
        </div>
      </footer>
    </div>
  )
}

export default App
