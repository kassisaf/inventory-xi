import fs from 'fs'
import { join } from 'path'
import { createInterface } from 'readline'
import events from 'events'
import { BitMask, ItemFlags, ItemJobs, ItemRaces } from './bitmasks'

const windowerPath = 'C:\\Program Files (x86)\\Windower' // TODO get this from user settings file

// Example item line:
//     [19621] = {id=19621,en="Carnwenhan",ja="カルンウェナン",enl="Carnwenhan",jal="カルンウェナン",category="Weapon",damage=42,delay=186,flags=63552,jobs=1024,level=90,races=510,skill=2,slots=3,stack=1,targets=0,type=4},
// Capture groups: 1=id, 2=remaining tokens (varies by item and will need to be parsed separately)
const ITEM_PATTERN = new RegExp(/ +\[\d+\] = {id=(\d+),(.+)},/g)

// TODO move these somewhere else
// const UNKNOWN_EN = '(Unknown)';
// const UNKNOWN_JA = '【未知】';

abstract class BaseItem {
  id: number
  en?: string
  ja?: string
  category?: string
  constructor(id: number) {
    this.id = id
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parseTokens(tokensArray: string[]): void {
    return
  }
  nameMatches(search: string): boolean {
    return this.en?.toLowerCase().includes(search.toLowerCase()) || this.ja?.includes(search) || false
  }
}

class KeyItem extends BaseItem {
  constructor(id: number) {
    super(id)
  }
  parseTokens(tokensArray: string[]): void {
    tokensArray.forEach((token) => {
      const [key, value] = token.replace(/"/g, '').split('=')
      switch (key) {
        case 'en':
          this.en = value
          break
        case 'ja':
          this.ja = value
          break
        case 'category':
          this.category = value
          break
        default:
          break
      }
    })
  }
}

class Item extends BaseItem {
  enl?: string
  jal?: string
  flags?: string[]
  stack?: number
  targets?: BitMask
  type?: string // TODO figure out how this works
  cast_time?: number
  jobs?: string[]
  level?: number
  races?: string[]
  slots?: BitMask
  cast_delay?: number
  max_charges?: number
  recast_delay?: number
  shield_size?: number
  damage?: number
  delay?: number
  skill?: BitMask
  ammo_type?: string // Bait, Bolt, Arrow, etc.
  range_type?: string
  item_level?: number
  superior_level?: number
  constructor(id: number) {
    super(id)
  }
  nameMatches(search: string): boolean {
    return super.nameMatches(search) || this.enl?.toLowerCase().includes(search.toLowerCase()) || this.jal?.includes(search) || false
  }
  parseTokens(tokensArray: string[]): void {
    tokensArray.forEach((token) => {
      const [key, value] = token.replace(/"/g, '').split('=')
      switch (key) {
        case 'en':
          this.en = value
          break
        case 'ja':
          this.ja = value
          break
        case 'enl':
          this.enl = value
          break
        case 'jal':
          this.jal = value
          break
        case 'category':
          this.category = value
          break
        case 'flags':
          this.flags = Object.keys(ItemFlags).filter((key) => /[A-Za-z]+/g.test(key) && new BitMask(value).get(ItemFlags[key as keyof typeof ItemFlags]))
          break
        case 'stack':
          this.stack = parseInt(value)
          break
        case 'targets':
          this.targets = new BitMask(value)
          break
        case 'type':
          this.type = value
          break
        case 'cast_time':
          this.cast_time = parseInt(value)
          break
        case 'jobs':
          this.jobs = Object.keys(ItemJobs).filter((key) => /[A-Z]{3}/g.test(key) && new BitMask(value).get(ItemJobs[key as keyof typeof ItemJobs]))
          break
        case 'level':
          this.level = parseInt(value)
          break
        case 'races':
          this.races = Object.keys(ItemRaces).filter((key) => /[A-Za-z]+/g.test(key) && new BitMask(value).get(ItemRaces[key as keyof typeof ItemRaces]))
          break
        case 'slots':
          this.slots = new BitMask(value)
          break
        case 'cast_delay':
          this.cast_delay = parseInt(value)
          break
        case 'max_charges':
          this.max_charges = parseInt(value)
          break
        case 'recast_delay':
          this.recast_delay = parseInt(value)
          break
        case 'shield_size':
          this.shield_size = parseInt(value)
          break
        case 'damage':
          this.damage = parseInt(value)
          break
        case 'delay':
          this.delay = parseInt(value)
          break
        case 'skill':
          this.skill = new BitMask(value)
          break
        case 'ammo_type':
          this.ammo_type = value
          break
        case 'range_type':
          this.range_type = value
          break
        case 'item_level':
          this.item_level = parseInt(value)
          break
        case 'superior_level':
          this.superior_level = parseInt(value)
          break
        default:
          break
      }
    })
  }
}

async function parseWindowerResources(windowerPath: string): Promise<{ items: Map<number, Item>; keyItems: Map<number, KeyItem> } | undefined> {
  const startTime = performance.now()
  const resourceMaps = { items: new Map<number, Item>(), keyItems: new Map<number, KeyItem>() }

  // Parse items file and add items to the map
  // TODO refactor this loop to a function that can be reused for key items
  let filePath = join(windowerPath, 'res', 'items.lua')
  try {
    const rl = createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    })

    rl.on('line', (line: string) => {
      const match = ITEM_PATTERN.exec(line)
      // Debug output to ensure we're not failing to parse any valid lines
      // if (match === null) {
      // 	console.warn(`WARNING: Unable to parse as usable data: ${line}`);
      // }

      ITEM_PATTERN.lastIndex = 0 // Reset the regex so it can be used again
      if (match) {
        const id = parseInt(match[1])
        const item = new Item(id)
        item.parseTokens(match[2].split(','))
        resourceMaps.items.set(id, item)
      }
    })
    await events.once(rl, 'close')
  } catch (err) {
    console.error(err)
    return undefined
  }

  // Parse key items file and add key items to the map
  filePath = join(windowerPath, 'res', 'key_items.lua')
  try {
    const rl = createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    })

    rl.on('line', (line: string) => {
      const match = ITEM_PATTERN.exec(line)
      // Debug output to ensure we're not failing to parse any valid lines
      // if (match === null) {
      // 	console.warn(`WARNING: Unable to parse as usable data: ${line}`);
      // }

      ITEM_PATTERN.lastIndex = 0 // Reset the regex so it can be used again
      if (match) {
        const id = parseInt(match[1])
        const item = new Item(id)
        item.parseTokens(match[2].split(','))
        resourceMaps.keyItems.set(id, item)
      }
    })
    await events.once(rl, 'close')
  } catch (err) {
    console.error(err)
    return undefined
  }

  const endTime = performance.now()
  console.log(
    `\nFinished parsing and mapping ${resourceMaps.items.size} items and ${resourceMaps.keyItems.size} key items in ${(endTime - startTime).toFixed()}ms.`
  )
  return resourceMaps
}

const windowerResources = await parseWindowerResources(windowerPath)
export default windowerResources
