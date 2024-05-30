import { Spinner } from '@nextui-org/spinner'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from '@nextui-org/table'
import { useAsyncList } from '@react-stately/data'
import React from 'react'

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
  const [isLoading, setIsLoading] = React.useState(true)

  const list = useAsyncList({
    // async load({ signal }) {
    //   const res = await fetch('https://swapi.py4e.com/api/people/?search', {
    //     signal,
    //   })
    //   const json = await res.json()
    //   setIsLoading(false)

    //   return {
    //     items: json.results,
    //   }
    // },
    async load() {
      setIsLoading(false)
      return {
        items: rows,
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          const first = (a as { [key: string]: string | number })[sortDescriptor.column!]
          const second = (b as { [key: string]: string | number })[sortDescriptor.column!]
          let cmp = (parseInt(first as string) || first) < (parseInt(second as string) || second) ? -1 : 1

          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }

          return cmp
        }),
      }
    },
  })

  return (
    <Table sortDescriptor={list.sortDescriptor} onSortChange={list.sort} selectionMode="single" removeWrapper aria-label={props.name + '&apos;s Items'}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} allowsSorting>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody isLoading={isLoading} loadingContent={<Spinner label="Loading..." />} items={list.items}>
        {(item) => <TableRow key={item.en}>{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>}
      </TableBody>
    </Table>
  )
}
