# Types & Enums

## accessibility

### `PointerEvents`
The type of the pointer event to listen for.
```ts
"auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | "inherit"
```

## app

### `ApplicationPlugin`
Interface for creating Application plugins. Any plugin that's usable for Application must implement these methods.

To create a plugin:
1. Create a class that implements this interface
2. Add the required static extension property
3. Register the plugin using extensions.add()

## assets

### `ProgressCallback`
Callback function for tracking asset loading progress. The function is called repeatedly
during the loading process with a progress value between 0.0 and 1.0.
```ts
(progress: number) => void
```

### `AssetsPreferences`
Extensible preferences that can be used, for instance, when configuring loaders.
**Properties:**
- `preferWorkers: boolean` — When set to `true`, loading and decoding images will happen with Worker thread,
if available on the browser. This is much more performant as network requests
and decoding can be expensive on the CPU. However, not all environments support
Workers, in some cases it can be helpful to disable by setting to `false`.
- `preferCreateImageBitmap: boolean` — When set to `true`, loading and decoding images will happen with `createImageBitmap`,
otherwise it will use `new Image()`.
- `crossOrigin: string` — The crossOrigin value to use for images when `preferCreateImageBitmap` is `false`.
- `parseAsGraphicsContext: boolean` — When set to `true`, loading and decoding images will happen with `new Image()`,

### `CacheParser`
For every asset that is cached, it will call the parsers test function
the flow is as follows:

1. `cacheParser.test()`: Test the asset.
2. `cacheParser.getCacheableAssets()`: If the test passes call the getCacheableAssets function with the asset

Useful if you want to add more than just a raw asset to the cache
(for example a spritesheet will want to make all its sub textures easily accessible in the cache)
**Properties:**
- `extension: ExtensionMetadata` (optional) — The extension type of this cache parser
- `config: Record<string, any>` (optional) — A config to adjust the parser
- `test: (asset: T) => boolean` — Gets called by the cache when a dev caches an asset
- `getCacheableAssets: (keys: string[], asset: T) => Record<string, any>` — If the test passes, this function is called to get the cacheable assets
an example may be that a spritesheet object will return all the sub textures it has so they can
be cached.

### `FormatDetectionParser`
Format detection is useful for detecting feature support on the current platform.
**Properties:**
- `extension: ExtensionMetadata` (optional) — Should be ExtensionType.DetectionParser
- `test: () => Promise<boolean>` — Browser/platform feature detection supported if return true
- `add: (formats: string[]) => Promise<string[]>` — Add formats (file extensions) to the existing list of formats.
Return an new array with added formats, do not mutate the formats argument.
- `remove: (formats: string[]) => Promise<string[]>` — Remove formats (file extensions) from the list of supported formats.
This is used when uninstalling this DetectionParser.
Return an new array with filtered formats, do not mutate the formats argument.

### `LoaderParserAdvanced`
A more verbose version of the LoaderParser, allowing you to set the loaded, parsed, and unloaded asset separately
**Properties:**
- `extension: ExtensionMetadata` (optional) — Should be ExtensionType.LoaderParser
- `config: CONFIG` (optional) — A config to adjust the parser
- `name: string` (optional)
- `id: string` — The name of the parser (this can be used when specifying parser in a ResolvedAsset)
- `test: (url: string, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => boolean` (optional) — Each URL to load will be tested here,
if the test is passed the assets are loaded using the load function below.
Good place to test for things like file extensions!
- `load: (url: string, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => Promise<ASSET | T>` (optional) — This is the promise that loads the URL provided
resolves with a loaded asset if returned by the parser.
- `testParse: (asset: ASSET, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => Promise<boolean>` (optional) — This function is used to test if the parse function should be run on the asset
If this returns true then parse is called with the asset
- `parse: (asset: ASSET, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => Promise<PARSED_ASSET | T>` (optional) — Gets called on the asset it testParse passes. Useful to convert a raw asset into something more useful
- `unload: (asset: UNLOAD_ASSET, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => void | Promise<void>` (optional) — If an asset is parsed using this parser, the unload function will be called when the user requests an asset
to be unloaded. This is useful for things like sounds or textures that can be unloaded from memory

### `LoaderParser`
The interface to define a loader parser *(all functions are optional)*.

When you create a `parser` object, the flow for every asset loaded is:

1. `parser.test()` - Each URL to load will be tested here, if the test is passed the assets are
loaded using the load function below. Good place to test for things like file extensions!
2. `parser.load()` - This is the promise that loads the URL provided resolves with a loaded asset
if returned by the parser.
3. `parser.testParse()` - This function is used to test if the parse function should be run on the
 asset If this returns true then parse is called with the asset
