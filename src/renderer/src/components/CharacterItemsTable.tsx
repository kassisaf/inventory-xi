import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'

interface CharacterItemsTableProps {
  name: string
}

const mockItems = [
  { container: 'Inventory', item: 'Insect Wing', quantity: 12, category: 'Misc.', canSendTo: 'Any', gearSwap: '-' },
  { container: 'Wardrobe 1', item: 'Haubergeon', quantity: 1, category: 'Armor', canSendTo: 'Any', gearSwap: 'No' },
  { container: 'Wardrobe 3', item: 'Naegling', quantity: 1, category: 'Weapon', canSendTo: 'Mule', gearSwap: 'Yes' },
]

export default function CharacterItemsTable(props: CharacterItemsTableProps): JSX.Element {
  return (
    <Table aria-label={props.name + '&apos;s Items Table'}>
      <TableHeader>
        <TableColumn>Container</TableColumn>
        <TableColumn>Item</TableColumn>
        <TableColumn>Qty.</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>CanSendTo</TableColumn>
        <TableColumn>GearSwap</TableColumn>
      </TableHeader>
      <TableBody>
        {mockItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.container}</TableCell>
            <TableCell>{item.item}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.canSendTo}</TableCell>
            <TableCell>{item.gearSwap}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
