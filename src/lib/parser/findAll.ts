import fs from 'fs'
import { join } from 'path'
import { createInterface } from 'readline'
import events from 'events'

class Container {
  name: string
  items: Map<number, number> // Item ID -> Quantity

  constructor(name: string) {
    this.name = name
    this.items = new Map<number, number>()
  }

  addItem(id: number, quantity: number): void {
    // If the item is already in the container, add the quantity
    if (this.items.has(id)) {
      this.items.set(id, this.items.get(id)! + quantity)
    } else {
      this.items.set(id, quantity)
    }
  }
}

class Character {
  name: string
  gil: number
  containers: Container[]

  constructor(name: string) {
    this.name = name
    this.gil = 0
    this.containers = []
  }

  getContainer(name: string): Container | undefined {
    return this.containers.find((c) => c.name === name)
  }
}

const CONTAINER_PATTERN = new RegExp(/"([\w \d]+)"] = {/g) // Example: ["key items"] = {
const GIL_PATTERN = new RegExp(/"gil"] = (\d+)/g) // Example: ["gil"] = 111479,
const ITEM_PATTERN = new RegExp(/"(\d+)"] = (\d+),/g) // Example: ["1739"] = 1,

const windowerPath = 'C:\\Program Files (x86)\\Windower' // TODO get this from user settings file
const findAllDataPath = join(windowerPath, 'addons', 'findAll', 'data')

async function getCharacterFromFile(characterName: string, filePath: string): Promise<Character | undefined> {
  const character: Character = new Character(characterName)
  let currentContainer: Container

  try {
    // Read the file line by line
    const rl = createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    })
    rl.on('line', (line: string) => {
      // Is the current line an item?
      let match = ITEM_PATTERN.exec(line)
      if (match) {
        const itemId = parseInt(match[1])
        const quantity = parseInt(match[2])
        currentContainer.addItem(itemId, quantity)
        return
      }

      // Is the current line the start of a new container?
      match = CONTAINER_PATTERN.exec(line)
      if (match) {
        // At the start of a new container, push the current one and start a new one
        if (currentContainer) {
          character.containers.push(currentContainer)
        }
        currentContainer = new Container(match[1])
        return
      }

      // Is the current line the character's gil?
      match = GIL_PATTERN.exec(line)
      if (match) {
        character.gil = parseInt(match[1])
        return
      }
    })
    await events.once(rl, 'close')

    // Sort containers by name before returning
    character.containers.sort((a, b) => a.name.localeCompare(b.name))
    return character
  } catch (err) {
    return undefined
  }
}

async function parseCharacterInventories(): Promise<Character[]> {
  // Read character inventory from lua files in the findAll data directory
  const characters: Character[] = []
  const dir = await fs.promises.opendir(findAllDataPath)
  for await (const dirent of dir) {
    if (dirent.name.toLowerCase().endsWith('.lua')) {
      const fullPath = join(findAllDataPath, dirent.name)
      const characterName: string = dirent.name.split('.')[0]
      const character = await getCharacterFromFile(characterName, fullPath)
      if (character) {
        characters.push(character)
      }
    }
  }
  return characters
}
export default parseCharacterInventories
