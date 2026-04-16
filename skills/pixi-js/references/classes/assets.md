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

### `Cache`
A global cache for all assets in your PixiJS application. The cache system provides fast
access to loaded assets and prevents duplicate loading.

Key Features:
- Automatic caching of loaded assets
- Support for custom cache parsers
- Automatic parsing of complex assets (e.g., spritesheets)
- Memory management utilities
> [!IMPORTANT] You typically do not need to use this class directly.
> Use the main Assets class for high-level asset management.
> `Assets.get(key)` will automatically use the cache.
**Methods:**
- `reset(): void` — Clear all entries.
- `has(key: any): boolean` — Check if the key exists
- `get<T>(key: any): T` — Fetch entry by key
- `set<T>(key: any, value: T): void` — Set a value by key or keys name
- `remove(key: any): void` — Remove entry by key

This function will also remove any associated alias from the cache also.
```ts
import { Cache } from 'pixi.js';

// Store an asset in the cache
Cache.set('myTexture', texture);

// Retrieve an asset
const texture = Cache.get('myTexture');

// Check if an asset exists
if (Cache.has('myTexture')) {
    // Use the cached asset
    const sprite = new Sprite(Cache.get('myTexture'));
}

// Remove an asset from cache
Cache.remove('myTexture');

// Clear all cached assets
Cache.reset();
```

### `Loader`
The Loader is responsible for loading all assets, such as images, spritesheets, audio files, etc.
It does not do anything clever with URLs - it just loads stuff!
Behind the scenes all things are cached using promises. This means it's impossible to load an asset more than once.
Through the use of LoaderParsers, the loader can understand how to load any kind of file!

It is not intended that this class is created by developers - its part of the Asset class
This is the second major system of PixiJS' main Assets class
```ts
constructor(): Loader
```
**Properties:**
- `defaultOptions: LoadOptions` — Default options for loading assets
- `loadOptions: LoadOptions` — Options for loading assets with the loader.
These options will be used as defaults for all load calls made with this loader instance.
They can be overridden by passing options directly to the load method.
- `parsers: LoaderParser<any, any, Record<string, any>>[]` — All loader parsers registered
- `promiseCache: Record<string, PromiseAndParser>` — Cache loading promises that ae currently active
**Methods:**
- `reset(): void` — function used for testing
- `load<T>(assetsToLoadIn: string | ResolvedAsset<any>, onProgress?: LoadOptions | ProgressCallback): Promise<T>` — Loads one or more assets using the parsers added to the Loader.
- `unload(assetsToUnloadIn: string | string[] | ResolvedAsset<any> | ResolvedAsset<any>[]): Promise<void>` — Unloads one or more assets. Any unloaded assets will be destroyed, freeing up memory for your app.
The parser that created the asset, will be the one that unloads it.

### `Resolver`
A class that is responsible for resolving mapping asset URLs to keys.
At its most basic it can be used for Aliases:

```js
resolver.add('foo', 'bar');
resolver.resolveUrl('foo') // => 'bar'
```

It can also be used to resolve the most appropriate asset for a given URL:

```js
resolver.prefer({
    params: {
        format: 'webp',
        resolution: 2,
    }
});

resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);

resolver.resolveUrl('foo') // => 'bar@2x.webp'
```
Other features include:
- Ability to process a manifest file to get the correct understanding of how to resolve all assets
- Ability to add custom parsers for specific file types
- Ability to add custom prefer rules

This class only cares about the URL, not the loading of the asset itself.

It is not intended that this class is created by developers - its part of the Asset class
This is the third major system of PixiJS' main Assets class
```ts
constructor(): Resolver
```
**Properties:**
- `RETINA_PREFIX: RegExp` — The prefix that denotes a URL is for a retina asset.
**Methods:**
- `setBundleIdentifier(bundleIdentifier: BundleIdentifierOptions): void` — Override how the resolver deals with generating bundle ids.
must be called before any bundles are added
- `prefer(preferOrders: PreferOrder[]): void` — Let the resolver know which assets you prefer to use when resolving assets.
Multiple prefer user defined rules can be added.
- `reset(): void` — Used for testing, this resets the resolver to its initial state
- `setDefaultSearchParams(searchParams: string | Record<string, unknown>): void` — Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.
- `getAlias(asset: UnresolvedAsset): string[]` — Returns the aliases for a given asset
- `removeAlias(alias: string, asset?: ResolvedAsset): void` — Removes the specified alias for an asset.

This only removes the alias mapping. It does **not** remove, unload, or destroy the
underlying asset. If the asset is already cached, it stays in memory until you call
`Assets.unload`.

If `asset` is provided, the alias is only removed when the resolver's current mapping for
that alias matches the given `ResolvedAsset`. This lets you avoid accidentally removing an
alias that has been reassigned.

Silently returns if the alias does not exist or the asset does not match.
- `addManifest(manifest: AssetsManifest): void` — Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
generally a manifest would be built using a tool.
- `addBundle(bundleId: string, assets: Record<string, ArrayOr<string> | UnresolvedAsset<any>> | UnresolvedAsset<any>[]): void` — This adds a bundle of assets in one go so that you can resolve them as a group.
For example you could add a bundle for each screen in you pixi app
- `add(aliases: ArrayOr<UnresolvedAsset>): void` — Tells the resolver what keys are associated with witch asset.
The most important thing the resolver does
- `resolveBundle(bundleIds: ArrayOr<string>): Record<string, ResolvedAsset<any>> | Record<string, Record<string, ResolvedAsset<any>>>` — If the resolver has had a manifest set via setManifest, this will return the assets urls for
a given bundleId or bundleIds.
- `resolveUrl(key: ArrayOr<string>): string | Record<string, string>` — Does exactly what resolve does, but returns just the URL rather than the whole asset object
- `resolve(keys: string): ResolvedAsset` — Resolves each key in the list to an asset object.
Another key function of the resolver! After adding all the various key/asset pairs. this will run the logic
of finding which asset to return based on any preferences set using the `prefer` function
by default the same key passed in will be returned if nothing is matched by the resolver.
- `hasKey(key: string): boolean` — Checks if an asset with a given key exists in the resolver
- `hasBundle(key: string): boolean` — Checks if a bundle with the given key exists in the resolver

### `Spritesheet`
Utility class for maintaining reference to a collection
of Textures on a single Spritesheet.

To access a sprite sheet from your code you may pass its JSON data file to Pixi's loader:

```js
import { Assets } from 'pixi.js';

const sheet = await Assets.load('images/spritesheet.json');
```

Alternately, you may circumvent the loader by instantiating the Spritesheet directly:

```js
import { Spritesheet } from 'pixi.js';

const sheet = new Spritesheet(texture, spritesheetData);
await sheet.parse();
console.log('Spritesheet ready to use!');
```

With the `sheet.textures` you can create Sprite objects, and `sheet.animations` can be used to create an AnimatedSprite.

Here's an example of a sprite sheet JSON data file:
```json
{
    "frames": {
        "enemy1.png":
        {
            "frame": {"x":103,"y":1,"w":32,"h":32},
            "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
            "sourceSize": {"w":32,"h":32},
            "anchor": {"x":0.5,"y":0.5}
        },
        "enemy2.png":
        {
            "frame": {"x":103,"y":35,"w":32,"h":32},

<!-- truncated -->
