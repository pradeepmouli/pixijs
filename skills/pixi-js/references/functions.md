# Functions

## assets

### `crossOrigin`
Set cross origin based detecting the url and the crossorigin
```ts
crossOrigin(element: ImageLike | HTMLVideoElement, url: string, crossorigin?: string | boolean): void
```
**Parameters:**
- `element: ImageLike | HTMLVideoElement` — Element to apply crossOrigin
- `url: string` — URL to check
- `crossorigin: string | boolean` (optional) — Cross origin value to use

### `setBasisTranscoderPath`
Sets the Basis transcoder paths.
This allows you to override the default paths for the Basis transcoder files.
```ts
setBasisTranscoderPath(config: Partial<typeof basisTranscoderUrls>): void
```
**Parameters:**
- `config: Partial<typeof basisTranscoderUrls>` — The configuration object containing the new paths.

### `setKTXTranscoderPath`
Sets the paths for the KTX transcoder library.
```ts
setKTXTranscoderPath(config: Partial<typeof ktxTranscoderUrls>): void
```
**Parameters:**
- `config: Partial<typeof ktxTranscoderUrls>` — Partial configuration object to set custom paths for the KTX transcoder.
This allows you to override the default URLs for the KTX transcoder library.

## environment

### `loadEnvironmentExtensions`
Automatically detects the environment and loads the appropriate extensions.
```ts
loadEnvironmentExtensions(skip: boolean): Promise<void>
```
**Parameters:**
- `skip: boolean` — whether to skip loading the default extensions
**Returns:** `Promise<void>`

### `autoDetectEnvironment`
```ts
autoDetectEnvironment(add: boolean): Promise<void>
```
**Parameters:**
- `add: boolean` — whether to add the default imports to the bundle
**Returns:** `Promise<void>`
> **Deprecated:** since 8.1.6. Use `loadEnvironmentExtensions` instead

## maths

### `floatEqual`
The idea of a relative epsilon comparison is to find the difference between the two numbers,
and see if it is less than a given epsilon.
A good epsilon would be the N% of the largest of the two values or `Math.EPSILON`.

_Note: Only available with **pixi.js/math-extras**._
```ts
floatEqual(a: number, b: number, epsilon: number): boolean
```
**Parameters:**
- `a: number` — First floating number to compare.
- `b: number` — Second floating number to compare.
- `epsilon: number` — default: `Number.EPSILON` — The epsilon to compare to.
The larger the epsilon, the easier for the numbers to be considered equals.
**Returns:** `boolean` — Returns `true` if the difference between the values is less than the given epsilon;
otherwise `false`.

### `lineIntersection`
Computes the point where non-coincident and non-parallel Lines intersect.
Coincident or parallel lines return a `NaN` point `{x: NaN, y: NaN}`.
The intersection point may land outside the extents of the lines.

_Note: Only available with **pixi.js/math-extras**._
```ts
lineIntersection<T>(aStart: PointData, aEnd: PointData, bStart: PointData, bEnd: PointData, outPoint?: T): T
```
**Parameters:**
- `aStart: PointData` — First point of the first line.
- `aEnd: PointData` — Second point of the first line.
- `bStart: PointData` — First point of the second line.
- `bEnd: PointData` — Second point of the second line.
- `outPoint: T` (optional) — A Point-like object in which to store the value,
optional (otherwise will create a new Point).
**Returns:** `T` — The point where the lines intersect or a `NaN` Point.

### `segmentIntersection`
Computes the point where non-coincident and non-parallel segments intersect.
Coincident, parallel or non-intersecting segments return a `NaN` point `{x: NaN, y: NaN}`.
The intersection point must land inside the extents of the segments or return a `NaN` Point.

_Note: Only available with **pixi.js/math-extras**._
```ts
segmentIntersection<T>(aStart: PointData, aEnd: PointData, bStart: PointData, bEnd: PointData, outPoint?: T): T
```
**Parameters:**
- `aStart: PointData` — Starting point of the first segment.
- `aEnd: PointData` — Ending point of the first segment.
- `bStart: PointData` — Starting point of the second segment.
- `bEnd: PointData` — Ending point of the second segment.
- `outPoint: T` (optional) — A Point-like object in which to store the value,
optional (otherwise will create a new Point).
**Returns:** `T` — The point where the segments intersect or a `NaN` Point.

### `nextPow2`
Rounds to next power of two.
 nextPow2
```ts
nextPow2(v: number): number
```
**Parameters:**
- `v: number` — input value
**Returns:** `number` — - next rounded power of two

### `isPow2`
Checks if a number is a power of two.
 isPow2
```ts
isPow2(v: number): boolean
```
**Parameters:**
- `v: number` — input value
**Returns:** `boolean` — `true` if value is power of two

### `log2`
Computes ceil of log base 2
 log2
```ts
log2(v: number): number
```
**Parameters:**
- `v: number` — input value
**Returns:** `number` — logarithm base 2

