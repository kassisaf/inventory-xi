import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'

const ChooseFolderButton = (): JSX.Element => {
  const [windowerPath, setWindowerPath] = useState('')

  const handleClick = async (): Promise<void> => {
    const selectedPath = await window.electron.openFileDialog()
    if (selectedPath) {
      setWindowerPath(selectedPath)
    }
  }

  return (
    <div className="flex flex-row gap-x-3">
      <Input placeholder="Select Windower folder..." variant="bordered" isReadOnly value={windowerPath} />
      <Button color="primary" onClick={handleClick}>
        Browse...
      </Button>
    </div>
  )
}

export default ChooseFolderButton