4. `parse.parse()` - Gets called on the asset it testParse passes. Useful to convert a raw asset
 into something more useful

<br/>
Some loaders may only be used for parsing, some only for loading, and some for both!
**Properties:**
- `extension: ExtensionMetadata` (optional) — Should be ExtensionType.LoaderParser
- `config: CONFIG` (optional) — A config to adjust the parser
- `name: string` (optional)
- `id: string` — The name of the parser (this can be used when specifying parser in a ResolvedAsset)
- `test: (url: string, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => boolean` (optional) — Each URL to load will be tested here,
if the test is passed the assets are loaded using the load function below.
Good place to test for things like file extensions!
- `load: (url: string, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => Promise<ASSET | T>` (optional) — This is the promise that loads the URL provided
resolves with a loaded asset if returned by the parser.
- `testParse: (asset: ASSET, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => Promise<boolean>` (optional) — This function is used to test if the parse function should be run on the asset
If this returns true then parse is called with the asset
- `parse: (asset: ASSET, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => Promise<ASSET | T>` (optional) — Gets called on the asset it testParse passes. Useful to convert a raw asset into something more useful
- `unload: (asset: ASSET, resolvedAsset?: ResolvedAsset<META_DATA>, loader?: Loader) => void | Promise<void>` (optional) — If an asset is parsed using this parser, the unload function will be called when the user requests an asset
to be unloaded. This is useful for things like sounds or textures that can be unloaded from memory

### `LoadFontData`
Data for loading a font

### `LoadSVGConfig`
Configuration for the loadSvg plugin.
**Properties:**
- `crossOrigin: string` — The crossOrigin value to use for loading the SVG as an image.
- `parseAsGraphicsContext: boolean` — When set to `true`, loading and decoding images will happen with `new Image()`,

### `PromiseAndParser`
A promise and parser pair
**Properties:**
- `promise: Promise<any>` — the promise that is loading the asset
- `parser: LoaderParser` — the parser that is loading the asset

### `PreferOrder`
A prefer order lets the resolver know which assets to prefer depending on the various parameters passed to it.
**Properties:**
- `priority: string[]` (optional) — the importance order of the params
- `params: { [key: string]: any }`

### `ResolveURLParser`
Format for url parser, will test a string and if it pass will then parse it, turning it into an ResolvedAsset
**Properties:**
- `extension: ExtensionMetadata` (optional)
- `config: Record<string, any>` (optional) — A config to adjust the parser
- `test: (url: string) => boolean` — the test to perform on the url to determine if it should be parsed
- `parse: (value: string) => ResolvedAsset<any> & { [key: string]: any }` — the function that will convert the url into an object

### `LoadParserName`
```ts
"loadJson" | "loadSvg" | "loadTextures" | "loadTxt" | "loadVideo" | "loadWebFont" | string & {}
```

### `AssetParser`
Names of the parsers that are built into PixiJS.
```ts
"json" | "svg" | "text" | "video" | "web-font" | "bitmap-font" | "spritesheet" | "texture" | "basis" | "dds" | "ktx2" | "ktx" | string & {}
```

### `ResolvedAsset`
A fully resolved asset, with all the information needed to load it.
This represents an asset that has been processed by the resolver and is ready to be loaded.
**Properties:**
- `alias: string[]` (optional) — Array of alternative names for this asset. Used for looking up the same asset by different keys.
- `src: string` (optional) — The URL or relative path to the asset. This is the final, resolved path that will be used for loading.
- `data: T` (optional) — Optional data passed to the asset loader.
Can include texture settings, parser options, or other asset-specific data.
- `format: string` (optional) — File format of the asset, usually the file extension. Used to determine which loader parser to use.
- `loadParser: LoadParserName` (optional)
- `parser: AssetParser` (optional) — Override to specify which parser should load this asset. Useful when file extensions don't match the content type.
- `progressSize: number` (optional) — The amount of progress an asset will contribute to the onProgress event when loading.
This can be any arbitrary value but typically represents the file size.

### `ResolvedSrc`
A fully resolved src specification after pattern resolution and format detection.
Unlike raw asset sources, this type represents the final, concrete source path and format.
**Properties:**
- `data: any` (optional) — Optional data passed to the asset loader.
Can include texture settings, parser options, or other asset-specific data.
- `format: string` (optional) — File format of the asset, usually the file extension. Used to determine which loader parser to use.
- `src: string` (optional) — The URL or relative path to the asset. This is the final, resolved path that will be used for loading.
- `loadParser: LoadParserName` (optional)
- `parser: AssetParser` (optional) — Override to specify which parser should load this asset. Useful when file extensions don't match the content type.

