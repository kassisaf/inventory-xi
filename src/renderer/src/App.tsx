import { Tabs, Tab, Card, CardBody, Button } from '@nextui-org/react'
import { HiCog8Tooth as SettingsIcon } from 'react-icons/hi2'
import { SiKofi as CoffeeIcon } from 'react-icons/si'
import { FaRegQuestionCircle as HelpIcon } from 'react-icons/fa'
import { MdOutlineRefresh as RefreshIcon } from 'react-icons/md'

function App(): JSX.Element {
  return (
    <div className="flex h-screen grow flex-col justify-between bg-zinc-900 text-zinc-50 dark">
      <header className="flex items-center justify-between bg-zinc-700/50 px-6 py-5">
        <h1 className="bold text-3xl">Inventory XI</h1>
        <div className="flex items-center gap-3">
          {/* <CoffeeIcon size="32px" className="text-rose-300" /> */}

          <Button isIconOnly aria-label="Refresh">
            <RefreshIcon size="32px" />
          </Button>
          <Button isIconOnly aria-label="Settings">
            <SettingsIcon size="32px" />
          </Button>
          <Button isIconOnly aria-label="About">
            <HelpIcon size="28px" />
          </Button>
        </div>
      </header>

      <main className="grow px-3 py-2">
        <div className="flex w-full flex-col">
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

      <footer className="flex justify-between bg-zinc-700/50 px-6 py-2 text-zinc-200">
        <div className="flex gap-x-6">
          <div>#/# slots used</div>
          <div># recoverable</div>
        </div>
        <div className="text-md italic">Parsed 22,356 items in 2.6 seconds</div>
      </footer>
    </div>
  )
}

export default App
