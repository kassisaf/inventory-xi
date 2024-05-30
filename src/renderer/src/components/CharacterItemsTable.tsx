import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'

interface CharacterItemsTableProps {
  name: string
}

export default function CharacterItemsTable(props: CharacterItemsTableProps): JSX.Element {
  return (
    <Table aria-label={props.name + '&apos;s Items Table'}>
      <TableHeader>
        <TableColumn>Item</TableColumn>
        <TableColumn>Qty.</TableColumn>
        <TableColumn>Container</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Insect Wing</TableCell>
          <TableCell>12</TableCell>
          <TableCell>Inventory</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
