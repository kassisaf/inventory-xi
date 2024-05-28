import { expect, test } from 'vitest'
import windowerResources from '../../lib/parser/windowerResources'

test('Item flags', () => {
  const SAILFI_BELT = windowerResources!.items.get(28427)
  expect(SAILFI_BELT!.flags).toContain('canEquip')
  expect(SAILFI_BELT!.flags).toContain('rare')
  expect(SAILFI_BELT!.flags).toContain('ex')
  expect(SAILFI_BELT!.flags).toContain('noSale')
  expect(SAILFI_BELT!.flags).toContain('noAuction')
  expect(SAILFI_BELT!.flags).toContain('noDelivery')
  expect(SAILFI_BELT!.flags).toContain('deliveryInner')
  expect(SAILFI_BELT!.flags).not.toContain('canTradeNpc')
  expect(SAILFI_BELT!.flags).not.toContain('inscribable')
  expect(SAILFI_BELT!.flags).not.toContain('scroll')
  expect(SAILFI_BELT!.flags).not.toContain('linkshell')
})

test('Item jobs', () => {
  const WAR_JSE_NECK = 25417 // Warrior's Bead Necklace
  const MNK_JSE_NECK = 25423 // Monk's Nodowa
  const WHM_JSE_NECK = 25429 // Cleric's Torque
  const BLM_JSE_NECK = 25435 // Sorcerer's Stole
  const RDM_JSE_NECK = 25441 // Duelist's Torque
  const THF_JSE_NECK = 25447 // Assassin's Gorget
  const PLD_JSE_NECK = 25453 // Knight's Bead Necklace
  const DRK_JSE_NECK = 25459 // Abyssal Bead Necklace
  const BST_JSE_NECK = 25465 // Beast Tamer's Earring
  const BRD_JSE_NECK = 25471 // Bard's Charm
  const RNG_JSE_NECK = 25477 // Scout's Gorget
  const SAM_JSE_NECK = 25483 // Samurai's Nodowa
  const NIN_JSE_NECK = 25489 // Ninja Nodowa
  const DRG_JSE_NECK = 25495 // Dragoon's Collar
  const SMN_JSE_NECK = 25501 // Summoner's Collar
  const BLU_JSE_NECK = 25507 // Mirage Stole
  const COR_JSE_NECK = 25513 // Commodore Charm
  const PUP_JSE_NECK = 25519 // Puppetmaster's Collar
  const DNC_JSE_NECK = 25525 // Etoile Gorget
  const SCH_JSE_NECK = 25531 // Argute Stole
  const GEO_JSE_NECK = 25537 // Bagua Charm
  const RUN_JSE_NECK = 25543 // Futhark Torque

  expect(windowerResources!.items.get(WAR_JSE_NECK)!.jobs).toEqual(['WAR'])
  expect(windowerResources!.items.get(MNK_JSE_NECK)!.jobs).toEqual(['MNK'])
  expect(windowerResources!.items.get(WHM_JSE_NECK)!.jobs).toEqual(['WHM'])
  expect(windowerResources!.items.get(BLM_JSE_NECK)!.jobs).toEqual(['BLM'])
  expect(windowerResources!.items.get(RDM_JSE_NECK)!.jobs).toEqual(['RDM'])
  expect(windowerResources!.items.get(THF_JSE_NECK)!.jobs).toEqual(['THF'])
  expect(windowerResources!.items.get(PLD_JSE_NECK)!.jobs).toEqual(['PLD'])
  expect(windowerResources!.items.get(DRK_JSE_NECK)!.jobs).toEqual(['DRK'])
  expect(windowerResources!.items.get(BST_JSE_NECK)!.jobs).toEqual(['BST'])
  expect(windowerResources!.items.get(BRD_JSE_NECK)!.jobs).toEqual(['BRD'])
  expect(windowerResources!.items.get(RNG_JSE_NECK)!.jobs).toEqual(['RNG'])
  expect(windowerResources!.items.get(SAM_JSE_NECK)!.jobs).toEqual(['SAM'])
  expect(windowerResources!.items.get(NIN_JSE_NECK)!.jobs).toEqual(['NIN'])
  expect(windowerResources!.items.get(DRG_JSE_NECK)!.jobs).toEqual(['DRG'])
  expect(windowerResources!.items.get(SMN_JSE_NECK)!.jobs).toEqual(['SMN'])
  expect(windowerResources!.items.get(BLU_JSE_NECK)!.jobs).toEqual(['BLU'])
  expect(windowerResources!.items.get(COR_JSE_NECK)!.jobs).toEqual(['COR'])
  expect(windowerResources!.items.get(PUP_JSE_NECK)!.jobs).toEqual(['PUP'])
  expect(windowerResources!.items.get(DNC_JSE_NECK)!.jobs).toEqual(['DNC'])
  expect(windowerResources!.items.get(SCH_JSE_NECK)!.jobs).toEqual(['SCH'])
  expect(windowerResources!.items.get(GEO_JSE_NECK)!.jobs).toEqual(['GEO'])
  expect(windowerResources!.items.get(RUN_JSE_NECK)!.jobs).toEqual(['RUN'])
})

test('Item races', () => {
  const HUME_M_RSE = 12654 // Custom Tunic
  const HUME_F_RSE = 12655 // Custom Vest
  const ELVAAN_M_RSE = 12656 // Magna Jerkin
  const ELVAAN_F_RSE = 12657 // Magna Bodice
  const TARUTARU_RSE = 12658 // Wonder Kaftan
  const GALKA_RSE = 12660 // Elder's Surcoat
  const MITHRA_RSE = 12659 // Savage Separates

  expect(windowerResources!.items.get(HUME_M_RSE)!.races).toEqual(['humeMale'])
  expect(windowerResources!.items.get(HUME_F_RSE)!.races).toEqual(['humeFemale'])
  expect(windowerResources!.items.get(ELVAAN_M_RSE)!.races).toEqual(['elvaanMale'])
  expect(windowerResources!.items.get(ELVAAN_F_RSE)!.races).toEqual(['elvaanFemale'])
  expect(windowerResources!.items.get(TARUTARU_RSE)!.races).toEqual(['tarutaruMale', 'tarutaruFemale'])
  expect(windowerResources!.items.get(GALKA_RSE)!.races).toEqual(['galka'])
  expect(windowerResources!.items.get(MITHRA_RSE)!.races).toEqual(['mithra'])
})
