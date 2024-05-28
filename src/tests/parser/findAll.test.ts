import { expect, test } from 'vitest'
import parseCharacterInventories from '../../lib/parser/findAll'

// Update this to match your own character data or some tests will fail
const MY_CHARACTER_DATA = {
  character_count: 4,
  first_character_name: 'Azurienne',
  last_character_name: 'Zurirose',
}

const inventoryData = await parseCharacterInventories()

test('Parsed all characters', async () => {
  expect(inventoryData).toBeDefined()
  expect(inventoryData).toHaveLength(MY_CHARACTER_DATA.character_count)
  expect(inventoryData.at(0)!.name).toEqual(MY_CHARACTER_DATA.first_character_name)
  expect(inventoryData.at(-1)!.name).toEqual(MY_CHARACTER_DATA.last_character_name)
})

test('No container has over 80 slots', async () => {
  inventoryData.forEach((character) => {
    character.containers.forEach((container) => {
      expect(container.items.keys.length).toBeLessThanOrEqual(80)
    })
  })
})
