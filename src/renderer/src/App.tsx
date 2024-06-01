import { HiCog8Tooth as SettingsIcon } from 'react-icons/hi2'
// import { SiKofi as CoffeeIcon } from 'react-icons/si'
import { FaRegQuestionCircle as HelpIcon } from 'react-icons/fa'
import { MdOutlineRefresh as RefreshIcon } from 'react-icons/md'
import { BsInfoCircle as InfoIcon } from 'react-icons/bs'
import { LuPackageSearch as SearchIcon } from 'react-icons/lu'

import { Tabs, Tab } from '@nextui-org/tabs'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Spinner } from '@nextui-org/spinner'

import CharacterItemsTable from './components/CharacterItemsTable'

function App(): JSX.Element {
  return (
    <>
      <header className="flex items-center justify-between gap-x-6 p-6 pb-2">
        <Input placeholder="Search by name..." startContent={<SearchIcon size="24px" className="mr-1 text-zinc-500" />} />
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
            <Tab key="Zurirose" title="Zurirose">
              <CharacterItemsTable name="Zurirose" />
            </Tab>
            <Tab key="Bleakmind" title="Bleakmind">
              <CharacterItemsTable name="Bleakmind" />
            </Tab>
            <Tab key="Braveface" title="Braveface">
              <CharacterItemsTable name="Braveface" />
            </Tab>
          </Tabs>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full bg-zinc-800">
        <div className="flex justify-between px-3 py-2 text-zinc-200">
          <div className="flex gap-x-2 light">
            <Spinner size="sm" color="default" className="hidden" />
            <span id="status" className="text-md italic">
              Parsed 22,356 items in 2.6 seconds
            </span>
          </div>
          <div id="tips" className="flex gap-x-8">
            {/* <div>#used/#total</div> */}
            <div className="flex items-center gap-x-2">
              <span className="text-md"># recoverable</span>
              <button aria-label="Info">
                <InfoIcon size="22px" className="text-sky-300" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
