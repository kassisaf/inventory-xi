import electronLogo from './assets/electron.svg'

import { NextUIProvider } from '@nextui-org/react'

function App(): JSX.Element {
  return (
    <NextUIProvider>
      <div className="flex flex-col items-center">
        <img alt="logo" className="logo" src={electronLogo} />
        <h1 className="text-5xl">Inventory XI</h1>
      </div>
    </NextUIProvider>
  )
}

export default App
