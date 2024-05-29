interface CharacterItemsTableProps {
  name: string
}

export default function CharacterItemsTable(props: CharacterItemsTableProps): JSX.Element {
  return <div>{props.name}&apos;s Items Table</div>
}
