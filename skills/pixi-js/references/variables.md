# Variables & Constants

## assets

### `loadJson`
A simple loader plugin for loading json data
```ts
const loadJson: { extension: { type: LoadParser; priority: LoaderParserPriority }; name: string; id: string; test: any; load: any }
```

### `loadTxt`
A simple loader plugin for loading text data
```ts
const loadTxt: { name: string; id: string; extension: { type: LoadParser; priority: LoaderParserPriority; name: string }; test: any; load: any }
```

### `loadWebFont`
A loader plugin for handling web fonts
```ts
const loadWebFont: { extension: { type: LoadParser; priority: LoaderParserPriority }; name: string; id: string; test: any; load: any; unload: any }
```

### `loadSvg`
A loader plugin for loading SVG data as textures or graphics contexts.
```ts
const loadSvg: LoaderParser<Texture | GraphicsContext, TextureSourceOptions & LoadSVGConfig, LoadSVGConfig>
```

### `loadTextures`
A simple plugin to load our textures!
This makes use of imageBitmaps where available.
We load the `ImageBitmap` on a different thread using workers if possible.
We can then use the `ImageBitmap` as a source for a Pixi texture

You can customize the behavior of this loader by setting the `config` property.
Which can be found [here]LoadTextureConfig
```js
// Set the config
import { loadTextures } from 'pixi.js';

loadTextures.config = {
   // If true we will use a worker to load the ImageBitmap
   preferWorkers: true,
   // If false we will use new Image() instead of createImageBitmap,
   // we'll also disable the use of workers as it requires createImageBitmap
   preferCreateImageBitmap: true,
   crossOrigin: 'anonymous',
};
```
```ts
const loadTextures: LoaderParser<Texture, TextureSourceOptions, LoadTextureConfig>
```

### `loadVideoTextures`
A simple plugin to load video textures.

You can pass VideoSource options to the loader via the .data property of the asset descriptor
when using Assets.load().
```js
// Set the data
const texture = await Assets.load({
    src: './assets/city.mp4',
    data: {
        preload: true,
        autoPlay: true,
    },
});
```
```ts
const loadVideoTextures: { name: string; id: string; extension: { type: LoadParser; name: string }; test: any; load: any; unload: any }
```

### `loadBasis`
Loads Basis textures using a web worker.
```ts
const loadBasis: { extension: { type: LoadParser; priority: LoaderParserPriority; name: string }; name: string; id: string; test: any; load: any; unload: any }
```

### `basisTranscoderUrls`
The urls for the Basis transcoder files.
These can be set to custom paths if needed.
```ts
const basisTranscoderUrls: { jsUrl: string; wasmUrl: string }
```

### `loadDDS`
Loads DDS textures.
```ts
const loadDDS: { extension: { type: LoadParser; priority: LoaderParserPriority; name: string }; name: string; id: string; test: any; load: any; unload: any }
```

### `loadKTX`
Loads KTX textures.
```ts
const loadKTX: { extension: { type: LoadParser; priority: LoaderParserPriority; name: string }; name: string; id: string; test: any; load: any; unload: any }
```

### `loadKTX2`
Loader parser for KTX2 textures.
This parser loads KTX2 textures using a web worker for transcoding.
It supports both single and multiple textures.
```ts
const loadKTX2: { extension: { type: LoadParser; priority: LoaderParserPriority; name: string }; name: string; id: string; test: any; load: any; unload: any }
```

### `ktxTranscoderUrls`
The urls for the KTX transcoder library.
These can be set to custom paths if needed.
```ts
const ktxTranscoderUrls: { jsUrl: string; wasmUrl: string }
```

### `loadBitmapFont`
Loader plugin for loading bitmap fonts.
It supports both XML and text formats, and can handle distance field fonts.
```ts
const loadBitmapFont: { extension: { type: LoadParser; priority: LoaderParserPriority }; name: string; id: string; test: any; testParse: any; parse: any; load: any; unload: any }
```

### `spritesheetAsset`
Asset extension for loading spritesheets
```ts
const spritesheetAsset: { extension: Asset; cache: { test: (asset: Spritesheet) => boolean; getCacheableAssets: (keys: string[], asset: Spritesheet) => Record<string, any> }; resolver: { extension: { type: ResolveParser; name: string }; test: (value: string) => boolean; parse: (value: string) => { resolution: number; format: string; src: string } }; loader: { name: string; id: string; extension: { type: LoadParser; priority: LoaderParserPriority; name: string }; testParse: any; parse: any; unload: any } }
```

### `WorkerManager`
Manages a pool of web workers for loading ImageBitmap objects asynchronously.

This class provides a thread-safe way to load images using web workers,
automatically managing worker creation, pooling, and cleanup. It supports
checking ImageBitmap support and queuing multiple load requests.

> [!IMPORTANT] You should not need to use this class directly
> However, you can call `WorkerManager.reset()` to clean up all workers when they are no longer needed.
```ts
const WorkerManager: WorkerManagerClass
```

## environment

