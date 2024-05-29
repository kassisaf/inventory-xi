import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'
import { HiMiniUser as UserIcon } from 'react-icons/hi2'

function App(): JSX.Element {
  return (
    <div className="flex h-screen grow flex-col justify-between bg-zinc-900 text-zinc-50">
      <header className="flex justify-center bg-zinc-700/50 px-6 pb-3 pt-1">
        <h1 className="bold text-3xl">Inventory XI</h1>
      </header>

      <main className="grow px-3 py-2">
        <div className="flex w-full flex-col dark">
          <Tabs aria-label="Options" variant="underlined">
            <Tab key="photos" title="Zurirose">
              <Card>
                <CardBody>Zurirose's items table</CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Bleakmind">
              <Card>
                <CardBody>Bleakmind's items table</CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Braveface">
              <Card>
                <CardBody>Braveface's items table</CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </main>

      <footer className="flex gap-x-6 bg-zinc-700/50 px-6 py-1">
        <div>#/# slots used</div>
        <div># recoverable</div>
      </footer>
    </div>
  )
}

export default App
