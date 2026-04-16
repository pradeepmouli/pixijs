# Classes

## assets

### `Assets`
The global Assets class is a singleton that manages loading, caching, and unloading of all resources
in your PixiJS application.

Key responsibilities:
- **URL Resolution**: Maps URLs/keys to browser-compatible resources
- **Resource Loading**: Handles loading and transformation of assets
- **Asset Caching**: Manages a global cache to prevent duplicate loads
- **Memory Management**: Provides unloading capabilities to free memory

Advanced Features:
- **Asset Bundles**: Group and manage related assets together
- **Background Loading**: Load assets before they're needed over time
- **Format Detection**: Automatically select optimal asset formats

Supported Asset Types:
| Type                | Extensions                                                       | Loaders                                                               |
| ------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| Textures            | `.png`, `.jpg`, `.gif`, `.webp`, `.avif`, `.svg`                 | loadTextures, loadSvg                                 |
| Video Textures      | `.mp4`, `.m4v`, `.webm`, `.ogg`, `.ogv`, `.h264`, `.avi`, `.mov` | loadVideoTextures                                             |
| Sprite Sheets       | `.json`                                                          | spritesheetAsset                                              |
| Bitmap Fonts        | `.fnt`, `.xml`, `.txt`                                           | loadBitmapFont                                                |
| Web Fonts           | `.ttf`, `.otf`, `.woff`, `.woff2`                                | loadWebFont                                                   |
| JSON                | `.json`                                                          | loadJson                                                      |
| Text                | `.txt`                                                           | loadTxt                                                       |
| Compressed Textures | `.basis`, `.dds`, `.ktx`, `.ktx2`                                | loadBasis, loadDDS, loadKTX, loadKTX2 |
> [!NOTE] Some loaders allow for custom configuration, please refer to the specific loader documentation for details.
**Properties:**
- `resolver: Resolver` — The URL resolver for assets. Maps various asset keys and URLs to their final loadable form.
- `loader: Loader` — The loader responsible for loading all assets. Handles different file types
and transformations.
- `cache: CacheClass` — The global cache for all loaded assets. Manages storage and retrieval of
processed assets.
**Methods:**
- `init(options: AssetInitOptions): Promise<void>` — Initializes the Assets class with configuration options. While not required,
calling this before loading assets is recommended to set up default behaviors.
- `add(assets: ArrayOr<UnresolvedAsset>): void` — Registers assets with the Assets resolver. This method maps keys (aliases) to asset sources,
allowing you to load assets using friendly names instead of direct URLs.
- `load<T>(urls: string | UnresolvedAsset, onProgress?: LoadOptions | ProgressCallback): Promise<T>` — Loads one or more assets and returns a promise that resolves with the loaded content.
Assets are cached, so subsequent loads will return the same instance of the asset without re-fetching.
- `addBundle(bundleId: string, assets: Record<string, ArrayOr<string> | UnresolvedAsset<any>> | UnresolvedAsset<any>[]): void` — Registers a bundle of assets that can be loaded as a group. Bundles are useful for organizing
assets into logical groups, such as game levels or UI screens.
- `loadBundle(bundleIds: ArrayOr<string>, onProgress?: ProgressCallback): Promise<any>` — Loads a bundle or multiple bundles of assets. Bundles are collections of related assets
that can be loaded together.
- `backgroundLoad(urls: ArrayOr<string>): Promise<void>` — Initiates background loading of assets. This allows assets to be loaded passively while other operations
continue, making them instantly available when needed later.

Background loading is useful for:
- Preloading game levels while in a menu
- Loading non-critical assets during gameplay
- Reducing visible loading screens
- `backgroundLoadBundle(bundleIds: ArrayOr<string>): Promise<void>` — Initiates background loading of asset bundles. Similar to backgroundLoad but works with
predefined bundles of assets.

Perfect for:
- Preloading level bundles during gameplay
- Loading UI assets during splash screens
- Preparing assets for upcoming game states
- `get<T>(keys: string): T` — Instantly gets an asset already loaded from the cache. Returns undefined if the asset hasn't been loaded yet.
- `unload(urls: ArrayOr<string> | ResolvedAsset<any> | ResolvedAsset<any>[]): Promise<void>` — Unloads assets and releases them from memory. This method ensures proper cleanup of
loaded assets when they're no longer needed.
- `unloadBundle(bundleIds: ArrayOr<string>): Promise<void>` — Unloads all assets in a bundle. Use this to free memory when a bundle's assets
are no longer needed, such as when switching game levels.
- `setPreferences(preferences: Partial<AssetsPreferences>): void` — Sets global preferences for asset loading behavior. This method configures how assets
are loaded and processed across all parsers.
```typescript
import { Assets } from 'pixi.js';

// Initialize with options (optional). You can call Assets.load directly without init.
await Assets.init({
    // Base path for all asset URLs
    basePath: 'https://my-cdn.com/assets/',
    // Manifest object that defines all assets
    manifest: {
       bundles: [{ name: 'gameAssets', assets: [] }, ...],
    }, *
    // Preferred texture settings
    texturePreference: {
        resolution: window.devicePixelRatio,
        format: ['avif', 'webp', 'png']
    }
});

// Basic loading
const texture = await Assets.load('images/sprite.png');

// Load multiple assets
const assets = await Assets.load([
    'images/bg.png',
    'images/character.png',
    'fonts/game.fnt'
]);

// Using aliases + multiple formats
await Assets.load({ alias: 'hero', src: 'images/hero.{webp,png}' });
const sprite = Sprite.from('hero'); // Uses the best available format

// background loading
Assets.backgroundLoad(['images/level1.json', 'images/level2.json']); // Loads in the background one at a time

// Load a bundle of assets from the manifest
const levelAssets = await Assets.loadBundle('gameAssets');
// Background loading of a bundle. This will load assets in the background one at a time.
// Can be interrupted at any time by calling Assets.loadBundle('gameAssets') again.
Assets.backgroundLoadBundle('resultsAssets');

// Memory management
await Assets.unload('hero');
await Assets.unloadBundle('levelOne');
```