### `DOMAdapter`
The DOMAdapter is a singleton that allows PixiJS to perform DOM operations, such as creating a canvas.
This allows PixiJS to be used in any environment, such as a web browser, Web Worker, or Node.js.
It uses the Adapter interface to abstract away the differences between these environments
and uses the BrowserAdapter by default.

It has two methods: `get():Adapter` and `set(adapter: Adapter)`.

Defaults to the BrowserAdapter.
```ts
const DOMAdapter: { get: any; set: any }
```

### `BrowserAdapter`
This is an implementation of the Adapter interface.
It can be used to make Pixi work in the browser.
```ts
const BrowserAdapter: Adapter
```

### `WebWorkerAdapter`
This is an implementation of the Adapter interface.
It can be used to make Pixi work in a Web Worker.
```ts
const WebWorkerAdapter: Adapter
```

## maths

### `groupD8`
Implements the dihedral group D8, which is similar to
[group D4]http://mathworld.wolfram.com/DihedralGroupD4.html;
D8 is the same but with diagonals, and it is used for texture
rotations.

The directions the U- and V- axes after rotation
of an angle of `a: GD8Constant` are the vectors `(uX(a), uY(a))`
and `(vX(a), vY(a))`. These aren't necessarily unit vectors.
```ts
const groupD8: { E: number; SE: number; S: number; SW: number; W: number; NW: number; N: number; NE: number; MIRROR_VERTICAL: number; MAIN_DIAGONAL: number; MIRROR_HORIZONTAL: number; REVERSE_DIAGONAL: number; uX: (ind: number) => number; uY: (ind: number) => number; vX: (ind: number) => number; vY: (ind: number) => number; inv: (rotation: number) => number; add: (rotationSecond: number, rotationFirst: number) => number; sub: (rotationSecond: number, rotationFirst: number) => number; rotate180: (rotation: number) => number; isVertical: (rotation: number) => boolean; byDirection: (dx: number, dy: number) => number; matrixAppendRotationInv: (matrix: Matrix, rotation: number, tx: number, ty: number, dw: number, dh: number) => void; transformRectCoords: (rect: RectangleLike, sourceFrame: RectangleLike, rotation: number, out: Rectangle) => Rectangle }
```

### `PI_2`
Two Pi.
```ts
const PI_2: number
```

### `RAD_TO_DEG`
Conversion factor for converting radians to degrees.
```ts
const RAD_TO_DEG: number
```

### `DEG_TO_RAD`
Conversion factor for converting degrees to radians.
```ts
const DEG_TO_RAD: number
```

## rendering

### `DRAW_MODES`
```ts
const DRAW_MODES: { POINTS: string; LINES: string; LINE_STRIP: string; TRIANGLES: string; TRIANGLE_STRIP: string }
```

### `BLEND_TO_NPM`
The map of blend modes supported by Pixi
```ts
const BLEND_TO_NPM: { normal: string; add: string; screen: string }
```

### `WRAP_MODES`
The wrap modes that are supported by pixi.
```ts
const WRAP_MODES: typeof DEPRECATED_WRAP_MODES
```

### `SCALE_MODES`
The scale modes that are supported by pixi.
```ts
const SCALE_MODES: typeof DEPRECATED_SCALE_MODES
```

### `TexturePool`
The default texture pool instance.
```ts
const TexturePool: TexturePoolClass
```

## scene

### `styleAttributes`
A map of SVG style attributes and their default values.
Each attribute has a type and default value used for SVG parsing.
- 'paint' type can be a color or gradient
- 'number' type is a numeric value
- 'string' type is a text value
```ts
const styleAttributes: { fill: { type: string; default: number }; fill-opacity: { type: string; default: number }; stroke: { type: string; default: number }; stroke-width: { type: string; default: number }; stroke-opacity: { type: string; default: number }; stroke-linecap: { type: string; default: string }; stroke-linejoin: { type: string; default: string }; stroke-miterlimit: { type: string; default: number }; stroke-dasharray: { type: string; default: string }; stroke-dashoffset: { type: string; default: number }; opacity: { type: string; default: number } }
```

### `shapeBuilders`
A record of shape builders, keyed by shape type.
```ts
const shapeBuilders: Record<string, ShapeBuildCommand>
```

## utils

### `isMobile`
Detects whether the device is mobile and what type of mobile device it is.
Provides a comprehensive detection system for mobile platforms and devices.
```ts
const isMobile: isMobileResult
```

### `DATA_URI`
Regexp for data URI.
Based on: https://github.com/ragingwind/data-uri-regex
```ts
const DATA_URI: RegExp
```

### `path`
Path utilities for working with URLs and file paths in a cross-platform way.
All paths that are passed in will become normalized to have posix separators.
```ts
const path: Path
```

### `earcut`
A polygon triangulation library
```ts
const earcut: (vertices: ArrayLike<number>, holes?: ArrayLike<number>, dimensions?: number) => number[]
```

## gif

### `GifAsset`
Handle the loading of GIF images. Registering this loader plugin will
load all `.gif` images as an ArrayBuffer and transform into an
GifSource object.
```ts
const GifAsset: AssetExtension<GifSource, GifBufferOptions>
```
