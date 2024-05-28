# inventory-xi

An offline inventory viewer for Final Fantasy XI. It relies on data from [Windower 4](https://www.windower.net/) and its [findAll](https://docs.windower.net/addons/findall/) addon, and provides additional functionality for [GearSwap](https://docs.windower.net/addons/gearswap/) users. No Ashita support at this time.

**Still in early development and not yet ready for consumption.**

## Project Goals

1. Provide an attractive and user-friendly UI for viewing and searching your inventory across all accounts and characters without having to log in.
2. Indicate opportunities for reclaiming lost space, such as:
   - Stackable items spread across multiple containers
   - Items not used in any of your GearSwap luas
   - Items that can be moved to storage slips
   - Duplicate sortie earrings
   - Calculate voids and shards needed for relic upgrades
3. Learn and skill up!

## Developing

1. Clone the project
2. Install dependencies `npm install`
3. Start the development server with `npm run dev` or begin test monitoring with `npm test`

## What I learned

So far, I've decided that Svelte isn't for me. I don't find the syntax or conventions especially pleasant to use, and the time I'd have to invest to get comfortable with it doesn't feel worth it as a career objective when React is still so ubiquitous. Instead, I think I'll go with a comparatively simple Vite stack built on Electron to make distribution a bit easier.

## Tech Stack

<div >
  <img width="40" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>&nbsp;
  <img width="40" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>&nbsp;
  <img width="40" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>&nbsp;
  <img width="40" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/82df4543-236b-4e45-9604-5434e3faab17" alt="SQLite" title="SQLite"/>
  <img width="40" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" title="Vite"/>&nbsp;
</div>
