// Reference: http://wiki.dspt.info/index.php/Items

export class BitMask {
  binaryString: string

  constructor(bitmask: string) {
    // Build from a decimal int
    this.binaryString = parseInt(bitmask, 10).toString(2)
  }
  get(bit: number): boolean {
    return this.binaryString.charAt(this.binaryString.length - 1 - bit) === '1'
  }
}

export enum ItemFlags {
  wallHanging = 0,
  obtainableFromGoblinBox = 1,
  usableInsideMogGarden = 2,
  unknown = 3,
  deliveryInner = 4,
  inscribable = 5,
  noAuction = 6,
  scroll = 7,
  linkshell = 8,
  canUse = 9,
  canTradeNpc = 10,
  canEquip = 11,
  noSale = 12,
  noDelivery = 13,
  ex = 14,
  rare = 15,
}

export enum ItemJobs {
  // First bit is reserved, so we start at 1
  WAR = 1,
  MNK = 2,
  WHM = 3,
  BLM = 4,
  RDM = 5,
  THF = 6,
  PLD = 7,
  DRK = 8,
  BST = 9,
  BRD = 10,
  RNG = 11,
  SAM = 12,
  NIN = 13,
  DRG = 14,
  SMN = 15,
  BLU = 16,
  COR = 17,
  PUP = 18,
  DNC = 19,
  SCH = 20,
  GEO = 21,
  RUN = 22,
}

export enum ItemRaces {
  // First bit is reserved, so we start at 1
  humeMale = 1,
  humeFemale = 2,
  elvaanMale = 3,
  elvaanFemale = 4,
  tarutaruMale = 5,
  tarutaruFemale = 6,
  mithra = 7,
  galka = 8,
}

export enum ItemSlots {
  main = 0,
  sub = 1,
  range = 2,
  ammo = 3,
  head = 4,
  body = 5,
  hands = 6,
  legs = 7,
  feet = 8,
  neck = 9,
  waist = 10,
  ear1 = 11,
  ear2 = 12,
  ring1 = 13,
  ring2 = 14,
  back = 15,
}