## utils

### `formatShader`
formats a shader so its more pleasant to read
```ts
formatShader(shader: string): string
```
**Parameters:**
- `shader: string` — a glsl shader program source
**Returns:** `string`

### `isWebGLSupported`
Helper for checking for WebGL support in the current environment.

Results are cached after first call for better performance.
```ts
isWebGLSupported(failIfMajorPerformanceCaveat?: boolean): boolean
```
**Parameters:**
- `failIfMajorPerformanceCaveat: boolean` (optional) — Whether to fail if there is a major performance caveat
**Returns:** `boolean` — True if WebGL is supported
```ts
// Basic WebGL support check
if (isWebGLSupported()) {
    console.log('WebGL is available');
}
```

### `isWebGPUSupported`
Helper for checking for WebGPU support in the current environment.
Results are cached after first call for better performance.
```ts
isWebGPUSupported(options: GPURequestAdapterOptions): Promise<boolean>
```
**Parameters:**
- `options: GPURequestAdapterOptions` — default: `{}` — The options for requesting a GPU adapter
**Returns:** `Promise<boolean>` — Promise that resolves to true if WebGPU is supported
```ts
// Basic WebGPU support check
const hasWebGPU = await isWebGPUSupported();
console.log('WebGPU available:', hasWebGPU);
```

### `sayHello`
Prints out the version and renderer information for this running instance of PixiJS.
```ts
sayHello(type: string): void
```
**Parameters:**
- `type: string` — The name of the renderer this instance is using.

## rendering

### `autoDetectRenderer`
Automatically determines the most appropriate renderer for the current environment.

The function will prioritize the WebGL renderer as it is the most tested safe API to use.
In the near future as WebGPU becomes more stable and ubiquitous, it will be prioritized over WebGL.

The selected renderer's code is then dynamically imported to optimize
performance and minimize the initial bundle size.

To maximize the benefits of dynamic imports, it's recommended to use a modern bundler
that supports code splitting. This will place the renderer code in a separate chunk,
which is loaded only when needed.
```ts
autoDetectRenderer(options: Partial<AutoDetectOptions>): Promise<Renderer>
```
**Parameters:**
- `options: Partial<AutoDetectOptions>` — A partial configuration object based on the `AutoDetectOptions` type.
**Returns:** `Promise<Renderer>` — A Promise that resolves to an instance of the selected renderer.
```ts
// create a renderer
const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  antialias: true,
});

// custom for each renderer
const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  webgpu:{
    antialias: true,
    backgroundColor: 'red'
  },
  webgl:{
    antialias: true,
    backgroundColor: 'green'
  }
 });

// only allow webgl and canvas (exclude webgpu entirely)
const renderer = await autoDetectRenderer({
  preference: ['webgl', 'canvas'],
});
```

### `fastCopy`
Copies from one ArrayBuffer to another.
Uses Float64Array (8-byte), Float32Array (4-byte), or Uint8Array depending on alignment.
```ts
fastCopy(sourceBuffer: ArrayBufferLike, destinationBuffer: ArrayBufferLike, sourceOffset?: number, byteLength?: number): void
```
**Parameters:**
- `sourceBuffer: ArrayBufferLike` — the array buffer to copy from
- `destinationBuffer: ArrayBufferLike` — the array buffer to copy to
- `sourceOffset: number` (optional) — the byte offset to start copying from (default 0)
- `byteLength: number` (optional) — the number of bytes to copy (default: min of source available and destination size)

## scene

### `graphicsContextToSvg`
Converts a Graphics object or GraphicsContext into an SVG string.

This is a pure function — it reads from the context's instructions and
returns a self-contained SVG document string. Texture instructions are
skipped since they have no SVG equivalent.
```ts
graphicsContextToSvg(source: Graphics | GraphicsContext, precision: number): string
```
**Parameters:**
- `source: Graphics | GraphicsContext` — A Graphics instance or a GraphicsContext.
- `precision: number` — default: `2` — Decimal places for SVG coordinates (default 2).
**Returns:** `string` — A complete SVG document string.

### `buildGeometryFromPath`
When building a mesh, it helps to leverage the simple API we have in `GraphicsPath` as it can often be easier to
define the geometry in a more human-readable way. This function takes a `GraphicsPath` and returns a `MeshGeometry`.
```ts
buildGeometryFromPath(options: GraphicsPath | GeometryPathOptions): MeshGeometry
```
**Parameters:**
- `options: GraphicsPath | GeometryPathOptions` — either a `GraphicsPath` or `GeometryPathOptions`
**Returns:** `MeshGeometry` — a new `MeshGeometry` instance build from the path
```ts

const path = new GraphicsPath()
   .drawRect(0, 0, 100, 100)

const geometry:MeshGeometry = buildGeometryFromPath(path);

const mesh = new Mesh({geometry});

```
You can also pass in a Matrix to transform the uvs as by default you may want to control how they are set up.