### `AssetSrc`
A valid asset source specification. This can be a URL string, a ResolvedSrc,
or an array of either. The source defines where and how to load an asset.
```ts
ArrayOr<string> | ArrayOr<ResolvedSrc> & { [key: string]: any }
```

### `UnresolvedAsset`
An asset that has not been resolved yet. This is the initial format used when adding assets
to the Assets system before they are processed into a ResolvedAsset.
**Properties:**
- `data: T` (optional) — Optional data passed to the asset loader.
Can include texture settings, parser options, or other asset-specific data.
- `format: string` (optional) — File format of the asset, usually the file extension. Used to determine which loader parser to use.
- `loadParser: LoadParserName` (optional)
- `parser: AssetParser` (optional) — Override to specify which parser should load this asset. Useful when file extensions don't match the content type.
- `alias: ArrayOr<string>` (optional) — Aliases associated with asset
- `src: AssetSrc` (optional) — The URL or relative path to the asset

### `AssetsBundle`
Structure of a bundle found in a AssetsManifest file. Bundles allow you to
group related assets together for easier management and loading.
**Properties:**
- `name: string` — Unique identifier for the bundle
- `assets: Record<string, ArrayOr<string> | UnresolvedAsset<any>> | UnresolvedAsset<any>[]` — Assets contained in the bundle. Can be an array of assets or a record mapping aliases to sources.

### `AssetsManifest`
The manifest format for defining all assets in your application. Manifests provide a
structured way to organize and manage your assets through bundles.
**Properties:**
- `bundles: AssetsBundle[]` — Array of asset bundles that make up the manifest

### `SpritesheetFrameData`
Represents the JSON data for a spritesheet atlas.
**Properties:**
- `frame: { x: number; y: number; w: number; h: number }` — The frame rectangle of the texture.
- `trimmed: boolean` (optional) — Whether the texture is trimmed.
- `rotated: boolean` (optional) — Whether the texture is rotated.
- `sourceSize: { w: number; h: number }` (optional) — The source size of the texture.
- `spriteSourceSize: { h?: number; w?: number; x: number; y: number }` (optional) — The sprite source size.
- `anchor: PointData` (optional) — The anchor point of the texture.
- `borders: TextureBorders` (optional) — The 9-slice borders of the texture.

### `SpritesheetData`
Atlas format.
**Properties:**
- `frames: Dict<SpritesheetFrameData>` — The frames of the atlas.
- `animations: Dict<string[]>` (optional) — The animations of the atlas.
- `meta: { app?: string; format?: string; frameTags?: { from: number; name: string; to: number; direction: string }[]; image?: string; layers?: { blendMode: string; name: string; opacity: number }[]; scale: string | number; size?: { h: number; w: number }; slices?: { color: string; name: string; keys: { frame: number; bounds: { x: number; y: number; w: number; h: number } }[] }[]; related_multi_packs?: string[]; version?: string }` — The meta data of the atlas.

### `SpriteSheetJson`
Interface for the JSON data structure of a spritesheet.
This is used to define the structure of the JSON file that describes a spritesheet.
It includes metadata about the spritesheet and the frames it contains.
**Properties:**
- `meta: { image: string; scale: string; related_multi_packs?: string[] }` — The meta data of the atlas.
- `frames: Dict<SpritesheetFrameData>` — The frames of the atlas.
- `animations: Dict<string[]>` (optional) — The animations of the atlas.

### `AssetExtension`
This developer convenience object allows developers to group
together the various asset parsers into a single object.
**Properties:**
- `extension: Asset` — The type of extension
- `loader: LoaderParserAdvanced<ASSET, ASSET, ASSET, META_DATA>` (optional) — the asset loader
- `resolver: Partial<ResolveURLParser>` (optional) — the asset resolve parser
- `cache: Partial<CacheParser<CACHE_ASSET>>` (optional) — the asset cache parser
- `detection: Partial<FormatDetectionParser>` (optional) — the asset format detection parser

### `AssetExtensionAdvanced`
A more verbose version of the AssetExtension,
allowing you to set the cached, loaded, parsed, and unloaded asset separately
**Properties:**
- `extension: Asset` — The type of extension
- `loader: LoaderParserAdvanced<ASSET, PARSED_ASSET, UNLOAD_ASSET, META_DATA>` (optional) — the asset loader
- `resolver: Partial<ResolveURLParser>` (optional) — the asset resolve parser
- `cache: Partial<CacheParser<CACHE_ASSET>>` (optional) — the asset cache parser
- `detection: Partial<FormatDetectionParser>` (optional) — the asset format detection parser

### `LoaderParserPriority`
The extension priority for loader parsers.
Helpful when managing multiple parsers that share the same extension test.
The higher priority parsers will be checked first.

<!-- truncated -->
