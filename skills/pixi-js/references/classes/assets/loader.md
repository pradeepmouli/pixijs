# Classes

## assets

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
