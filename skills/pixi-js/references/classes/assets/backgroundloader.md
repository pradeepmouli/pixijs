# Classes

## assets

### `BackgroundLoader`
The BackgroundLoader handles loading assets passively in the background to prepare them for future use.
It loads one asset at a time to minimize impact on application performance.

Key features:
- Sequential loading of assets
- Automatic pause when high-priority loads occur
- Configurable concurrency
```ts
constructor(loader: Loader, verbose: boolean): BackgroundLoader
```
**Properties:**
- `verbose: boolean` — Should the loader log to the console.
```ts
import { Assets } from 'pixi.js';

// Background load level assets while in menu
Assets.backgroundLoad([
    'level1/background.png',
    'level1/sprites.json',
    'level1/music.mp3'
]);

// Assets will be instantly available when needed
const assets = await Assets.load([
    'level1/background.png',
    'level1/sprites.json'
]);

// Background load bundles
Assets.backgroundLoadBundle('level2');

// Later, instant access
const level2 = await Assets.loadBundle('level2');
```
> [!NOTE] You typically do not need to use this class directly. Use the main Assets.backgroundLoad API instead.
