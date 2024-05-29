import { Button, Input } from '@nextui-org/react'

const ChooseFolderButton = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-x-3">
      <Input placeholder="Select Windower folder..." />
      <Button color="primary">Browse...</Button>
    </div>
  )
}

export default ChooseFolderButton
