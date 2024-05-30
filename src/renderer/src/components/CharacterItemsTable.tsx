import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from '@nextui-org/table'

interface CharacterItemsTableProps {
  name: string
}

const columns = [
  {
    key: 'container',
    label: 'Container',
  },
  {
    key: 'en',
    label: 'Item',
  },
  {
    key: 'quantity',
    label: 'Qty.',
  },
  {
    key: 'category',
    label: 'Category',
  },
  {
    key: 'canSendTo',
    label: 'canSendTo',
  },
  {
    key: 'gearSwap',
    label: 'gearSwap',
  },
]

const rows = [
  { container: 'Inventory', en: 'Insect Wing', quantity: 12, category: 'Misc.', canSendTo: 'Any', gearSwap: '-' },
  { container: 'Wardrobe 1', en: 'Haubergeon', quantity: 1, category: 'Armor', canSendTo: 'Any', gearSwap: 'No' },
  { container: 'Wardrobe 3', en: 'Naegling', quantity: 1, category: 'Weapon', canSendTo: 'Mule', gearSwap: 'Yes' },
]

export default function CharacterItemsTable(props: CharacterItemsTableProps): JSX.Element {
  return (
    <Table aria-label={props.name + '&apos;s Items'}>
      <TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
      <TableBody items={rows}>{(item) => <TableRow key={item.en}>{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
    </Table>
  )
}
