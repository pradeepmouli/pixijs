---
name: pixi-js
description: API reference for pixi.js
license: MIT
---

# pixi.js

## When to Use

- API surface: 19 functions, 205 classes, 223 types, 10 enums, 34 constants

## Configuration

### AccessibilitySystemOptions

Initialisation options for the accessibility system when used with an Application.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `accessibilityOptions` | `AccessibilityOptions` | no | — | Options for the accessibility system |

### AccessibilityOptions

The options for the accessibility system.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `enabledByDefault` | `boolean` | no | — | Whether to enable accessibility features on initialization instead of waiting for tab key |
| `debug` | `boolean` | no | — | Whether to visually show the accessibility divs for debugging |
| `activateOnTab` | `boolean` | no | — | Whether to allow tab key press to activate accessibility features |
| `deactivateOnMouseMove` | `boolean` | no | — | Whether to deactivate accessibility when mouse moves |

### AccessibleOptions

When `accessible` is enabled on any display object, these properties will affect its accessibility.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `accessible` | `boolean` | yes | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | yes | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | yes | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | yes | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | yes | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | yes | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | yes | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | yes | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |

### ApplicationOptions

Application options supplied to the Application#init method.
These options configure how your PixiJS application behaves.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `preference` | `RendererPreference | RendererPreference[]` | no | — | The preferred renderer type(s).

- When a **string** is provided (e.g. `'webgpu'`), that renderer is tried first and
  the remaining renderers are used as fallbacks in the default priority order.
- When an **array** is provided (e.g. `['webgpu', 'webgl']`), only the listed
  renderers are tried, in the given order. Any renderer type **not** in the array
  is excluded entirely — this can be used as a blocklist. |
| `webgpu` | `Partial<WebGPUOptions>` | no | — | Optional WebGPUOptions to pass only to WebGPU renderer. |
| `webgl` | `Partial<WebGLOptions>` | no | — | Optional WebGLOptions to pass only to the WebGL renderer |
| `canvasOptions` | `Partial<CanvasOptions>` | no | — | Optional CanvasOptions to pass only to the Canvas renderer |
| `skipExtensionImports` | `boolean` | no | — | Whether to stop PixiJS from dynamically importing default extensions for the renderer.
It is false by default, and means PixiJS will load all the default extensions, based
on the environment e.g browser/webworker.
If you set this to true, then you will need to manually import the systems and extensions you need.

e.g.
```js
import 'accessibility';
import 'app';
import 'events';
import 'spritesheet';
import 'graphics';
import 'mesh';
import 'text';
import 'text-bitmap';
import 'text-html';
import { autoDetectRenderer } from 'pixi.js';

const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  skipExtensionImports: true,
});
``` |
| `manageImports` | `boolean` | no | — |  |
| `renderableGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `renderableGCMaxUnusedTime` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `renderableGCFrequency` | `number` | yes | — | Frames between two garbage collections. |
| `textureGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `textureGCAMaxIdle` | `number` | yes | — |  |
| `textureGCMaxIdle` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `textureGCCheckCountMax` | `number` | yes | — | Frames between two garbage collections. |
| `gcActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector. |
| `gcMaxUnusedTime` | `number` | yes | — | The maximum time in milliseconds a resource can be unused before being garbage collected. |
| `gcFrequency` | `number` | yes | — | How frequently to run garbage collection in milliseconds. |
| `width` | `number` | no | — | The width of the screen. |
| `height` | `number` | no | — | The height of the screen. |
| `canvas` | `ICanvas` | no | — | The canvas to use as a view, optional. |
| `view` | `ICanvas` | no | — | Alias for `canvas`. |
| `autoDensity` | `boolean` | no | — | Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas. |
| `resolution` | `number` | no | — | The resolution / device pixel ratio of the renderer. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing. This may affect performance. |
| `depth` | `boolean` | no | — | Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer. |
| `hello` | `boolean` | yes | — | Whether to log the version and type information of renderer to console. |
| `backgroundColor` | `ColorSource` | yes | — | The background color used to clear the canvas. See ColorSource for accepted color values. |
| `background` | `ColorSource` | no | — | Alias for `backgroundColor` |
| `backgroundAlpha` | `number` | no | — | Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
This value determines whether the canvas is initialized with alpha transparency support.
Note: This cannot be changed after initialization. If set to `1`, the canvas will remain opaque,
even if a transparent background color is set later. |
| `clearBeforeRender` | `boolean` | no | — | Whether to clear the canvas before new render passes. |
| `eventMode` | `EventMode` | no | — | The type of interaction behavior for a Container. This is set via the Container#eventMode property. |
| `eventFeatures` | `Partial<EventSystemFeatures>` | no | — | Configuration for enabling/disabling specific event features.
Use this to optimize performance by turning off unused functionality. |
| `failIfMajorPerformanceCaveat` | `boolean` | no | — |  |
| `roundPixels` | `boolean` | no | — |  |
| `bezierSmoothness` | `number` | yes | — | A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother) |
| `context` | `WebGL2RenderingContext` | yes | — | User-provided WebGL rendering context object. |
| `powerPreference` | `GpuPowerPreference` | no | — | An optional hint indicating what configuration of GPU is suitable for the WebGL context,
can be `'high-performance'` or `'low-power'`.
Setting to `'high-performance'` will prioritize rendering performance over power consumption,
while setting to `'low-power'` will prioritize power saving over rendering performance. |
| `premultipliedAlpha` | `boolean` | yes | — | Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha. |
| `preserveDrawingBuffer` | `boolean` | yes | — | Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve
its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context. |
| `preferWebGLVersion` | `1 | 2` | no | — | The preferred WebGL version to use. |
| `multiView` | `boolean` | yes | — | Whether to enable multi-view rendering. Set to true when rendering to multiple
canvases on the dom. |
| `useBackBuffer` | `boolean` | no | — | if true will use the back buffer where required |
| `forceFallbackAdapter` | `boolean` | yes | — | Force the use of the fallback adapter |
| `gpu` | `GPU` | no | — | Using shared device and adaptor from other engine |
| `resizeTo` | `HTMLElement | Window` | no | — | Element to automatically resize the renderer to. |
| `autoStart` | `boolean` | no | — | Controls whether the animation loop starts automatically after initialization.
> [!IMPORTANT]
> Setting this to `false` does NOT stop the shared ticker even if `sharedTicker` is `true`.
> You must stop the shared ticker manually if needed. |
| `sharedTicker` | `boolean` | no | — | Controls whether to use the shared global ticker or create a new instance.

The shared ticker is useful when you have multiple instances that should sync their updates.
However, it has some limitations regarding update order control.

Update Order:
1. System ticker (always runs first)
2. Shared ticker (if enabled)
3. App ticker (if using own ticker) |
| `culler` | `{ updateTransform?: boolean }` | no | — | Options for the culler behavior. |

### ResizePluginOptions

Application options for the ResizePlugin.
These options control how your application handles window and element resizing.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `resizeTo` | `HTMLElement | Window` | no | — | Element to automatically resize the renderer to. |

### TickerPluginOptions

Application options for the TickerPlugin.
These options control the animation loop and update cycle of your PixiJS application.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `autoStart` | `boolean` | no | — | Controls whether the animation loop starts automatically after initialization.
> [!IMPORTANT]
> Setting this to `false` does NOT stop the shared ticker even if `sharedTicker` is `true`.
> You must stop the shared ticker manually if needed. |
| `sharedTicker` | `boolean` | no | — | Controls whether to use the shared global ticker or create a new instance.

The shared ticker is useful when you have multiple instances that should sync their updates.
However, it has some limitations regarding update order control.

Update Order:
1. System ticker (always runs first)
2. Shared ticker (if enabled)
3. App ticker (if using own ticker) |

### AssetInitOptions

Options for initializing the Assets class. These options configure how assets are loaded,
resolved, and managed in your PixiJS application.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `basePath` | `string` | no | — | Base path prepended to all asset URLs. Useful for CDN hosting. |
| `defaultSearchParams` | `string | Record<string, any>` | no | — | URL parameters to append to all asset URLs.
Useful for cache-busting or version control. |
| `manifest` | `string | AssetsManifest` | no | — | A manifest defining all your application's assets.
Can be a URL to a JSON file or a manifest object. |
| `texturePreference` | `{ resolution?: number | number[]; format?: ArrayOr<string> }` | no | — | Configure texture loading preferences.
Useful for optimizing asset delivery based on device capabilities. |
| `skipDetections` | `boolean` | no | — | Skip browser format detection for faster initialization.
Only use if you know exactly what formats your target browsers support. |
| `bundleIdentifier` | `BundleIdentifierOptions` | no | — | Override how bundle IDs are generated and resolved.

This allows you to customize how assets are grouped and accessed via bundles and allow for
multiple bundles to share the same asset keys. |
| `preferences` | `Partial<AssetsPreferences>` | no | — | Optional preferences for asset loading behavior. |
| `loadOptions` | `Partial<LoadOptions>` | no | — | Options for defining the loading behavior of assets. |

### LoadOptions

Options for loading assets with the Loader

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `onProgress` | `(progress: number) => void` | no | — | Callback for progress updates during loading |
| `onError` | `(error: Error, url: string | ResolvedAsset<any>) => void` | no | — | Callback for handling errors during loading |
| `strategy` | `"skip" | "throw" | "retry"` | no | — | Strategy to handle load failures
- 'throw': Immediately throw an error and stop loading (default)
- 'skip': Skip the failed asset and continue loading others
- 'retry': Retry loading the asset a specified number of times |
| `retryCount` | `number` | no | — | Number of retry attempts if strategy is 'retry' |
| `retryDelay` | `number` | no | — | Delay in milliseconds between retry attempts |

### LoadTextureConfig

Configuration for the [loadTextures]loadTextures plugin.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `preferWorkers` | `boolean` | yes | — | When set to `true`, loading and decoding images will happen with Worker thread,
if available on the browser. This is much more performant as network requests
and decoding can be expensive on the CPU. However, not all environments support
Workers, in some cases it can be helpful to disable by setting to `false`. |
| `preferCreateImageBitmap` | `boolean` | yes | — | When set to `true`, loading and decoding images will happen with `createImageBitmap`,
otherwise it will use `new Image()`. |
| `crossOrigin` | `string` | yes | — | The crossOrigin value to use for images when `preferCreateImageBitmap` is `false`. |

### BundleIdentifierOptions

Options for how the resolver deals with generating bundle ids

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `connector` | `string` | no | — | The character that is used to connect the bundleId and the assetId when generating a bundle asset id key |
| `createBundleAssetId` | `(bundleId: string, assetId: string) => string` | no | — | A function that generates a bundle asset id key from a bundleId and an assetId |
| `extractAssetIdFromBundle` | `(bundleId: string, assetBundleId: string) => string` | no | — | A function that generates an assetId from a bundle asset id key. This is the reverse of generateBundleAssetId |

### CullerPluginOptions

Application options for the CullerPlugin.
These options control how your application handles culling of display objects.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `culler` | `{ updateTransform?: boolean }` | no | — | Options for the culler behavior. |

### DOMContainerOptions

Options for configuring a DOMContainer.
Controls how DOM elements are integrated into the PixiJS scene graph.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `element` | `HTMLElement` | no | — | The DOM element to use for the container.
Can be any HTML element like div, input, textarea, etc.

If not provided, creates a new div element. |
| `anchor` | `number | PointData` | no | — | The anchor point of the container.
- Can be a single number to set both x and y
- Can be a point-like object with x,y coordinates
- (0,0) is top-left
- (1,1) is bottom-right
- (0.5,0.5) is center |

### ContextSettings

The context settings for creating a rendering context.

### EventSystemOptions

Options for configuring the PixiJS event system. These options control how the event system
handles different types of interactions and event propagation.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `eventMode` | `EventMode` | no | — | The default event mode for all display objects.
Controls how objects respond to interaction events.

Possible values:
- `'none'`: No interaction events
- `'passive'`: Only container's children receive events (default)
- `'auto'`: Receives events when parent is interactive
- `'static'`: Standard interaction events
- `'dynamic'`: Like static but with additional synthetic events |
| `eventFeatures` | `Partial<EventSystemFeatures>` | no | — | Configuration for enabling/disabling specific event features.
Use this to optimize performance by turning off unused functionality. |

### FederatedOptions

The properties available for any interactive object. This interface defines the core interaction
properties and event handlers that can be set on any Container in PixiJS.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |

### AddListenerOptions

The options for the `addEventListener` method.

### RemoveListenerOptions

The options for the `removeEventListener` method.

### AlphaFilterOptions

Options for AlphaFilter

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `alpha` | `number` | yes | — | Amount of alpha from 0 to 1, where 0 is transparent |
| `blendMode` | `BLEND_MODES` | no | — | optional blend mode used by the filter when rendering (defaults to 'normal') |
| `resolution` | `number | "inherit"` | no | — | the resolution the filter should be rendered at. The lower the resolution, the more performant
the filter will be, but the lower the quality of the output. (default 1)
If 'inherit', the resolution of the render target is used.
Consider lowering this for things like blurs filters |
| `padding` | `number` | no | — | the amount of pixels to pad the container with when applying the filter. For example a blur extends the
container out as it blurs, so padding is applied to ensure that extra detail is rendered as well
without clipping occurring. (default 0) |
| `antialias` | `boolean | FilterAntialias` | no | — | If true the filter will make use of antialiasing. Although it looks better this can have a performance impact.
If set to 'inherit', the filter will detect the antialiasing of the render target and change this automatically.
Definitely don't set this to true if the render target has antialiasing set to false. As it will antialias,
but you won't see the difference. (default 'off')

This can be a boolean or [FilterAntialias]FilterAntialias string. |
| `blendRequired` | `boolean` | no | — | If this is set to true, the filter system will grab a snap shot of the area being rendered
to and pass this into the shader. This is useful for blend modes that need to be aware of the pixels
they are rendering to. Only use if you need that data, otherwise its an extra gpu copy you don't need!
(default false)

If given, the shader should have a uniform named `uBackTexture`, which is where the pixels of the
area being rendered to can be sampled from. |
| `clipToViewport` | `boolean` | no | — | If this is set to true, the filter system will clip filter texture into viewport
This is useful for filters that applied to whole texture.
(default true) |

### BlurFilterOptions

Configuration options for the BlurFilter.
Controls how the Gaussian blur effect is applied.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `strength` | `number` | no | — | The strength of the blur filter.
Applied to both horizontal and vertical blur if strengthX/Y not set. |
| `strengthX` | `number` | no | — | The horizontal strength of the blur.
Overrides strength parameter for x-axis. |
| `strengthY` | `number` | no | — | The vertical strength of the blur.
Overrides strength parameter for y-axis. |
| `quality` | `number` | no | — | The quality of the blur filter.
Higher values mean better quality but slower performance. |
| `kernelSize` | `number` | no | — | The kernelSize of the blur filter.
Larger values create more precise blur but impact performance.
Options: 5, 7, 9, 11, 13, 15. |
| `legacy` | `boolean` | no | — | When true, uses the legacy (pre-v8.x) blur pass behavior where strength
is distributed uniformly across passes (`strength / passes`) instead of
the optimized halving scheme. This also disables per-pass WebGPU UBO batching. |
| `blendMode` | `BLEND_MODES` | no | — | optional blend mode used by the filter when rendering (defaults to 'normal') |
| `resolution` | `number | "inherit"` | no | — | the resolution the filter should be rendered at. The lower the resolution, the more performant
the filter will be, but the lower the quality of the output. (default 1)
If 'inherit', the resolution of the render target is used.
Consider lowering this for things like blurs filters |
| `padding` | `number` | no | — | the amount of pixels to pad the container with when applying the filter. For example a blur extends the
container out as it blurs, so padding is applied to ensure that extra detail is rendered as well
without clipping occurring. (default 0) |
| `antialias` | `boolean | FilterAntialias` | no | — | If true the filter will make use of antialiasing. Although it looks better this can have a performance impact.
If set to 'inherit', the filter will detect the antialiasing of the render target and change this automatically.
Definitely don't set this to true if the render target has antialiasing set to false. As it will antialias,
but you won't see the difference. (default 'off')

This can be a boolean or [FilterAntialias]FilterAntialias string. |
| `blendRequired` | `boolean` | no | — | If this is set to true, the filter system will grab a snap shot of the area being rendered
to and pass this into the shader. This is useful for blend modes that need to be aware of the pixels
they are rendering to. Only use if you need that data, otherwise its an extra gpu copy you don't need!
(default false)

If given, the shader should have a uniform named `uBackTexture`, which is where the pixels of the
area being rendered to can be sampled from. |
| `clipToViewport` | `boolean` | no | — | If this is set to true, the filter system will clip filter texture into viewport
This is useful for filters that applied to whole texture.
(default true) |

### DisplacementFilterOptions

Configuration options for the DisplacementFilter.

A displacement filter uses a sprite's texture as a displacement map,
moving pixels of the target based on the color values of corresponding
pixels in the displacement sprite.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `sprite` | `Sprite` | yes | — | The sprite whose texture will be used as the displacement map.
Red channel = horizontal displacement
Green channel = vertical displacement |
| `scale` | `number | PointData` | no | — | The scale of the displacement effect. Can be a single number for uniform
scaling or a point-like object for separate x/y scaling. |
| `blendMode` | `BLEND_MODES` | no | — | optional blend mode used by the filter when rendering (defaults to 'normal') |
| `resolution` | `number | "inherit"` | no | — | the resolution the filter should be rendered at. The lower the resolution, the more performant
the filter will be, but the lower the quality of the output. (default 1)
If 'inherit', the resolution of the render target is used.
Consider lowering this for things like blurs filters |
| `padding` | `number` | no | — | the amount of pixels to pad the container with when applying the filter. For example a blur extends the
container out as it blurs, so padding is applied to ensure that extra detail is rendered as well
without clipping occurring. (default 0) |
| `antialias` | `boolean | FilterAntialias` | no | — | If true the filter will make use of antialiasing. Although it looks better this can have a performance impact.
If set to 'inherit', the filter will detect the antialiasing of the render target and change this automatically.
Definitely don't set this to true if the render target has antialiasing set to false. As it will antialias,
but you won't see the difference. (default 'off')

This can be a boolean or [FilterAntialias]FilterAntialias string. |
| `blendRequired` | `boolean` | no | — | If this is set to true, the filter system will grab a snap shot of the area being rendered
to and pass this into the shader. This is useful for blend modes that need to be aware of the pixels
they are rendering to. Only use if you need that data, otherwise its an extra gpu copy you don't need!
(default false)

If given, the shader should have a uniform named `uBackTexture`, which is where the pixels of the
area being rendered to can be sampled from. |
| `clipToViewport` | `boolean` | no | — | If this is set to true, the filter system will clip filter texture into viewport
This is useful for filters that applied to whole texture.
(default true) |

### NoiseFilterOptions

Configuration options for the NoiseFilter.

The NoiseFilter adds random noise to the rendered content. The noise effect can be
controlled through the noise intensity and an optional seed value for reproducible results.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `noise` | `number` | no | — | The amount of noise to apply. Should be in range (0, 1]:
- 0.1 = subtle noise
- 0.5 = moderate noise (default)
- 1.0 = maximum noise |
| `seed` | `number` | no | — | A seed value to apply to the random noise generation.
Using the same seed will generate the same noise pattern. |
| `blendMode` | `BLEND_MODES` | no | — | optional blend mode used by the filter when rendering (defaults to 'normal') |
| `resolution` | `number | "inherit"` | no | — | the resolution the filter should be rendered at. The lower the resolution, the more performant
the filter will be, but the lower the quality of the output. (default 1)
If 'inherit', the resolution of the render target is used.
Consider lowering this for things like blurs filters |
| `padding` | `number` | no | — | the amount of pixels to pad the container with when applying the filter. For example a blur extends the
container out as it blurs, so padding is applied to ensure that extra detail is rendered as well
without clipping occurring. (default 0) |
| `antialias` | `boolean | FilterAntialias` | no | — | If true the filter will make use of antialiasing. Although it looks better this can have a performance impact.
If set to 'inherit', the filter will detect the antialiasing of the render target and change this automatically.
Definitely don't set this to true if the render target has antialiasing set to false. As it will antialias,
but you won't see the difference. (default 'off')

This can be a boolean or [FilterAntialias]FilterAntialias string. |
| `blendRequired` | `boolean` | no | — | If this is set to true, the filter system will grab a snap shot of the area being rendered
to and pass this into the shader. This is useful for blend modes that need to be aware of the pixels
they are rendering to. Only use if you need that data, otherwise its an extra gpu copy you don't need!
(default false)

If given, the shader should have a uniform named `uBackTexture`, which is where the pixels of the
area being rendered to can be sampled from. |
| `clipToViewport` | `boolean` | no | — | If this is set to true, the filter system will clip filter texture into viewport
This is useful for filters that applied to whole texture.
(default true) |

### FilterOptions

The options to use when creating a new filter.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `blendMode` | `BLEND_MODES` | no | — | optional blend mode used by the filter when rendering (defaults to 'normal') |
| `resolution` | `number | "inherit"` | no | — | the resolution the filter should be rendered at. The lower the resolution, the more performant
the filter will be, but the lower the quality of the output. (default 1)
If 'inherit', the resolution of the render target is used.
Consider lowering this for things like blurs filters |
| `padding` | `number` | no | — | the amount of pixels to pad the container with when applying the filter. For example a blur extends the
container out as it blurs, so padding is applied to ensure that extra detail is rendered as well
without clipping occurring. (default 0) |
| `antialias` | `boolean | FilterAntialias` | no | — | If true the filter will make use of antialiasing. Although it looks better this can have a performance impact.
If set to 'inherit', the filter will detect the antialiasing of the render target and change this automatically.
Definitely don't set this to true if the render target has antialiasing set to false. As it will antialias,
but you won't see the difference. (default 'off')

This can be a boolean or [FilterAntialias]FilterAntialias string. |
| `blendRequired` | `boolean` | no | — | If this is set to true, the filter system will grab a snap shot of the area being rendered
to and pass this into the shader. This is useful for blend modes that need to be aware of the pixels
they are rendering to. Only use if you need that data, otherwise its an extra gpu copy you don't need!
(default false)

If given, the shader should have a uniform named `uBackTexture`, which is where the pixels of the
area being rendered to can be sampled from. |
| `clipToViewport` | `boolean` | no | — | If this is set to true, the filter system will clip filter texture into viewport
This is useful for filters that applied to whole texture.
(default true) |

### BatcherOptions

The options for the batcher.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `maxTextures` | `number` | yes | — | The maximum number of textures per batch. |
| `attributesInitialSize` | `number` | no | — | The initial size of the attribute buffer. |
| `indicesInitialSize` | `number` | no | — | The initial size of the index buffer. |

### AutoDetectOptions

Options for autoDetectRenderer.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `preference` | `RendererPreference | RendererPreference[]` | no | — | The preferred renderer type(s).

- When a **string** is provided (e.g. `'webgpu'`), that renderer is tried first and
  the remaining renderers are used as fallbacks in the default priority order.
- When an **array** is provided (e.g. `['webgpu', 'webgl']`), only the listed
  renderers are tried, in the given order. Any renderer type **not** in the array
  is excluded entirely — this can be used as a blocklist. |
| `webgpu` | `Partial<WebGPUOptions>` | no | — | Optional WebGPUOptions to pass only to WebGPU renderer. |
| `webgl` | `Partial<WebGLOptions>` | no | — | Optional WebGLOptions to pass only to the WebGL renderer |
| `canvasOptions` | `Partial<CanvasOptions>` | no | — | Optional CanvasOptions to pass only to the Canvas renderer |
| `skipExtensionImports` | `boolean` | no | — | Whether to stop PixiJS from dynamically importing default extensions for the renderer.
It is false by default, and means PixiJS will load all the default extensions, based
on the environment e.g browser/webworker.
If you set this to true, then you will need to manually import the systems and extensions you need.

e.g.
```js
import 'accessibility';
import 'app';
import 'events';
import 'spritesheet';
import 'graphics';
import 'mesh';
import 'text';
import 'text-bitmap';
import 'text-html';
import { autoDetectRenderer } from 'pixi.js';

const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  skipExtensionImports: true,
});
``` |
| `manageImports` | `boolean` | no | — |  |
| `renderableGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `renderableGCMaxUnusedTime` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `renderableGCFrequency` | `number` | yes | — | Frames between two garbage collections. |
| `textureGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `textureGCAMaxIdle` | `number` | yes | — |  |
| `textureGCMaxIdle` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `textureGCCheckCountMax` | `number` | yes | — | Frames between two garbage collections. |
| `gcActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector. |
| `gcMaxUnusedTime` | `number` | yes | — | The maximum time in milliseconds a resource can be unused before being garbage collected. |
| `gcFrequency` | `number` | yes | — | How frequently to run garbage collection in milliseconds. |
| `width` | `number` | no | — | The width of the screen. |
| `height` | `number` | no | — | The height of the screen. |
| `canvas` | `ICanvas` | no | — | The canvas to use as a view, optional. |
| `view` | `ICanvas` | no | — | Alias for `canvas`. |
| `autoDensity` | `boolean` | no | — | Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas. |
| `resolution` | `number` | no | — | The resolution / device pixel ratio of the renderer. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing. This may affect performance. |
| `depth` | `boolean` | no | — | Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer. |
| `hello` | `boolean` | yes | — | Whether to log the version and type information of renderer to console. |
| `backgroundColor` | `ColorSource` | yes | — | The background color used to clear the canvas. See ColorSource for accepted color values. |
| `background` | `ColorSource` | no | — | Alias for `backgroundColor` |
| `backgroundAlpha` | `number` | no | — | Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
This value determines whether the canvas is initialized with alpha transparency support.
Note: This cannot be changed after initialization. If set to `1`, the canvas will remain opaque,
even if a transparent background color is set later. |
| `clearBeforeRender` | `boolean` | no | — | Whether to clear the canvas before new render passes. |
| `eventMode` | `EventMode` | no | — | The type of interaction behavior for a Container. This is set via the Container#eventMode property. |
| `eventFeatures` | `Partial<EventSystemFeatures>` | no | — | Configuration for enabling/disabling specific event features.
Use this to optimize performance by turning off unused functionality. |
| `failIfMajorPerformanceCaveat` | `boolean` | no | — |  |
| `roundPixels` | `boolean` | no | — |  |
| `bezierSmoothness` | `number` | yes | — | A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother) |
| `context` | `WebGL2RenderingContext` | yes | — | User-provided WebGL rendering context object. |
| `powerPreference` | `GpuPowerPreference` | no | — | An optional hint indicating what configuration of GPU is suitable for the WebGL context,
can be `'high-performance'` or `'low-power'`.
Setting to `'high-performance'` will prioritize rendering performance over power consumption,
while setting to `'low-power'` will prioritize power saving over rendering performance. |
| `premultipliedAlpha` | `boolean` | yes | — | Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha. |
| `preserveDrawingBuffer` | `boolean` | yes | — | Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve
its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context. |
| `preferWebGLVersion` | `1 | 2` | no | — | The preferred WebGL version to use. |
| `multiView` | `boolean` | yes | — | Whether to enable multi-view rendering. Set to true when rendering to multiple
canvases on the dom. |
| `useBackBuffer` | `boolean` | no | — | if true will use the back buffer where required |
| `forceFallbackAdapter` | `boolean` | yes | — | Force the use of the fallback adapter |
| `gpu` | `GPU` | no | — | Using shared device and adaptor from other engine |

### CanvasOptions

Options for CanvasRenderer.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `skipExtensionImports` | `boolean` | no | — | Whether to stop PixiJS from dynamically importing default extensions for the renderer.
It is false by default, and means PixiJS will load all the default extensions, based
on the environment e.g browser/webworker.
If you set this to true, then you will need to manually import the systems and extensions you need.

e.g.
```js
import 'accessibility';
import 'app';
import 'events';
import 'spritesheet';
import 'graphics';
import 'mesh';
import 'text';
import 'text-bitmap';
import 'text-html';
import { autoDetectRenderer } from 'pixi.js';

const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  skipExtensionImports: true,
});
``` |
| `manageImports` | `boolean` | no | — |  |
| `renderableGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `renderableGCMaxUnusedTime` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `renderableGCFrequency` | `number` | yes | — | Frames between two garbage collections. |
| `textureGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `textureGCAMaxIdle` | `number` | yes | — |  |
| `textureGCMaxIdle` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `textureGCCheckCountMax` | `number` | yes | — | Frames between two garbage collections. |
| `gcActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector. |
| `gcMaxUnusedTime` | `number` | yes | — | The maximum time in milliseconds a resource can be unused before being garbage collected. |
| `gcFrequency` | `number` | yes | — | How frequently to run garbage collection in milliseconds. |
| `width` | `number` | no | — | The width of the screen. |
| `height` | `number` | no | — | The height of the screen. |
| `canvas` | `ICanvas` | no | — | The canvas to use as a view, optional. |
| `view` | `ICanvas` | no | — | Alias for `canvas`. |
| `autoDensity` | `boolean` | no | — | Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas. |
| `resolution` | `number` | no | — | The resolution / device pixel ratio of the renderer. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing. This may affect performance. |
| `depth` | `boolean` | no | — | Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer. |
| `hello` | `boolean` | yes | — | Whether to log the version and type information of renderer to console. |
| `backgroundColor` | `ColorSource` | yes | — | The background color used to clear the canvas. See ColorSource for accepted color values. |
| `background` | `ColorSource` | no | — | Alias for `backgroundColor` |
| `backgroundAlpha` | `number` | no | — | Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
This value determines whether the canvas is initialized with alpha transparency support.
Note: This cannot be changed after initialization. If set to `1`, the canvas will remain opaque,
even if a transparent background color is set later. |
| `clearBeforeRender` | `boolean` | no | — | Whether to clear the canvas before new render passes. |
| `eventMode` | `EventMode` | no | — | The type of interaction behavior for a Container. This is set via the Container#eventMode property. |
| `eventFeatures` | `Partial<EventSystemFeatures>` | no | — | Configuration for enabling/disabling specific event features.
Use this to optimize performance by turning off unused functionality. |
| `failIfMajorPerformanceCaveat` | `boolean` | no | — |  |
| `roundPixels` | `boolean` | no | — |  |
| `bezierSmoothness` | `number` | yes | — | A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother) |

### ContextSystemOptions

Options for the context system.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `context` | `WebGL2RenderingContext` | yes | — | User-provided WebGL rendering context object. |
| `powerPreference` | `GpuPowerPreference` | no | — | An optional hint indicating what configuration
of GPU is suitable for the WebGL context, can be `'high-performance'` or `'low-power'`. Setting to `'high-performance'`
will prioritize rendering performance over power consumption, while setting to `'low-power'` will prioritize power saving
over rendering performance. |
| `premultipliedAlpha` | `boolean` | yes | — | Whether the compositor will assume the drawing buffer contains
colors with premultiplied alpha. |
| `preserveDrawingBuffer` | `boolean` | yes | — | Whether to enable drawing buffer preservation.
If enabled, the drawing buffer will preserve
its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context. |
| `antialias` | `boolean` | no | — | Whether to enable antialiasing. |
| `preferWebGLVersion` | `1 | 2` | no | — | The preferred WebGL version to use. |
| `multiView` | `boolean` | yes | — | Whether to enable multi-view rendering. Set to true when rendering to multiple
canvases on the dom. |

### GlBackBufferOptions

The options for the back buffer system.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `useBackBuffer` | `boolean` | no | — | if true will use the back buffer where required |
| `antialias` | `boolean` | no | — | if true will ensure the texture is antialiased |

### GlProgramOptions

The options for the gl program

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `fragment` | `string` | yes | — | The fragment glsl shader source. |
| `vertex` | `string` | yes | — | The vertex glsl shader source. |
| `name` | `string` | no | — | the name of the program, defaults to 'pixi-program' |
| `preferredVertexPrecision` | `string` | no | — | the preferred vertex precision for the shader, this may not be used if the device does not support it |
| `preferredFragmentPrecision` | `string` | no | — | the preferred fragment precision for the shader, this may not be used if the device does not support it |
| `transformFeedbackVaryings` | `{ names: string[]; bufferMode: "separate" | "interleaved" }` | no | — |  |

### GpuContextOptions

Options for the WebGPU context.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `powerPreference` | `GpuPowerPreference` | no | — | An optional hint indicating what configuration of GPU
is suitable for the WebGPU context, can be `'high-performance'` or `'low-power'`.
Setting to `'high-performance'` will prioritize rendering performance over power consumption,
while setting to `'low-power'` will prioritize power saving over rendering performance. |
| `forceFallbackAdapter` | `boolean` | yes | — | Force the use of the fallback adapter |
| `gpu` | `GPU` | no | — | Using shared device and adaptor from other engine |

### GpuProgramOptions

The options for the gpu program

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | `string` | no | — | the name of the program, this is added to the label of the GPU Program created
under the hood. Makes it much easier to debug! |
| `fragment` | `ProgramSource` | no | — | The fragment glsl shader source. |
| `vertex` | `ProgramSource` | no | — | The vertex glsl shader source. |
| `layout` | `ProgramLayout` | no | — | The layout of the program. If not provided, it will be generated from the shader sources. |
| `gpuLayout` | `ProgramPipelineLayoutDescription` | no | — | The gpu layout of the program. If not provided, it will be generated from the shader sources. |

### BackgroundSystemOptions

Options for the background system.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `backgroundColor` | `ColorSource` | yes | — | The background color used to clear the canvas. See ColorSource for accepted color values. |
| `background` | `ColorSource` | no | — | Alias for `backgroundColor` |
| `backgroundAlpha` | `number` | no | — | Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
This value determines whether the canvas is initialized with alpha transparency support.
Note: This cannot be changed after initialization. If set to `1`, the canvas will remain opaque,
even if a transparent background color is set later. |
| `clearBeforeRender` | `boolean` | no | — | Whether to clear the canvas before new render passes. |

### BufferOptions

Options for creating a buffer

This interface defines the options that can be passed to the Buffer constructor.
It includes the data to initialize the buffer with, the size of the buffer,
the usage of the buffer, a label for debugging, and whether the buffer should shrink to fit
when the data becomes smaller.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | `number[] | TypedArray` | no | — | the data to initialize the buffer with, this can be a typed array,
or a regular number array. If it is a number array, it will be converted to a Float32Array |
| `size` | `number` | no | — | the size of the buffer in bytes, if not supplied, it will be inferred from the data |
| `usage` | `number` | yes | — | the usage of the buffer, see BufferUsage |
| `label` | `string` | no | — | a label for the buffer, this is useful for debugging |
| `shrinkToFit` | `boolean` | no | — | should the GPU buffer be shrunk when the data becomes smaller?
changing this will cause the buffer to be destroyed and a new one created on the GPU
this can be expensive, especially if the buffer is already big enough!
setting this to false will prevent the buffer from being shrunk. This will yield better performance
if you are constantly setting data that is changing size often. |

### ImageOptions

Options for creating an image from a renderer.
Controls the output format and quality of extracted images.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `format` | `"png" | "jpg" | "webp"` | no | — | The format of the extracted image.
- 'png': Lossless format, best for images with text or sharp edges
- 'jpg': Lossy format, smaller file size, good for photos
- 'webp': Modern format with better compression |
| `quality` | `number` | no | — | The quality of the extracted image, between 0 and 1.
Only applies to lossy formats (jpg, webp).
- 1: Maximum quality
- 0: Maximum compression |

### BaseExtractOptions

Options for extracting content from a renderer.
These options control how content is extracted and processed from the renderer.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `target` | `Container<ContainerChild> | Texture<TextureSource<any>>` | yes | — | The target to extract. Can be a Container or Texture. |
| `frame` | `Rectangle` | no | — | The region of the target to extract. If not specified, extracts the entire target. |
| `resolution` | `number` | no | — | The resolution of the extracted content. Higher values create sharper images. |
| `clearColor` | `ColorSource` | no | — | The color used to clear the extracted content before rendering.
Can be a hex number, string, or array of numbers. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing during extraction.
Improves quality but may affect performance. |

### ExtractImageOptions

Options for extracting an HTMLImage from the renderer.
Combines base extraction options with image-specific settings.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `target` | `Container<ContainerChild> | Texture<TextureSource<any>>` | yes | — | The target to extract. Can be a Container or Texture. |
| `frame` | `Rectangle` | no | — | The region of the target to extract. If not specified, extracts the entire target. |
| `resolution` | `number` | no | — | The resolution of the extracted content. Higher values create sharper images. |
| `clearColor` | `ColorSource` | no | — | The color used to clear the extracted content before rendering.
Can be a hex number, string, or array of numbers. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing during extraction.
Improves quality but may affect performance. |
| `format` | `"png" | "jpg" | "webp"` | no | — | The format of the extracted image.
- 'png': Lossless format, best for images with text or sharp edges
- 'jpg': Lossy format, smaller file size, good for photos
- 'webp': Modern format with better compression |
| `quality` | `number` | no | — | The quality of the extracted image, between 0 and 1.
Only applies to lossy formats (jpg, webp).
- 1: Maximum quality
- 0: Maximum compression |

### ExtractDownloadOptions

Options for extracting and downloading content from a renderer.
Combines base extraction options with download-specific settings.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `target` | `Container<ContainerChild> | Texture<TextureSource<any>>` | yes | — | The target to extract. Can be a Container or Texture. |
| `frame` | `Rectangle` | no | — | The region of the target to extract. If not specified, extracts the entire target. |
| `resolution` | `number` | no | — | The resolution of the extracted content. Higher values create sharper images. |
| `clearColor` | `ColorSource` | no | — | The color used to clear the extracted content before rendering.
Can be a hex number, string, or array of numbers. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing during extraction.
Improves quality but may affect performance. |
| `filename` | `string` | yes | — | The filename to use when downloading the content.
Should include the desired file extension (e.g., .png). |

### ExtractOptions

Options for extracting content from a renderer. Represents a union of all possible extraction option types.
Used by various extraction methods to support different output formats and configurations.

### GenerateTextureSourceOptions

Options for generating a texture source.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `format` | `TEXTURE_FORMATS` | no | — | the format that the texture data has |
| `label` | `string` | no | — | optional label, can be used for debugging |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `dynamic` | `boolean` | no | — | Used by RenderTexture.create to allow resizing. Not used by TextureSource itself. |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `_resourceId` | `number` | no | — |  |
| `mipLevelCount` | `number` | no | — | The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true |
| `autoGenerateMipmaps` | `boolean` | no | — | Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture. |
| `viewDimension` | `TEXTURE_VIEW_DIMENSIONS` | no | — | How this texture is viewed/sampled by shaders.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension`. For example, cube maps are typically stored as a
2D texture with 6 array layers (`dimensions: '2d'`) but viewed as `viewDimension: 'cube'`. |
| `arrayLayerCount` | `number` | no | — | The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers). |
| `alphaMode` | `ALPHA_MODES` | no | — | the alpha mode of the texture |
| `antialias` | `boolean` | no | — | Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture. |
| `autoGarbageCollect` | `boolean` | no | — | If true, the Garbage Collector will unload this texture if it is not used after a period of time |
| `dimensions` | `TEXTURE_DIMENSIONS` | no | — | how many dimensions does this texture have? currently v8 only supports 2d |

### GenerateTextureOptions

Options for generating a texture from a container.
Used to create reusable textures from display objects, which can improve performance
when the same content needs to be rendered multiple times.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `target` | `Container` | yes | — | The container to generate the texture from.
This can be any display object like Sprite, Container, or Graphics. |
| `frame` | `Rectangle` | no | — | The region of the container that should be rendered.
If not specified, defaults to the local bounds of the container. |
| `resolution` | `number` | no | — | The resolution of the texture being generated.
Higher values create sharper textures at the cost of memory. |
| `clearColor` | `ColorSource` | no | — | The color used to clear the texture before rendering.
Can be a hex number, string, or array of numbers. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing. This may affect performance. |
| `defaultAnchor` | `{ x: number; y: number }` | no | — | Default anchor point for the generated texture. |
| `textureSourceOptions` | `GenerateTextureSourceOptions` | no | — | Advanced options for configuring the texture source.
Controls texture properties like scale mode and filtering. |

### GCSystemOptions

Options for the GCSystem.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `gcActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector. |
| `gcMaxUnusedTime` | `number` | yes | — | The maximum time in milliseconds a resource can be unused before being garbage collected. |
| `gcFrequency` | `number` | yes | — | How frequently to run garbage collection in milliseconds. |

### AttributeOptions

The attribute options used by the constructor for adding geometries attributes
extends Attribute but allows for the buffer to be a typed or number array

### GlobalUniformOptions

Options for the global uniforms system.
This includes size, projection matrix, world transform matrix, world color, and offset.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `number[]` | no | — |  |
| `projectionMatrix` | `Matrix` | no | — |  |
| `worldTransformMatrix` | `Matrix` | no | — |  |
| `worldColor` | `number` | no | — |  |
| `offset` | `PointData` | no | — |  |

### RenderTargetOptions

Options for creating a render target.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `width` | `number` | no | — | the width of the RenderTarget |
| `height` | `number` | no | — | the height of the RenderTarget |
| `resolution` | `number` | no | — | the resolution of the RenderTarget |
| `colorTextures` | `number | BindableTexture[]` | no | — | an array of textures, or a number indicating how many color textures there should be |
| `stencil` | `boolean` | no | — | should this render target have a stencil buffer? |
| `depth` | `boolean` | no | — | should this render target have a depth buffer? |
| `depthStencilTexture` | `boolean | BindableTexture` | no | — | a depth stencil texture that the depth and stencil outputs will be written to |
| `antialias` | `boolean` | no | — | should this render target be antialiased? |
| `isRoot` | `boolean` | no | — | is this a root element, true if this is gl context owners render target |

### UniformGroupOptions

Uniform group options

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `ubo` | `boolean` | no | — | if true the UniformGroup is handled as an Uniform buffer object.
This is the only way WebGPU can work with uniforms. WebGL2 can also use this.
So don't set to true if you want to use WebGPU :D |
| `isStatic` | `boolean` | no | — | if true, then you are responsible for when the data is uploaded to the GPU by calling `update()` |

### HelloSystemOptions

Options for the startup system.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `hello` | `boolean` | yes | — | Whether to log the version and type information of renderer to console. |

### RendererConfig

The configuration for the renderer.
This is used to define the systems and render pipes that will be used by the renderer.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | `number` | yes | — |  |
| `name` | `string` | yes | — |  |
| `runners` | `string[]` | no | — |  |
| `systems` | `{ name: string; value: SystemConstructor }[]` | yes | — |  |
| `renderPipes` | `{ name: string; value: PipeConstructor }[]` | yes | — |  |
| `renderPipeAdaptors` | `{ name: string; value: any }[]` | yes | — |  |

### RenderOptions

The options for rendering a view.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `container` | `Container` | yes | — | The container to render. |
| `transform` | `Matrix` | no | — | the transform to apply to the container. |
| `target` | `RenderSurface` | no | — | The render target to render. if this target is a canvas and  you are using the WebGL renderer,
please ensure you have set `multiView` to `true` on renderer. |
| `clearColor` | `ColorSource` | no | — | The color to clear with. |
| `clear` | `CLEAR_OR_BOOL` | no | — | The clear mode to use. |
| `mipLevel` | `number` | no | — | Mip level to render/clear to when the target is a texture-backed render surface. |
| `layer` | `number` | no | — | Array layer index to render/clear to when the target is an array-backed texture source (e.g. `arrayLayerCount > 1`).

This maps to WebGPU's `GPUTextureViewDescriptor.baseArrayLayer` when creating render-attachment views. |

### ClearOptions

The options for clearing the render target.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `target` | `RenderSurface` | no | — | The render target to render. if this target is a canvas and  you are using the WebGL renderer,
please ensure you have set `multiView` to `true` on renderer. |
| `clearColor` | `ColorSource` | no | — | The color to clear with. |
| `clear` | `CLEAR_OR_BOOL` | no | — | The clear mode to use. |
| `mipLevel` | `number` | no | — | Mip level to render/clear to when the target is a texture-backed render surface. |
| `layer` | `number` | no | — | Array layer index to render/clear to when the target is an array-backed texture source (e.g. `arrayLayerCount > 1`).

This maps to WebGPU's `GPUTextureViewDescriptor.baseArrayLayer` when creating render-attachment views. |

### RendererDestroyOptions

Options for destroying the renderer.
This can be a boolean or an object.

### SharedRendererOptions

Options for the shared systems of a renderer.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `skipExtensionImports` | `boolean` | no | — | Whether to stop PixiJS from dynamically importing default extensions for the renderer.
It is false by default, and means PixiJS will load all the default extensions, based
on the environment e.g browser/webworker.
If you set this to true, then you will need to manually import the systems and extensions you need.

e.g.
```js
import 'accessibility';
import 'app';
import 'events';
import 'spritesheet';
import 'graphics';
import 'mesh';
import 'text';
import 'text-bitmap';
import 'text-html';
import { autoDetectRenderer } from 'pixi.js';

const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  skipExtensionImports: true,
});
``` |
| `manageImports` | `boolean` | no | — |  |
| `renderableGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `renderableGCMaxUnusedTime` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `renderableGCFrequency` | `number` | yes | — | Frames between two garbage collections. |
| `textureGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `textureGCAMaxIdle` | `number` | yes | — |  |
| `textureGCMaxIdle` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `textureGCCheckCountMax` | `number` | yes | — | Frames between two garbage collections. |
| `gcActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector. |
| `gcMaxUnusedTime` | `number` | yes | — | The maximum time in milliseconds a resource can be unused before being garbage collected. |
| `gcFrequency` | `number` | yes | — | How frequently to run garbage collection in milliseconds. |
| `width` | `number` | no | — | The width of the screen. |
| `height` | `number` | no | — | The height of the screen. |
| `canvas` | `ICanvas` | no | — | The canvas to use as a view, optional. |
| `view` | `ICanvas` | no | — | Alias for `canvas`. |
| `autoDensity` | `boolean` | no | — | Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas. |
| `resolution` | `number` | no | — | The resolution / device pixel ratio of the renderer. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing. This may affect performance. |
| `depth` | `boolean` | no | — | Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer. |
| `hello` | `boolean` | yes | — | Whether to log the version and type information of renderer to console. |
| `backgroundColor` | `ColorSource` | yes | — | The background color used to clear the canvas. See ColorSource for accepted color values. |
| `background` | `ColorSource` | no | — | Alias for `backgroundColor` |
| `backgroundAlpha` | `number` | no | — | Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
This value determines whether the canvas is initialized with alpha transparency support.
Note: This cannot be changed after initialization. If set to `1`, the canvas will remain opaque,
even if a transparent background color is set later. |
| `clearBeforeRender` | `boolean` | no | — | Whether to clear the canvas before new render passes. |
| `eventMode` | `EventMode` | no | — | The type of interaction behavior for a Container. This is set via the Container#eventMode property. |
| `eventFeatures` | `Partial<EventSystemFeatures>` | no | — | Configuration for enabling/disabling specific event features.
Use this to optimize performance by turning off unused functionality. |
| `failIfMajorPerformanceCaveat` | `boolean` | no | — |  |
| `roundPixels` | `boolean` | no | — |  |
| `bezierSmoothness` | `number` | yes | — | A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother) |

### CubeTextureOptions

The options that can be passed to a new CubeTexture.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | `CubeTextureSource` | yes | — | The underlying cube texture source. |
| `label` | `string` | no | — | Optional label, for debugging. |

### RenderableGCSystemOptions

Options for the RenderableGCSystem.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `renderableGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the renderables. |
| `renderableGCMaxUnusedTime` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `renderableGCFrequency` | `number` | yes | — | Frames between two garbage collections. |

### RenderTextureOptions

The options that can be passed to a new RenderTexture

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `textureOptions` | `Omit<TextureOptions, "source" | "dynamic">` | no | — | texture options TextureOptions |
| `resource` | `any` | no | — | the resource that will be uploaded to the GPU. This is where we get our pixels from
eg an ImageBimt / Canvas / Video etc |
| `width` | `number` | no | — | the pixel width of this texture source. This is the REAL pure number, not accounting resolution |
| `height` | `number` | no | — | the pixel height of this texture source. This is the REAL pure number, not accounting resolution |
| `resolution` | `number` | no | — | the resolution of the texture. |
| `format` | `TEXTURE_FORMATS` | no | — | the format that the texture data has |
| `antialias` | `boolean` | no | — | Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture. |
| `dimensions` | `TEXTURE_DIMENSIONS` | no | — | how many dimensions does this texture have? currently v8 only supports 2d |
| `viewDimension` | `TEXTURE_VIEW_DIMENSIONS` | no | — | How this texture is viewed/sampled by shaders.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension`. For example, cube maps are typically stored as a
2D texture with 6 array layers (`dimensions: '2d'`) but viewed as `viewDimension: 'cube'`. |
| `arrayLayerCount` | `number` | no | — | The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers). |
| `mipLevelCount` | `number` | no | — | The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true |
| `autoGenerateMipmaps` | `boolean` | no | — | Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture. |
| `alphaMode` | `ALPHA_MODES` | no | — | the alpha mode of the texture |
| `label` | `string` | no | — | optional label, can be used for debugging |
| `autoGarbageCollect` | `boolean` | no | — | If true, the Garbage Collector will unload this texture if it is not used after a period of time |
| `dynamic` | `boolean` | no | — | Used by RenderTexture.create to allow resizing. Not used by TextureSource itself. |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `_resourceId` | `number` | no | — |  |

### BufferSourceOptions

Options for creating a BufferImageSource.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `width` | `number` | yes | — | the pixel width of this texture source. This is the REAL pure number, not accounting resolution |
| `height` | `number` | yes | — | the pixel height of this texture source. This is the REAL pure number, not accounting resolution |
| `resource` | `ArrayBuffer | TypedArray` | no | — | the resource that will be uploaded to the GPU. This is where we get our pixels from
eg an ImageBimt / Canvas / Video etc |
| `resolution` | `number` | no | — | the resolution of the texture. |
| `format` | `TEXTURE_FORMATS` | no | — | the format that the texture data has |
| `antialias` | `boolean` | no | — | Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture. |
| `dimensions` | `TEXTURE_DIMENSIONS` | no | — | how many dimensions does this texture have? currently v8 only supports 2d |
| `viewDimension` | `TEXTURE_VIEW_DIMENSIONS` | no | — | How this texture is viewed/sampled by shaders.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension`. For example, cube maps are typically stored as a
2D texture with 6 array layers (`dimensions: '2d'`) but viewed as `viewDimension: 'cube'`. |
| `arrayLayerCount` | `number` | no | — | The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers). |
| `mipLevelCount` | `number` | no | — | The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true |
| `autoGenerateMipmaps` | `boolean` | no | — | Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture. |
| `alphaMode` | `ALPHA_MODES` | no | — | the alpha mode of the texture |
| `label` | `string` | no | — | optional label, can be used for debugging |
| `autoGarbageCollect` | `boolean` | no | — | If true, the Garbage Collector will unload this texture if it is not used after a period of time |
| `dynamic` | `boolean` | no | — | Used by RenderTexture.create to allow resizing. Not used by TextureSource itself. |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `_resourceId` | `number` | no | — |  |

### CanvasSourceOptions

Options for creating a CanvasSource.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `autoDensity` | `boolean` | no | — | Should the canvas be resized to preserve its screen width and height regardless
of the resolution of the renderer, this is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas. |
| `transparent` | `boolean` | no | — | if true, this canvas will be set up to be transparent where possible |
| `resource` | `ICanvas` | no | — | the resource that will be uploaded to the GPU. This is where we get our pixels from
eg an ImageBimt / Canvas / Video etc |
| `width` | `number` | no | — | the pixel width of this texture source. This is the REAL pure number, not accounting resolution |
| `height` | `number` | no | — | the pixel height of this texture source. This is the REAL pure number, not accounting resolution |
| `resolution` | `number` | no | — | the resolution of the texture. |
| `format` | `TEXTURE_FORMATS` | no | — | the format that the texture data has |
| `antialias` | `boolean` | no | — | Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture. |
| `dimensions` | `TEXTURE_DIMENSIONS` | no | — | how many dimensions does this texture have? currently v8 only supports 2d |
| `viewDimension` | `TEXTURE_VIEW_DIMENSIONS` | no | — | How this texture is viewed/sampled by shaders.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension`. For example, cube maps are typically stored as a
2D texture with 6 array layers (`dimensions: '2d'`) but viewed as `viewDimension: 'cube'`. |
| `arrayLayerCount` | `number` | no | — | The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers). |
| `mipLevelCount` | `number` | no | — | The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true |
| `autoGenerateMipmaps` | `boolean` | no | — | Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture. |
| `alphaMode` | `ALPHA_MODES` | no | — | the alpha mode of the texture |
| `label` | `string` | no | — | optional label, can be used for debugging |
| `autoGarbageCollect` | `boolean` | no | — | If true, the Garbage Collector will unload this texture if it is not used after a period of time |
| `dynamic` | `boolean` | no | — | Used by RenderTexture.create to allow resizing. Not used by TextureSource itself. |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `_resourceId` | `number` | no | — |  |

### CubeTextureSourceOptions

Options for creating a CubeTextureSource.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `faces` | `CubeTextureFaces<TextureSource<any>>` | yes | — | The 6 face sources that make up the cube texture.

All faces must match in:
- size (pixelWidth / pixelHeight)
- resolution
- format
- alphaMode |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `label` | `string` | no | — | optional label, can be used for debugging |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `dynamic` | `boolean` | no | — | Used by RenderTexture.create to allow resizing. Not used by TextureSource itself. |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `_resourceId` | `number` | no | — |  |
| `mipLevelCount` | `number` | no | — | The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true |
| `autoGenerateMipmaps` | `boolean` | no | — | Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture. |
| `arrayLayerCount` | `number` | no | — | The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers). |
| `antialias` | `boolean` | no | — | Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture. |
| `autoGarbageCollect` | `boolean` | no | — | If true, the Garbage Collector will unload this texture if it is not used after a period of time |

### ExternalSourceOptions

Options for creating an ExternalSource.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `resource` | `GPUTexture | WebGLTexture` | no | — | The external GPU texture (GPUTexture for WebGPU, WebGLTexture for WebGL).
If not provided, a shared 1x1 placeholder texture will be used until
`updateGPUTexture()` is called. |
| `renderer` | `Renderer` | yes | — | The renderer this texture will be used with |
| `width` | `number` | no | — | Width of the texture. Auto-detected for GPUTexture, required for WebGLTexture. |
| `height` | `number` | no | — | Height of the texture. Auto-detected for GPUTexture, required for WebGLTexture. |
| `label` | `string` | no | — | Optional label for debugging |

### TextureSourceOptions

options for creating a new TextureSource

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `resource` | `T` | no | — | the resource that will be uploaded to the GPU. This is where we get our pixels from
eg an ImageBimt / Canvas / Video etc |
| `width` | `number` | no | — | the pixel width of this texture source. This is the REAL pure number, not accounting resolution |
| `height` | `number` | no | — | the pixel height of this texture source. This is the REAL pure number, not accounting resolution |
| `resolution` | `number` | no | — | the resolution of the texture. |
| `format` | `TEXTURE_FORMATS` | no | — | the format that the texture data has |
| `antialias` | `boolean` | no | — | Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture. |
| `dimensions` | `TEXTURE_DIMENSIONS` | no | — | how many dimensions does this texture have? currently v8 only supports 2d |
| `viewDimension` | `TEXTURE_VIEW_DIMENSIONS` | no | — | How this texture is viewed/sampled by shaders.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension`. For example, cube maps are typically stored as a
2D texture with 6 array layers (`dimensions: '2d'`) but viewed as `viewDimension: 'cube'`. |
| `arrayLayerCount` | `number` | no | — | The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers). |
| `mipLevelCount` | `number` | no | — | The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true |
| `autoGenerateMipmaps` | `boolean` | no | — | Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture. |
| `alphaMode` | `ALPHA_MODES` | no | — | the alpha mode of the texture |
| `label` | `string` | no | — | optional label, can be used for debugging |
| `autoGarbageCollect` | `boolean` | no | — | If true, the Garbage Collector will unload this texture if it is not used after a period of time |
| `dynamic` | `boolean` | no | — | Used by RenderTexture.create to allow resizing. Not used by TextureSource itself. |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `_resourceId` | `number` | no | — |  |

### VideoSourceOptions

Options for video sources.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `autoLoad` | `boolean` | no | — | If true, the video will start loading immediately. |
| `autoPlay` | `boolean` | no | — | If true, the video will start playing as soon as it is loaded. |
| `updateFPS` | `number` | no | — | The number of times a second to update the texture from the video. Leave at 0 to update at every render. |
| `crossorigin` | `string | boolean` | no | — | If true, the video will be loaded with the `crossorigin` attribute. |
| `loop` | `boolean` | no | — | If true, the video will loop when it ends. |
| `muted` | `boolean` | no | — | If true, the video will be muted. |
| `playsinline` | `boolean` | no | — | If true, the video will play inline. |
| `preload` | `boolean` | no | — | If true, the video will be preloaded. |
| `preloadTimeoutMs` | `number` | no | — | The time in milliseconds to wait for the video to preload before timing out. |
| `alphaMode` | `ALPHA_MODES` | no | — | The alpha mode of the video. |
| `resource` | `HTMLVideoElement` | no | — | the resource that will be uploaded to the GPU. This is where we get our pixels from
eg an ImageBimt / Canvas / Video etc |
| `width` | `number` | no | — | the pixel width of this texture source. This is the REAL pure number, not accounting resolution |
| `height` | `number` | no | — | the pixel height of this texture source. This is the REAL pure number, not accounting resolution |
| `resolution` | `number` | no | — | the resolution of the texture. |
| `format` | `TEXTURE_FORMATS` | no | — | the format that the texture data has |
| `antialias` | `boolean` | no | — | Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture. |
| `dimensions` | `TEXTURE_DIMENSIONS` | no | — | how many dimensions does this texture have? currently v8 only supports 2d |
| `viewDimension` | `TEXTURE_VIEW_DIMENSIONS` | no | — | How this texture is viewed/sampled by shaders.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension`. For example, cube maps are typically stored as a
2D texture with 6 array layers (`dimensions: '2d'`) but viewed as `viewDimension: 'cube'`. |
| `arrayLayerCount` | `number` | no | — | The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers). |
| `mipLevelCount` | `number` | no | — | The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true |
| `autoGenerateMipmaps` | `boolean` | no | — | Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture. |
| `label` | `string` | no | — | optional label, can be used for debugging |
| `autoGarbageCollect` | `boolean` | no | — | If true, the Garbage Collector will unload this texture if it is not used after a period of time |
| `dynamic` | `boolean` | no | — | Used by RenderTexture.create to allow resizing. Not used by TextureSource itself. |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `_resourceId` | `number` | no | — |  |

### TextureOptions

The options that can be passed to a new Texture

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | `TextureSourceType` | no | — | the underlying texture data that this texture will use |
| `label` | `string` | no | — | optional label, for debugging |
| `frame` | `Rectangle` | no | — | The rectangle frame of the texture to show |
| `orig` | `Rectangle` | no | — | The area of original texture |
| `trim` | `Rectangle` | no | — | Trimmed rectangle of original texture |
| `defaultAnchor` | `{ x: number; y: number }` | no | — | Default anchor point used for sprite placement / rotation |
| `defaultBorders` | `TextureBorders` | no | — | Default borders used for 9-slice scaling NineSlicePlane |
| `rotate` | `number` | no | — | indicates how the texture was rotated by texture packer. See groupD8 |
| `dynamic` | `boolean` | no | — | Set to true if you plan on modifying this texture's frame, UVs, or swapping its source at runtime.
This is false by default as it improves performance. Generally, it's recommended to create new
textures and swap those rather than modifying an existing texture's properties unless you are
working with a dynamic frames.
Not setting this to true when modifying the texture can lead to visual artifacts.

If this is false and you modify the texture, you can manually update the sprite's texture by calling
`sprite.onViewUpdate()`. |

### TextureGCSystemOptions

Options for the TextureGCSystem.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `textureGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `textureGCAMaxIdle` | `number` | yes | — |  |
| `textureGCMaxIdle` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `textureGCCheckCountMax` | `number` | yes | — | Frames between two garbage collections. |

### TextureStyleOptions

The options for the texture style.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `_resourceId` | `number` | no | — |  |

### TextureResourceOrOptions

The type of resource or options that can be used to create a texture source.
This includes ImageResource, TextureSourceOptions, BufferSourceOptions, and CanvasSourceOptions.

### ViewSystemOptions

Options passed to the ViewSystem

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `width` | `number` | no | — | The width of the screen. |
| `height` | `number` | no | — | The height of the screen. |
| `canvas` | `ICanvas` | no | — | The canvas to use as a view, optional. |
| `view` | `ICanvas` | no | — | Alias for `canvas`. |
| `autoDensity` | `boolean` | no | — | Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas. |
| `resolution` | `number` | no | — | The resolution / device pixel ratio of the renderer. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing. This may affect performance. |
| `depth` | `boolean` | no | — | Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer. |

### ViewSystemDestroyOptions

Options for destroying the ViewSystem.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `removeView` | `boolean` | no | — | Whether to remove the view element from the DOM. Defaults to `false`. |

### RendererOptions

Options for the renderer.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `skipExtensionImports` | `boolean` | no | — | Whether to stop PixiJS from dynamically importing default extensions for the renderer.
It is false by default, and means PixiJS will load all the default extensions, based
on the environment e.g browser/webworker.
If you set this to true, then you will need to manually import the systems and extensions you need.

e.g.
```js
import 'accessibility';
import 'app';
import 'events';
import 'spritesheet';
import 'graphics';
import 'mesh';
import 'text';
import 'text-bitmap';
import 'text-html';
import { autoDetectRenderer } from 'pixi.js';

const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  skipExtensionImports: true,
});
``` |
| `manageImports` | `boolean` | no | — |  |
| `renderableGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `renderableGCMaxUnusedTime` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `renderableGCFrequency` | `number` | yes | — | Frames between two garbage collections. |
| `textureGCActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector on the GPU. |
| `textureGCAMaxIdle` | `number` | yes | — |  |
| `textureGCMaxIdle` | `number` | yes | — | The maximum idle frames before a texture is destroyed by garbage collection. |
| `textureGCCheckCountMax` | `number` | yes | — | Frames between two garbage collections. |
| `gcActive` | `boolean` | yes | — | If set to true, this will enable the garbage collector. |
| `gcMaxUnusedTime` | `number` | yes | — | The maximum time in milliseconds a resource can be unused before being garbage collected. |
| `gcFrequency` | `number` | yes | — | How frequently to run garbage collection in milliseconds. |
| `width` | `number` | no | — | The width of the screen. |
| `height` | `number` | no | — | The height of the screen. |
| `canvas` | `ICanvas` | no | — | The canvas to use as a view, optional. |
| `view` | `ICanvas` | no | — | Alias for `canvas`. |
| `autoDensity` | `boolean` | no | — | Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas. |
| `resolution` | `number` | no | — | The resolution / device pixel ratio of the renderer. |
| `antialias` | `boolean` | no | — | Whether to enable anti-aliasing. This may affect performance. |
| `depth` | `boolean` | no | — | Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer. |
| `hello` | `boolean` | yes | — | Whether to log the version and type information of renderer to console. |
| `backgroundColor` | `ColorSource` | yes | — | The background color used to clear the canvas. See ColorSource for accepted color values. |
| `background` | `ColorSource` | no | — | Alias for `backgroundColor` |
| `backgroundAlpha` | `number` | no | — | Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
This value determines whether the canvas is initialized with alpha transparency support.
Note: This cannot be changed after initialization. If set to `1`, the canvas will remain opaque,
even if a transparent background color is set later. |
| `clearBeforeRender` | `boolean` | no | — | Whether to clear the canvas before new render passes. |
| `eventMode` | `EventMode` | no | — | The type of interaction behavior for a Container. This is set via the Container#eventMode property. |
| `eventFeatures` | `Partial<EventSystemFeatures>` | no | — | Configuration for enabling/disabling specific event features.
Use this to optimize performance by turning off unused functionality. |
| `failIfMajorPerformanceCaveat` | `boolean` | no | — |  |
| `roundPixels` | `boolean` | no | — |  |
| `bezierSmoothness` | `number` | yes | — | A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother) |
| `context` | `WebGL2RenderingContext` | yes | — | User-provided WebGL rendering context object. |
| `powerPreference` | `GpuPowerPreference` | no | — | An optional hint indicating what configuration of GPU is suitable for the WebGL context,
can be `'high-performance'` or `'low-power'`.
Setting to `'high-performance'` will prioritize rendering performance over power consumption,
while setting to `'low-power'` will prioritize power saving over rendering performance. |
| `premultipliedAlpha` | `boolean` | yes | — | Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha. |
| `preserveDrawingBuffer` | `boolean` | yes | — | Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve
its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context. |
| `preferWebGLVersion` | `1 | 2` | no | — | The preferred WebGL version to use. |
| `multiView` | `boolean` | yes | — | Whether to enable multi-view rendering. Set to true when rendering to multiple
canvases on the dom. |
| `useBackBuffer` | `boolean` | no | — | if true will use the back buffer where required |
| `forceFallbackAdapter` | `boolean` | yes | — | Force the use of the fallback adapter |
| `gpu` | `GPU` | no | — | Using shared device and adaptor from other engine |

### MaskOptions

Options for configuring mask behavior on a display object.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `inverse` | `boolean` | yes | — | Whether the mask should be inverted.
When true, the masked area becomes transparent and the unmasked area becomes visible. |
| `channel` | `MaskChannel` | no | — | Which channel of the mask texture to use for masking.
- `'red'` uses the red channel (default). Suitable for grayscale mask textures.
- `'alpha'` uses the alpha channel. Suitable for sprites with transparency. |

### UpdateTransformOptions

Options for updating the transform of a container.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `x` | `number` | yes | — |  |
| `y` | `number` | yes | — |  |
| `scaleX` | `number` | yes | — |  |
| `scaleY` | `number` | yes | — |  |
| `rotation` | `number` | yes | — |  |
| `skewX` | `number` | yes | — |  |
| `skewY` | `number` | yes | — |  |
| `pivotX` | `number` | yes | — |  |
| `pivotY` | `number` | yes | — |  |
| `originX` | `number` | yes | — |  |
| `originY` | `number` | yes | — |  |

### ContainerOptions

Constructor options used for `Container` instances.
```js
const container = new Container({
   position: new Point(100, 200),
   scale: new Point(2, 2),
   rotation: Math.PI / 2,
});
```

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `isRenderGroup` | `boolean` | no | — |  |
| `blendMode` | `BLEND_MODES` | no | — | The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export. |
| `tint` | `ColorSource` | no | — | The tint applied to the sprite.

This can be any valid ColorSource. |
| `alpha` | `number` | no | — | The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque). |
| `angle` | `number` | no | — | The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `children` | `C[]` | no | — | The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods. |
| `parent` | `Container` | no | — | The display object container that contains this display object.
This represents the parent-child relationship in the display tree. |
| `renderable` | `boolean` | no | — | Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates. |
| `rotation` | `number` | no | — | The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `scale` | `number | PointData` | no | — | The scale factors of this object along the local coordinate axes.

The default scale is (1, 1). |
| `pivot` | `number | PointData` | no | — | The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0). |
| `origin` | `number | PointData` | no | — | The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position. |
| `position` | `PointData` | no | — | The coordinate of the object relative to the local coordinates of the parent. |
| `skew` | `PointData` | no | — | The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape. |
| `visible` | `boolean` | no | — | The visibility of the object. If false the object will not be drawn,
and the transform will not be updated. |
| `x` | `number` | no | — | The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x |
| `y` | `number` | no | — | The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y |
| `boundsArea` | `Rectangle` | no | — | An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set. |
| `accessible` | `boolean` | no | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | no | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | no | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | no | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | no | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | no | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | no | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | no | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |
| `cullArea` | `Rectangle` | no | — | Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations. |
| `cullable` | `boolean` | no | — | Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area. |
| `cullableChildren` | `boolean` | no | — | Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance. |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |
| `onRender` | `(renderer: Renderer) => void` | no | — | This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame |
| `width` | `number` | no | — | The width of the display object, in pixels. |
| `height` | `number` | no | — | The height of the display object, in pixels. |
| `mask` | `Mask` | no | — | The mask to apply, which can be a Container or null.

If null, it clears the existing mask. |
| `setMask` | `(options: Partial<MaskOptionsAndMask>) => void` | no | — |  |
| `filters` | `Filter | readonly Filter[]` | no | — | Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer. |
| `label` | `string` | no | — | The instance label of the object. |
| `zIndex` | `number` | no | — | The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order. |
| `sortableChildren` | `boolean` | no | — | If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position. |
| `cacheAsTexture` | `(val: boolean | CacheAsTextureOptions) => void` | no | — |  |

### BaseDestroyOptions

Base options for destroying display objects.
Controls how deep the destruction process should go through the display tree.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `boolean` | no | — | Whether to destroy children recursively.
When true, runs destroy() on all children in the display tree. |

### TextureDestroyOptions

Options when destroying textures through `.destroy()` calls.
Controls how thoroughly textures and their sources are cleaned up.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `texture` | `boolean` | no | — | Whether to destroy the texture for the display object. |
| `textureSource` | `boolean` | no | — | Whether to destroy the underlying texture source.
Use carefully with shared texture sources. |

### ContextDestroyOptions

Options when destroying a graphics context.
Controls the cleanup of graphics-specific resources.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `context` | `boolean` | no | — | Whether to destroy the graphics context associated with the graphics object. |

### TextDestroyOptions

Options when destroying a text object. Controls whether associated text styles
should be cleaned up along with the text object itself.
```ts
// Basic text cleanup
text.destroy({ style: false }); // Keep style for reuse
text.destroy({ style: true }); // Destroy style as well
```

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `style` | `boolean` | no | — | Whether to destroy the text style object along with the text.
Use carefully with shared styles. |

### DestroyOptions

Options for destroying a container and its resources.
Combines all destroy options into a single configuration object.

### RenderContainerOptions

Options for the RenderContainer constructor.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `render` | `RenderFunction` | no | — | the optional custom render function if you want to inject the function via the constructor |
| `containsPoint` | `(point: Point) => boolean` | no | — | how to know if the custom render logic contains a point or not, used for interaction |
| `addBounds` | `(bounds: BoundsData) => void` | no | — | how to add the bounds of this object when measuring |

### CacheAsTextureOptions

Options for caching a container as a texture.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `antialias` | `boolean` | no | — | If true, the texture will be antialiased. This smooths out the edges of the texture. |
| `resolution` | `number` | no | — | The resolution of the texture. A higher resolution means a sharper texture but uses more memory.
By default the resolution is 1 which is the same as the rendererers resolution. |
| `scaleMode` | `SCALE_MODE` | no | — | Scale Mode to use for the cached texture |

### BaseGradientOptions

Represents the style options for a linear gradient fill.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | `GradientType` | no | — | The type of gradient |
| `colorStops` | `{ offset: number; color: ColorSource }[]` | no | — | Array of colors stops to use in the gradient |
| `textureSpace` | `TextureSpace` | no | — | Whether coordinates are 'global' or 'local' |
| `textureSize` | `number` | no | — | The size of the texture to use for the gradient - this is for advanced usage.
The texture size does not need to match the size of the object being drawn.
Due to GPU interpolation, gradient textures can be relatively small!
Consider using a larger texture size if your gradient has a lot of very tight color steps |
| `wrapMode` | `WRAP_MODE` | no | — | The wrap mode of the gradient.
This can be 'clamp-to-edge' or 'repeat'. |

### LinearGradientOptions

Options specific to linear gradients.
A linear gradient creates a smooth transition between colors along a straight line defined by start and end points.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | `"linear"` | no | — | The type of gradient. Must be 'linear' for linear gradients. |
| `start` | `PointData` | no | — | The start point of the gradient.
This point defines where the gradient begins.
It is represented as a PointData object containing x and y coordinates.
The coordinates are in local space by default (0-1), but can be in global space if specified. |
| `end` | `PointData` | no | — | The end point of the gradient.
This point defines where the gradient ends.
It is represented as a PointData object containing x and y coordinates.
The coordinates are in local space by default (0-1), but can be in global space if specified. |
| `colorStops` | `{ offset: number; color: ColorSource }[]` | no | — | Array of colors stops to use in the gradient |
| `textureSpace` | `TextureSpace` | no | — | Whether coordinates are 'global' or 'local' |
| `textureSize` | `number` | no | — | The size of the texture to use for the gradient - this is for advanced usage.
The texture size does not need to match the size of the object being drawn.
Due to GPU interpolation, gradient textures can be relatively small!
Consider using a larger texture size if your gradient has a lot of very tight color steps |
| `wrapMode` | `WRAP_MODE` | no | — | The wrap mode of the gradient.
This can be 'clamp-to-edge' or 'repeat'. |

### RadialGradientOptions

Options specific to radial gradients.
A radial gradient creates a smooth transition between colors that radiates outward in a circular pattern.
The gradient is defined by inner and outer circles, each with their own radius.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | `"radial"` | no | — | The type of gradient. Must be 'radial' for radial gradients. |
| `center` | `PointData` | no | — | The center point of the inner circle where the gradient begins. In local coordinates by default (0-1). |
| `innerRadius` | `number` | no | — | The radius of the inner circle where the gradient begins. |
| `outerCenter` | `PointData` | no | — | The center point of the outer circle where the gradient ends. In local coordinates by default (0-1). |
| `outerRadius` | `number` | no | — | The radius of the outer circle where the gradient ends. |
| `scale` | `number` | no | — | The y scale of the gradient, use this to make the gradient elliptical.
NOTE: Only applied to radial gradients used with Graphics. |
| `rotation` | `number` | no | — | The rotation of the gradient in radians, useful for making the gradient elliptical.
NOTE: Only applied to radial gradients used with Graphics. |
| `colorStops` | `{ offset: number; color: ColorSource }[]` | no | — | Array of colors stops to use in the gradient |
| `textureSpace` | `TextureSpace` | no | — | Whether coordinates are 'global' or 'local' |
| `textureSize` | `number` | no | — | The size of the texture to use for the gradient - this is for advanced usage.
The texture size does not need to match the size of the object being drawn.
Due to GPU interpolation, gradient textures can be relatively small!
Consider using a larger texture size if your gradient has a lot of very tight color steps |
| `wrapMode` | `WRAP_MODE` | no | — | The wrap mode of the gradient.
This can be 'clamp-to-edge' or 'repeat'. |

### GradientOptions

Options for creating a gradient fill.

### GraphicsOptions

Constructor options used for Graphics instances.
Configures the initial state and behavior of a Graphics object.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `context` | `GraphicsContext` | no | — | The GraphicsContext to use, useful for reuse and optimisation
If not provided, a new GraphicsContext will be created. |
| `roundPixels` | `boolean` | no | — | Whether or not to round the x/y position. |
| `autoGarbageCollect` | `boolean` | no | — | If set to true, the resource will be garbage collected automatically when it is not used. |
| `isRenderGroup` | `boolean` | no | — |  |
| `blendMode` | `BLEND_MODES` | no | — | The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export. |
| `tint` | `ColorSource` | no | — | The tint applied to the sprite.

This can be any valid ColorSource. |
| `alpha` | `number` | no | — | The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque). |
| `angle` | `number` | no | — | The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `children` | `ContainerChild[]` | no | — | The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods. |
| `parent` | `Container` | no | — | The display object container that contains this display object.
This represents the parent-child relationship in the display tree. |
| `renderable` | `boolean` | no | — | Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates. |
| `rotation` | `number` | no | — | The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `scale` | `number | PointData` | no | — | The scale factors of this object along the local coordinate axes.

The default scale is (1, 1). |
| `pivot` | `number | PointData` | no | — | The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0). |
| `origin` | `number | PointData` | no | — | The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position. |
| `position` | `PointData` | no | — | The coordinate of the object relative to the local coordinates of the parent. |
| `skew` | `PointData` | no | — | The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape. |
| `visible` | `boolean` | no | — | The visibility of the object. If false the object will not be drawn,
and the transform will not be updated. |
| `x` | `number` | no | — | The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x |
| `y` | `number` | no | — | The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y |
| `boundsArea` | `Rectangle` | no | — | An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set. |
| `accessible` | `boolean` | no | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | no | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | no | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | no | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | no | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | no | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | no | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | no | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |
| `cullArea` | `Rectangle` | no | — | Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations. |
| `cullable` | `boolean` | no | — | Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area. |
| `cullableChildren` | `boolean` | no | — | Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance. |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |
| `onRender` | `(renderer: Renderer) => void` | no | — | This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame |
| `width` | `number` | no | — | The width of the display object, in pixels. |
| `height` | `number` | no | — | The height of the display object, in pixels. |
| `mask` | `Mask` | no | — | The mask to apply, which can be a Container or null.

If null, it clears the existing mask. |
| `setMask` | `(options: Partial<MaskOptionsAndMask>) => void` | no | — |  |
| `filters` | `Filter | readonly Filter[]` | no | — | Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer. |
| `label` | `string` | no | — | The instance label of the object. |
| `zIndex` | `number` | no | — | The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order. |
| `sortableChildren` | `boolean` | no | — | If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position. |
| `cacheAsTexture` | `(val: boolean | CacheAsTextureOptions) => void` | no | — |  |

### GraphicsContextSystemOptions

Options for the GraphicsContextSystem.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `bezierSmoothness` | `number` | no | — | A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother) |

### GeometryPathOptions

Options for building geometry from a graphics path.
Provides a possibility to specify a transformation Matrix for the texture's UVs and output mesh geometry.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `path` | `GraphicsPath` | yes | — | the path to build the geometry from |
| `textureMatrix` | `Matrix` | no | — | a `Matrix` that can be used to modify the texture UVs of the path being built |
| `out` | `MeshGeometry` | no | — | an optional `MeshGeometry` to write too instead of creating a new one |

### RenderLayerOptions

Options for configuring a RenderLayer. A RenderLayer allows control over rendering order
independent of the scene graph hierarchy.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `sortableChildren` | `boolean` | no | — | If true, the layer's children will be sorted by zIndex before rendering.
If false, you can manually sort the children using sortRenderLayerChildren when needed. |
| `sortFunction` | `(a: Container, b: Container) => number` | no | — | Custom sort function to sort layer children. Default sorts by zIndex. |

### PerspectivePlaneOptions

Constructor options used for `PerspectiveMesh` instances. Defines the geometry and appearance
of a 2D mesh with perspective projection.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `x0` | `number` | no | — | The x-coordinate of the top-left corner |
| `y0` | `number` | no | — | The y-coordinate of the top-left corner |
| `x1` | `number` | no | — | The x-coordinate of the top-right corner |
| `y1` | `number` | no | — | The y-coordinate of the top-right corner |
| `x2` | `number` | no | — | The x-coordinate of the bottom-right corner |
| `y2` | `number` | no | — | The y-coordinate of the bottom-right corner |
| `x3` | `number` | no | — | The x-coordinate of the bottom-left corner |
| `y3` | `number` | no | — | The y-coordinate of the bottom-left corner |

### PerspectivePlaneGeometryOptions

Constructor options used for `PerspectivePlaneGeometry` instances.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `width` | `number` | yes | — | The width of the plane |
| `height` | `number` | yes | — | The height of the plane |
| `verticesX` | `number` | no | — | Number of vertices on x-axis |
| `verticesY` | `number` | no | — | Number of vertices on y-axis |

### MeshPlaneOptions

Constructor options used for `MeshPlane` instances. Defines how a texture is mapped
onto a plane with configurable vertex density.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `texture` | `Texture` | yes | — | The texture to use on the plane. |
| `verticesX` | `number` | no | — | Number of vertices along the X axis. More vertices allow for more detailed deformations. |
| `verticesY` | `number` | no | — | Number of vertices along the Y axis. More vertices allow for more detailed deformations. |

### PlaneGeometryOptions

Constructor options used for `PlaneGeometry` instances.
```js
const planeGeometry = new PlaneGeometry({
   width: 100,
   height: 100,
   verticesX: 10,
   verticesY: 10,
});
```

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `width` | `number` | no | — | Width of plane |
| `height` | `number` | no | — | Height of plane |
| `verticesX` | `number` | no | — | Number of vertices on x-axis |
| `verticesY` | `number` | no | — | Number of vertices on y-axis |

### MeshRopeOptions

Constructor options used for `MeshRope` instances. Allows configuration of a rope-like mesh
that follows a series of points with a texture applied.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `texture` | `Texture` | yes | — | The texture to use on the rope |
| `points` | `PointData[]` | yes | — | An array of points that determine the rope's shape and path |
| `textureScale` | `number` | no | — | Controls how the texture is scaled along the rope.
- If 0 (default), the texture stretches to fit between points
- If > 0, texture repeats with preserved aspect ratio
- Larger textures with textureScale < 1 can reduce artifacts |
| `width` | `number` | no | — | The width (i.e., thickness) of the rope. If not specified, defaults back to texture's height. |

### SimpleMeshOptions

Options for creating a SimpleMesh instance. Defines the texture, geometry data, and rendering topology
for a basic mesh with direct vertex manipulation capabilities.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `texture` | `Texture` | yes | — | The texture to use |
| `vertices` | `Float32Array` | no | — | Array of vertex positions as x,y pairs. Each vertex is 2 floats - x, y |
| `uvs` | `Float32Array` | no | — | Array of UV coordinates for texture mapping. Each UV is 2 floats - u, v |
| `indices` | `Uint32Array` | no | — | Array of indices defining triangles. Each triangle is 3 indices into the vertices array. |
| `topology` | `Topology` | no | — | How vertices are connected to form triangles.
- 'triangle-list': Individual triangles (default)
- 'triangle-strip': Connected triangle strip
- 'line-list': Lines between vertices
- 'line-strip': Connected line strip
- 'point-list': Points rendered individually |

### RopeGeometryOptions

Constructor options used for `RopeGeometry` instances.
```js
const ropeGeometry = new RopeGeometry({
   points: [new Point(0, 0), new Point(100, 0)],
   width: 10,
   textureScale: 0,
});
```

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `width` | `number` | no | — | The width (i.e., thickness) of the rope. |
| `points` | `PointData[]` | no | — | An array of points that determine the rope. |
| `textureScale` | `number` | no | — | Rope texture scale, if zero then the rope texture is stretched.
By default the rope texture will be stretched to match
rope length. If textureScale is positive this value will be treated as a scaling
factor and the texture will preserve its aspect ratio instead. To create a tiling rope
set baseTexture.wrapMode to 'repeat' and use a power of two texture,
then set textureScale=1 to keep the original texture pixel size.
In order to reduce alpha channel artifacts provide a larger texture and downsample -
i.e. set textureScale=0.5 to scale it down twice. |

### MeshOptions

Options for creating a Mesh instance.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `geometry` | `GEOMETRY` | yes | — | Includes vertex positions, face indices, colors, UVs, and
custom attributes within buffers, reducing the cost of passing all
this data to the GPU. Can be shared between multiple Mesh objects. |
| `shader` | `SHADER` | no | — | Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
Can be shared between multiple Mesh objects. |
| `state` | `State` | no | — | The state of WebGL required to render the mesh. |
| `texture` | `Texture` | no | — | The texture that the Mesh uses. Null for non-MeshMaterial shaders |
| `roundPixels` | `boolean` | no | — | Whether or not to round the x/y position. |

### MeshGeometryOptions

Options for the mesh geometry.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `positions` | `Float32Array` | no | — | The positions of the mesh. |
| `uvs` | `Float32Array` | no | — | The UVs of the mesh. If not provided, they will be filled with 0 and match the size of the positions. |
| `indices` | `Uint32Array` | no | — | The indices of the mesh. |
| `topology` | `Topology` | no | — | The topology of the mesh. |
| `shrinkBuffersToFit` | `boolean` | no | — | Whether to shrink the buffers to fit the data. |

### ParticleOptions

Configuration options for creating a new particle. All properties except texture are optional
and will use default values if not specified.

### ParticleContainerOptions

Options for configuring a ParticleContainer. Controls how particles are rendered, updated, and managed.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `dynamicProperties` | `ParticleProperties & Record<string, boolean>` | no | — | Specifies which particle properties should update each frame.
Set properties to true for per-frame updates, false for static values. |
| `shader` | `Shader` | no | — | Custom shader for rendering particles. Allows for custom visual effects. |
| `roundPixels` | `boolean` | no | — | When true, particle positions are rounded to the nearest pixel.
Helps achieve crisp rendering at the cost of smooth motion. |
| `texture` | `Texture` | no | — | The texture used for all particles in this container.
If not provided, uses the texture of the first particle added. |
| `particles` | `T[]` | no | — | Initial array of particles to add to the container. All particles must share the same base texture. |

### AnimatedSpriteOptions

Constructor options used for `AnimatedSprite` instances. Allows configuration of animation
playback, speed, and texture frames.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `animationSpeed` | `number` | no | — | The speed that the AnimatedSprite will play at. Higher is faster, lower is slower. |
| `autoPlay` | `boolean` | no | — | Whether to start the animation immediately on creation.
If set to `true`, the animation will start playing as soon as the
`AnimatedSprite` is created.
If set to `false`, you will need to call the `play` method to start the animation. |
| `autoUpdate` | `boolean` | no | — | Whether to use Ticker.shared to auto update animation time.
This is useful for animations that need to be updated every frame.
If set to `false`, you will need to manually call the `update` method
to update the animation. |
| `loop` | `boolean` | no | — | Whether or not the animation repeats after playing. |
| `onComplete` | `() => void` | no | — | User-assigned function to call when an AnimatedSprite finishes playing. |
| `onFrameChange` | `(currentFrame: number) => void` | no | — | User-assigned function to call when an AnimatedSprite changes which texture is being rendered. |
| `onLoop` | `() => void` | no | — | User-assigned function to call when `loop` is true,
and an AnimatedSprite is played and loops around to start again. |
| `textures` | `AnimatedSpriteFrames` | yes | — | An array of Texture or frame objects that make up the animation. |
| `updateAnchor` | `boolean` | no | — | Update anchor to [Texture's defaultAnchor]Texture#defaultAnchor when frame changes.

Useful with [sprite sheet animations]Spritesheet#animations created with tools.
Changing anchor for each frame allows to pin sprite origin to certain moving feature
of the frame (e.g. left foot).
> [!NOTE] Enabling this will override any previously set `anchor` on each frame change. |

### NineSliceGeometryOptions

Options for the NineSliceGeometry.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `width` | `number` | no | — | The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. |
| `height` | `number` | no | — | The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. |
| `originalWidth` | `number` | no | — | The original width of the texture |
| `originalHeight` | `number` | no | — | The original height of the texture |
| `leftWidth` | `number` | no | — | The width of the left column. |
| `topHeight` | `number` | no | — | The height of the top row. |
| `rightWidth` | `number` | no | — | The width of the right column. |
| `bottomHeight` | `number` | no | — | The height of the bottom row. |
| `anchor` | `PointData` | no | — | The anchor point of the NineSliceSprite. |
| `trim` | `{ x: number; y: number; width: number; height: number }` | no | — | The trim rectangle of the texture, describing the offset and size of the visible
pixel area within the original (unpadded) frame. When provided, UV coordinates are
clamped to the trimmed region so that transparent padding in the atlas does not
bleed into the rendered corners/edges. |

### NineSliceSpriteOptions

Constructor options used for `NineSliceSprite` instances.
Defines how the sprite's texture is divided and scaled in nine sections.
<pre>
     A                          B
   +---+----------------------+---+
 C | 1 |          2           | 3 |
   +---+----------------------+---+
   |   |                      |   |
   | 4 |          5           | 6 |
   |   |                      |   |
   +---+----------------------+---+
 D | 7 |          8           | 9 |
   +---+----------------------+---+
 When changing this objects width and/or height:
    areas 1 3 7 and 9 will remain unscaled.
    areas 2 and 8 will be stretched horizontally
    areas 4 and 6 will be stretched vertically
    area 5 will be stretched both horizontally and vertically
</pre>

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `texture` | `Texture` | yes | — | The texture to use on the NineSliceSprite.
```ts
// Create a sprite with a texture
const sprite = new NineSliceSprite({
    texture: Texture.from('path/to/image.png')
});
// Update the texture later
sprite.texture = Texture.from('path/to/another-image.png');
``` |
| `leftWidth` | `number` | no | — | Width of the left vertical bar (A).
Controls the size of the left edge that remains unscaled |
| `topHeight` | `number` | no | — | Height of the top horizontal bar (C).
Controls the size of the top edge that remains unscaled |
| `rightWidth` | `number` | no | — | Width of the right vertical bar (B).
Controls the size of the right edge that remains unscaled |
| `bottomHeight` | `number` | no | — | Height of the bottom horizontal bar (D).
Controls the size of the bottom edge that remains unscaled |
| `width` | `number` | no | — | Width of the NineSliceSprite.
Modifies the vertices directly rather than UV coordinates |
| `height` | `number` | no | — | Height of the NineSliceSprite.
Modifies the vertices directly rather than UV coordinates |
| `roundPixels` | `boolean` | no | — | Whether to round the x/y position to whole pixels |
| `anchor` | `number | PointData` | no | — | The anchor point of the NineSliceSprite (0-1 range)

Controls the origin point for rotation, scaling, and positioning.
Can be a number for uniform anchor or a PointData for separate x/y values. |
| `autoGarbageCollect` | `boolean` | no | — | If set to true, the resource will be garbage collected automatically when it is not used. |
| `isRenderGroup` | `boolean` | no | — |  |
| `blendMode` | `BLEND_MODES` | no | — | The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export. |
| `tint` | `ColorSource` | no | — | The tint applied to the sprite.

This can be any valid ColorSource. |
| `alpha` | `number` | no | — | The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque). |
| `angle` | `number` | no | — | The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `children` | `ContainerChild[]` | no | — | The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods. |
| `parent` | `Container` | no | — | The display object container that contains this display object.
This represents the parent-child relationship in the display tree. |
| `renderable` | `boolean` | no | — | Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates. |
| `rotation` | `number` | no | — | The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `scale` | `number | PointData` | no | — | The scale factors of this object along the local coordinate axes.

The default scale is (1, 1). |
| `pivot` | `number | PointData` | no | — | The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0). |
| `origin` | `number | PointData` | no | — | The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position. |
| `position` | `PointData` | no | — | The coordinate of the object relative to the local coordinates of the parent. |
| `skew` | `PointData` | no | — | The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape. |
| `visible` | `boolean` | no | — | The visibility of the object. If false the object will not be drawn,
and the transform will not be updated. |
| `x` | `number` | no | — | The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x |
| `y` | `number` | no | — | The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y |
| `boundsArea` | `Rectangle` | no | — | An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set. |
| `accessible` | `boolean` | no | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | no | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | no | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | no | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | no | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | no | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | no | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | no | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |
| `cullArea` | `Rectangle` | no | — | Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations. |
| `cullable` | `boolean` | no | — | Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area. |
| `cullableChildren` | `boolean` | no | — | Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance. |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |
| `onRender` | `(renderer: Renderer) => void` | no | — | This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame |
| `mask` | `Mask` | no | — | The mask to apply, which can be a Container or null.

If null, it clears the existing mask. |
| `setMask` | `(options: Partial<MaskOptionsAndMask>) => void` | no | — |  |
| `filters` | `Filter | readonly Filter[]` | no | — | Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer. |
| `label` | `string` | no | — | The instance label of the object. |
| `zIndex` | `number` | no | — | The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order. |
| `sortableChildren` | `boolean` | no | — | If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position. |
| `cacheAsTexture` | `(val: boolean | CacheAsTextureOptions) => void` | no | — |  |

### TilingSpriteOptions

Constructor options used for creating a TilingSprite instance.
Defines the texture, tiling behavior, and rendering properties of the sprite.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `anchor` | `number | PointData` | no | — | The anchor point of the TilingSprite (0-1 range)

Controls the origin point for rotation, scaling, and positioning.
Can be a number for uniform anchor or a PointData for separate x/y values. |
| `tilePosition` | `PointData` | no | — | The offset of the tiling texture.
Used to scroll or position the repeated pattern. |
| `tileScale` | `PointData` | no | — | Scale of the tiling texture.
Affects the size of each repeated instance of the texture. |
| `tileRotation` | `number` | no | — | Rotation of the tiling texture in radians.
This controls the rotation applied to the texture before tiling. |
| `texture` | `Texture` | no | — | The texture to use for tiling.
This is the image that will be repeated across the sprite. |
| `width` | `number` | no | — | The width of the tiling area.
This defines how wide the tiling sprite will be. |
| `height` | `number` | no | — | The height of the tiling area.
This defines how tall the tiling sprite will be. |
| `applyAnchorToTexture` | `boolean` | no | — | Whether the tiling pattern should originate from the anchor point.
When true, tiling starts from the origin instead of top-left.

This will make the texture coordinates assigned to each vertex dependent on the value of the anchor. Without
this, the top-left corner always gets the (0, 0) texture coordinate. |
| `roundPixels` | `boolean` | no | — | Whether to round the sprite's position to whole pixels.
This can help with crisp rendering, especially for pixel art.
When true, the sprite's position will be rounded to the nearest pixel. |

### SpriteOptions

Options for configuring a Sprite instance. Defines the texture, anchor point, and rendering behavior.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `texture` | `Texture` | no | — | The texture to use for the sprite. If not provided, uses Texture.EMPTY |
| `anchor` | `number | PointData` | no | — | The anchor point of the sprite (0-1 range).
Controls the origin point for rotation, scaling, and positioning.
Can be a number for uniform anchor or a PointData for separate x/y values. |
| `roundPixels` | `boolean` | no | — | Whether or not to round the x/y position to whole pixels.
Useful for crisp pixel art style rendering. |

### BitmapFontOptions

Options for creating a BitmapFont. Used when loading or creating bitmap fonts from existing textures and data.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | `BitmapFontData` | yes | — | The bitmap font data containing character metrics, layout information,
and font properties. This includes character positions, dimensions,
kerning data, and general font settings. |
| `textures` | `Texture<TextureSource<any>>[]` | yes | — | Array of textures containing the font glyphs. Each texture corresponds
to a page in the font data. For simple fonts this is typically just
one texture, but complex fonts may split glyphs across multiple textures. |

### BitmapFontInstallOptions

The options for installing a new BitmapFont. Once installed, the font will be available
for use in BitmapText objects through the fontFamily property of TextStyle.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | `string` | no | — | The name of the font. This will be used as the fontFamily in text styles to access this font.
Must be unique across all installed bitmap fonts. |
| `chars` | `string | (string | string[])[]` | no | — | Characters included in the font set. You can specify individual characters or ranges.
Don't forget to include spaces ' ' in your character set! |
| `resolution` | `number` | no | — | Render resolution for glyphs. Higher values create sharper text at the cost of memory.
Useful for supporting high-DPI displays. |
| `padding` | `number` | no | — | Padding between glyphs on texture atlas. Balances visual quality with texture space.
- Lower values: More compact, but may have visual artifacts
- Higher values: Better quality, but uses more texture space |
| `skipKerning` | `boolean` | no | — | Skip generation of kerning information for the BitmapFont.
- true: Faster generation, but text may have inconsistent spacing
- false: Better text appearance, but slower generation |
| `style` | `TextStyle | TextStyleOptions` | no | — | Style options to render the BitmapFont with.
Supports all TextStyle properties including fill, stroke, and shadow effects. |
| `textureStyle` | `TextureStyleOptions | TextureStyle` | no | — | Optional texture style to use when creating the font textures.
Controls how the font textures are rendered and filtered. |
| `dynamicFill` | `boolean` | no | — | Whether to allow overriding the fill color with a tint at runtime.

When enabled, the font can be dynamically tinted using the `tint` property of BitmapText,
allowing a single font to display multiple colors without creating separate font textures.
This is memory efficient but requires the font to be rendered with white fill color.

When disabled, the fill color is permanently baked into the font texture. This allows
any fill color but prevents runtime tinting - each color variation requires a separate font. |

### HTMLTextOptions

Constructor options used for `HTMLText` instances. Extends the base text options
with HTML-specific features and texture styling capabilities.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `textureStyle` | `TextureStyleOptions | TextureStyle` | no | — | Optional texture style to use for the text texture. This allows fine control over
how the text is rendered to a texture before being displayed.

The texture style can affect:
- Scale mode (nearest/linear)
- Resolution
- Format (rgb/rgba)
- Alpha handling |
| `autoGenerateMipmaps` | `boolean` | no | — | Whether to generate mipmaps for the text texture.
Improves rendering quality when the text is scaled down. |
| `anchor` | `number | PointData` | no | — | The anchor point of the text that controls the origin point for positioning and rotation.
Can be a number (same value for x/y) or a PointData object.
- (0,0) is top-left
- (0.5,0.5) is center
- (1,1) is bottom-right
```ts
// Set anchor to center
const text = new Text({
    text: 'Hello Pixi!',
    anchor: 0.5 // Same as { x: 0.5, y: 0.5 }
});
// Set anchor to top-left
const text2 = new Text({
    text: 'Hello Pixi!',
    anchor: { x: 0, y: 0 } // Top-left corner
});
// Set anchor to bottom-right
const text3 = new Text({
    text: 'Hello Pixi!',
    anchor: { x: 1, y: 1 } // Bottom-right corner
});
``` |
| `text` | `TextString` | no | — | The text content to display. Use '\n' for line breaks.
Accepts strings, numbers, or objects with toString() method. |
| `resolution` | `number` | no | — | The resolution/device pixel ratio for rendering.
Higher values result in sharper text at the cost of performance.
Set to null for auto-resolution based on device. |
| `style` | `HTMLTextStyle | HTMLTextStyleOptions` | no | — | The style configuration for the text.
Can be a TextStyle instance or a configuration object.
Supports canvas text styles, HTML text styles, and bitmap text styles. |
| `roundPixels` | `boolean` | no | — | Whether to round the x/y position to whole pixels.
Enabling can prevent anti-aliasing of text edges but may cause slight position shifting. |

### HTMLTextStyleOptions

Options for HTML text style, extends standard text styling with HTML-specific capabilities.
Omits certain base text properties that don't apply to HTML rendering.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `cssOverrides` | `string[]` | no | — | List of CSS style overrides to apply to the HTML text.
These styles are added after the built-in styles and can override any default styling. |
| `tagStyles` | `Record<string, HTMLTextStyleOptions>` | no | — | Custom styles to apply to specific HTML tags.
Allows for consistent styling of custom elements without CSS overrides. |
| `fill` | `FillInput` | no | — | Fill style for the text.
Can be a color, gradient, or pattern. |
| `letterSpacing` | `number` | no | — | The amount of spacing between letters, default is 0 |
| `stroke` | `StrokeInput` | no | — | Stroke style for text outline. |
| `align` | `TextStyleAlign` | no | — | Alignment for multiline text, does not affect single line text |
| `padding` | `number` | no | — | Padding around the text.

Occasionally some fonts are cropped. Adding some padding will prevent this from
happening by adding padding to all sides of the text. |
| `fontFamily` | `string | string[]` | no | — | Font family or families to use.
Can be single name or array of fallbacks. |
| `fontSize` | `string | number` | no | — | Font size in pixels or as string.

Equivalents are '26px','20pt','160%' or '1.6em') |
| `fontStyle` | `TextStyleFontStyle` | no | — | Font style (normal, italic, oblique). |
| `fontVariant` | `TextStyleFontVariant` | no | — | Font variant (normal, small-caps). |
| `fontWeight` | `TextStyleFontWeight` | no | — | Font weight (normal, bold, bolder, lighter, 100-900). |
| `lineHeight` | `number` | no | — | The line height, a number that represents the vertical space that a letter uses |
| `whiteSpace` | `TextStyleWhiteSpace` | no | — | How to handle whitespace.

It needs wordWrap to be set to true for this to have an effect. |
| `wordWrap` | `boolean` | no | — | Indicates if word wrap should be used |
| `breakWords` | `boolean` | no | — | Whether to allow line breaks within words.
Requires wordWrap to be true. |
| `dropShadow` | `boolean | Partial<TextDropShadow>` | no | — | Drop shadow configuration for the text.
Can be boolean or a TextDropShadow object. |
| `wordWrapWidth` | `number` | no | — | The width at which text will wrap, it needs wordWrap to be set to true |

### AbstractSplitOptions

Configuration options for text splitting.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `text` | `string` | yes | — | Text content to be split |
| `style` | `TextStyle | Partial<TextStyleOptions>` | yes | — | Text styling - accepts TextStyle instance or style object |
| `autoSplit` | `boolean` | no | — | Enables automatic splitting on text/style changes |
| `lineAnchor` | `number | PointData` | no | — | Transform origin for line segments. Range: [0-1] |
| `wordAnchor` | `number | PointData` | no | — | Transform origin for word segments. Range: [0-1] |
| `charAnchor` | `number | PointData` | no | — | Transform origin for character segments. Range: [0-1] |

### AbstractSplitTextOptions

Configuration options for SplitText, combining container properties with text splitting settings.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `isRenderGroup` | `boolean` | no | — |  |
| `blendMode` | `BLEND_MODES` | no | — | The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export. |
| `tint` | `ColorSource` | no | — | The tint applied to the sprite.

This can be any valid ColorSource. |
| `alpha` | `number` | no | — | The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque). |
| `angle` | `number` | no | — | The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `children` | `ContainerChild[]` | no | — | The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods. |
| `parent` | `Container` | no | — | The display object container that contains this display object.
This represents the parent-child relationship in the display tree. |
| `renderable` | `boolean` | no | — | Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates. |
| `rotation` | `number` | no | — | The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `scale` | `number | PointData` | no | — | The scale factors of this object along the local coordinate axes.

The default scale is (1, 1). |
| `pivot` | `number | PointData` | no | — | The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0). |
| `origin` | `number | PointData` | no | — | The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position. |
| `position` | `PointData` | no | — | The coordinate of the object relative to the local coordinates of the parent. |
| `skew` | `PointData` | no | — | The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape. |
| `visible` | `boolean` | no | — | The visibility of the object. If false the object will not be drawn,
and the transform will not be updated. |
| `x` | `number` | no | — | The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x |
| `y` | `number` | no | — | The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y |
| `boundsArea` | `Rectangle` | no | — | An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set. |
| `accessible` | `boolean` | no | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | no | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | no | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | no | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | no | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | no | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | no | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | no | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |
| `cullArea` | `Rectangle` | no | — | Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations. |
| `cullable` | `boolean` | no | — | Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area. |
| `cullableChildren` | `boolean` | no | — | Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance. |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |
| `onRender` | `(renderer: Renderer) => void` | no | — | This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame |
| `width` | `number` | no | — | The width of the display object, in pixels. |
| `height` | `number` | no | — | The height of the display object, in pixels. |
| `mask` | `Mask` | no | — | The mask to apply, which can be a Container or null.

If null, it clears the existing mask. |
| `setMask` | `(options: Partial<MaskOptionsAndMask>) => void` | no | — |  |
| `filters` | `Filter | readonly Filter[]` | no | — | Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer. |
| `label` | `string` | no | — | The instance label of the object. |
| `zIndex` | `number` | no | — | The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order. |
| `sortableChildren` | `boolean` | no | — | If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position. |
| `cacheAsTexture` | `(val: boolean | CacheAsTextureOptions) => void` | no | — |  |
| `text` | `string` | yes | — | Text content to be split |
| `style` | `TextStyle | Partial<TextStyleOptions>` | yes | — | Text styling - accepts TextStyle instance or style object |
| `autoSplit` | `boolean` | no | — | Enables automatic splitting on text/style changes |
| `lineAnchor` | `number | PointData` | no | — | Transform origin for line segments. Range: [0-1] |
| `wordAnchor` | `number | PointData` | no | — | Transform origin for word segments. Range: [0-1] |
| `charAnchor` | `number | PointData` | no | — | Transform origin for character segments. Range: [0-1] |

### SplitBitmapOptions

Configuration options for BitmapText splitting.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `text` | `string` | yes | — | Text content to be split |
| `style` | `TextStyle | Partial<TextStyleOptions>` | yes | — | Text styling - accepts TextStyle instance or style object |
| `autoSplit` | `boolean` | no | — | Enables automatic splitting on text/style changes |
| `lineAnchor` | `number | PointData` | no | — | Transform origin for line segments. Range: [0-1] |
| `wordAnchor` | `number | PointData` | no | — | Transform origin for word segments. Range: [0-1] |
| `charAnchor` | `number | PointData` | no | — | Transform origin for character segments. Range: [0-1] |

### SplitBitmapTextOptions

Configuration options for SplitBitmapText, combining container properties with text splitting settings.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `isRenderGroup` | `boolean` | no | — |  |
| `blendMode` | `BLEND_MODES` | no | — | The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export. |
| `tint` | `ColorSource` | no | — | The tint applied to the sprite.

This can be any valid ColorSource. |
| `alpha` | `number` | no | — | The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque). |
| `angle` | `number` | no | — | The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `children` | `ContainerChild[]` | no | — | The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods. |
| `parent` | `Container` | no | — | The display object container that contains this display object.
This represents the parent-child relationship in the display tree. |
| `renderable` | `boolean` | no | — | Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates. |
| `rotation` | `number` | no | — | The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `scale` | `number | PointData` | no | — | The scale factors of this object along the local coordinate axes.

The default scale is (1, 1). |
| `pivot` | `number | PointData` | no | — | The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0). |
| `origin` | `number | PointData` | no | — | The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position. |
| `position` | `PointData` | no | — | The coordinate of the object relative to the local coordinates of the parent. |
| `skew` | `PointData` | no | — | The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape. |
| `visible` | `boolean` | no | — | The visibility of the object. If false the object will not be drawn,
and the transform will not be updated. |
| `x` | `number` | no | — | The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x |
| `y` | `number` | no | — | The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y |
| `boundsArea` | `Rectangle` | no | — | An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set. |
| `accessible` | `boolean` | no | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | no | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | no | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | no | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | no | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | no | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | no | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | no | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |
| `cullArea` | `Rectangle` | no | — | Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations. |
| `cullable` | `boolean` | no | — | Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area. |
| `cullableChildren` | `boolean` | no | — | Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance. |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |
| `onRender` | `(renderer: Renderer) => void` | no | — | This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame |
| `width` | `number` | no | — | The width of the display object, in pixels. |
| `height` | `number` | no | — | The height of the display object, in pixels. |
| `mask` | `Mask` | no | — | The mask to apply, which can be a Container or null.

If null, it clears the existing mask. |
| `setMask` | `(options: Partial<MaskOptionsAndMask>) => void` | no | — |  |
| `filters` | `Filter | readonly Filter[]` | no | — | Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer. |
| `label` | `string` | no | — | The instance label of the object. |
| `zIndex` | `number` | no | — | The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order. |
| `sortableChildren` | `boolean` | no | — | If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position. |
| `cacheAsTexture` | `(val: boolean | CacheAsTextureOptions) => void` | no | — |  |
| `text` | `string` | yes | — | Text content to be split |
| `style` | `TextStyle | Partial<TextStyleOptions>` | yes | — | Text styling - accepts TextStyle instance or style object |
| `autoSplit` | `boolean` | no | — | Enables automatic splitting on text/style changes |
| `lineAnchor` | `number | PointData` | no | — | Transform origin for line segments. Range: [0-1] |
| `wordAnchor` | `number | PointData` | no | — | Transform origin for word segments. Range: [0-1] |
| `charAnchor` | `number | PointData` | no | — | Transform origin for character segments. Range: [0-1] |

### SplitOptions

Configuration options for Text splitting.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `text` | `string` | yes | — | Text content to be split |
| `style` | `TextStyle | Partial<TextStyleOptions>` | yes | — | Text styling - accepts TextStyle instance or style object |
| `autoSplit` | `boolean` | no | — | Enables automatic splitting on text/style changes |
| `lineAnchor` | `number | PointData` | no | — | Transform origin for line segments. Range: [0-1] |
| `wordAnchor` | `number | PointData` | no | — | Transform origin for word segments. Range: [0-1] |
| `charAnchor` | `number | PointData` | no | — | Transform origin for character segments. Range: [0-1] |

### SplitTextOptions

Configuration options for SplitText, combining container properties with text splitting settings.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `isRenderGroup` | `boolean` | no | — |  |
| `blendMode` | `BLEND_MODES` | no | — | The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export. |
| `tint` | `ColorSource` | no | — | The tint applied to the sprite.

This can be any valid ColorSource. |
| `alpha` | `number` | no | — | The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque). |
| `angle` | `number` | no | — | The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `children` | `ContainerChild[]` | no | — | The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods. |
| `parent` | `Container` | no | — | The display object container that contains this display object.
This represents the parent-child relationship in the display tree. |
| `renderable` | `boolean` | no | — | Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates. |
| `rotation` | `number` | no | — | The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `scale` | `number | PointData` | no | — | The scale factors of this object along the local coordinate axes.

The default scale is (1, 1). |
| `pivot` | `number | PointData` | no | — | The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0). |
| `origin` | `number | PointData` | no | — | The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position. |
| `position` | `PointData` | no | — | The coordinate of the object relative to the local coordinates of the parent. |
| `skew` | `PointData` | no | — | The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape. |
| `visible` | `boolean` | no | — | The visibility of the object. If false the object will not be drawn,
and the transform will not be updated. |
| `x` | `number` | no | — | The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x |
| `y` | `number` | no | — | The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y |
| `boundsArea` | `Rectangle` | no | — | An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set. |
| `accessible` | `boolean` | no | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | no | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | no | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | no | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | no | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | no | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | no | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | no | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |
| `cullArea` | `Rectangle` | no | — | Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations. |
| `cullable` | `boolean` | no | — | Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area. |
| `cullableChildren` | `boolean` | no | — | Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance. |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |
| `onRender` | `(renderer: Renderer) => void` | no | — | This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame |
| `width` | `number` | no | — | The width of the display object, in pixels. |
| `height` | `number` | no | — | The height of the display object, in pixels. |
| `mask` | `Mask` | no | — | The mask to apply, which can be a Container or null.

If null, it clears the existing mask. |
| `setMask` | `(options: Partial<MaskOptionsAndMask>) => void` | no | — |  |
| `filters` | `Filter | readonly Filter[]` | no | — | Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer. |
| `label` | `string` | no | — | The instance label of the object. |
| `zIndex` | `number` | no | — | The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order. |
| `sortableChildren` | `boolean` | no | — | If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position. |
| `cacheAsTexture` | `(val: boolean | CacheAsTextureOptions) => void` | no | — |  |
| `text` | `string` | yes | — | Text content to be split |
| `style` | `TextStyle | Partial<TextStyleOptions>` | yes | — | Text styling - accepts TextStyle instance or style object |
| `autoSplit` | `boolean` | no | — | Enables automatic splitting on text/style changes |
| `lineAnchor` | `number | PointData` | no | — | Transform origin for line segments. Range: [0-1] |
| `wordAnchor` | `number | PointData` | no | — | Transform origin for word segments. Range: [0-1] |
| `charAnchor` | `number | PointData` | no | — | Transform origin for character segments. Range: [0-1] |

### AnyTextStyleOptions

A union of all text style options, including HTML, Bitmap and Canvas text style options.
This is used to allow for any text style options to be passed to a text object.

### TextOptions

Options for creating text objects in PixiJS. This interface defines the common properties
used across different text rendering implementations (Canvas, HTML, and Bitmap).

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `anchor` | `number | PointData` | no | — | The anchor point of the text that controls the origin point for positioning and rotation.
Can be a number (same value for x/y) or a PointData object.
- (0,0) is top-left
- (0.5,0.5) is center
- (1,1) is bottom-right
```ts
// Set anchor to center
const text = new Text({
    text: 'Hello Pixi!',
    anchor: 0.5 // Same as { x: 0.5, y: 0.5 }
});
// Set anchor to top-left
const text2 = new Text({
    text: 'Hello Pixi!',
    anchor: { x: 0, y: 0 } // Top-left corner
});
// Set anchor to bottom-right
const text3 = new Text({
    text: 'Hello Pixi!',
    anchor: { x: 1, y: 1 } // Bottom-right corner
});
``` |
| `text` | `TextString` | no | — | The text content to display. Use '\n' for line breaks.
Accepts strings, numbers, or objects with toString() method. |
| `resolution` | `number` | no | — | The resolution/device pixel ratio for rendering.
Higher values result in sharper text at the cost of performance.
Set to null for auto-resolution based on device. |
| `style` | `TEXT_STYLE | TEXT_STYLE_OPTIONS` | no | — | The style configuration for the text.
Can be a TextStyle instance or a configuration object.
Supports canvas text styles, HTML text styles, and bitmap text styles. |
| `roundPixels` | `boolean` | no | — | Whether to round the x/y position to whole pixels.
Enabling can prevent anti-aliasing of text edges but may cause slight position shifting. |

### CanvasTextOptions

Constructor options used for `Text` instances. These options extend TextOptions with
canvas-specific features like texture styling.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `textureStyle` | `TextureStyleOptions | TextureStyle` | no | — | Optional texture style to use for the text texture. This allows fine control over
how the text is rendered to a texture before being displayed.

The texture style can affect:
- Scale mode (nearest/linear)
- Resolution
- Format (rgb/rgba)
- Alpha handling |
| `autoGenerateMipmaps` | `boolean` | no | — | Whether to generate mipmaps for the text texture.
Improves rendering quality when the text is scaled down. |
| `anchor` | `number | PointData` | no | — | The anchor point of the text that controls the origin point for positioning and rotation.
Can be a number (same value for x/y) or a PointData object.
- (0,0) is top-left
- (0.5,0.5) is center
- (1,1) is bottom-right
```ts
// Set anchor to center
const text = new Text({
    text: 'Hello Pixi!',
    anchor: 0.5 // Same as { x: 0.5, y: 0.5 }
});
// Set anchor to top-left
const text2 = new Text({
    text: 'Hello Pixi!',
    anchor: { x: 0, y: 0 } // Top-left corner
});
// Set anchor to bottom-right
const text3 = new Text({
    text: 'Hello Pixi!',
    anchor: { x: 1, y: 1 } // Bottom-right corner
});
``` |
| `text` | `TextString` | no | — | The text content to display. Use '\n' for line breaks.
Accepts strings, numbers, or objects with toString() method. |
| `resolution` | `number` | no | — | The resolution/device pixel ratio for rendering.
Higher values result in sharper text at the cost of performance.
Set to null for auto-resolution based on device. |
| `style` | `TextStyle | TextStyleOptions` | no | — | The style configuration for the text.
Can be a TextStyle instance or a configuration object.
Supports canvas text styles, HTML text styles, and bitmap text styles. |
| `roundPixels` | `boolean` | no | — | Whether to round the x/y position to whole pixels.
Enabling can prevent anti-aliasing of text edges but may cause slight position shifting. |

### TextStyleOptions

Constructor options used for `TextStyle` instances. Defines the visual appearance and layout of text.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `align` | `TextStyleAlign` | no | — | Alignment for multiline text, does not affect single line text |
| `breakWords` | `boolean` | no | — | Whether to allow line breaks within words.
Requires wordWrap to be true. |
| `dropShadow` | `boolean | Partial<TextDropShadow>` | no | — | Drop shadow configuration for the text.
Can be boolean or a TextDropShadow object. |
| `fill` | `FillInput` | no | — | Fill style for the text.
Can be a color, gradient, or pattern. |
| `fontFamily` | `string | string[]` | no | — | Font family or families to use.
Can be single name or array of fallbacks. |
| `fontSize` | `string | number` | no | — | Font size in pixels or as string.

Equivalents are '26px','20pt','160%' or '1.6em') |
| `fontStyle` | `TextStyleFontStyle` | no | — | Font style (normal, italic, oblique). |
| `fontVariant` | `TextStyleFontVariant` | no | — | Font variant (normal, small-caps). |
| `fontWeight` | `TextStyleFontWeight` | no | — | Font weight (normal, bold, bolder, lighter, 100-900). |
| `leading` | `number` | no | — | The height of the line, a number that represents the vertical space that a letter uses. |
| `letterSpacing` | `number` | no | — | The amount of spacing between letters, default is 0 |
| `lineHeight` | `number` | no | — | The line height, a number that represents the vertical space that a letter uses |
| `padding` | `number` | no | — | Padding around the text.

Occasionally some fonts are cropped. Adding some padding will prevent this from
happening by adding padding to all sides of the text. |
| `stroke` | `StrokeInput` | no | — | Stroke style for text outline. |
| `textBaseline` | `TextStyleTextBaseline` | no | — | Vertical alignment baseline. |
| `trim` | `boolean` | no | — | Whether to trim transparent edges.
> [!NOTE] This is an expensive operation and should only be used when necessary. |
| `whiteSpace` | `TextStyleWhiteSpace` | no | — | How to handle whitespace.

It needs wordWrap to be set to true for this to have an effect. |
| `wordWrap` | `boolean` | no | — | Indicates if word wrap should be used |
| `wordWrapWidth` | `number` | no | — | The width at which text will wrap, it needs wordWrap to be set to true |
| `filters` | `readonly Filter[] | Filter[]` | no | — | Array of filters to apply to the text.

These filters will be applied to the text as it is created, resulting in faster rendering for static text
compared to applying the filter directly to the text object (which would be applied at run time). |
| `tagStyles` | `Record<string, TextStyleOptions>` | no | — | Custom styles to apply to specific tags within the text.
Allows for rich text formatting using simple tag markup like `<red>text</red>`.

Tags are only parsed when this property has entries. If `tagStyles` is empty or undefined,
`<` characters in text are treated as literal.

Nested tags are supported via a style stack - inner tags inherit from outer tags
but can override specific properties. |

### ViewContainerOptions

Options for the construction of a ViewContainer.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `autoGarbageCollect` | `boolean` | no | — | If set to true, the resource will be garbage collected automatically when it is not used. |
| `isRenderGroup` | `boolean` | no | — |  |
| `blendMode` | `BLEND_MODES` | no | — | The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export. |
| `tint` | `ColorSource` | no | — | The tint applied to the sprite.

This can be any valid ColorSource. |
| `alpha` | `number` | no | — | The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque). |
| `angle` | `number` | no | — | The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `children` | `ContainerChild[]` | no | — | The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods. |
| `parent` | `Container` | no | — | The display object container that contains this display object.
This represents the parent-child relationship in the display tree. |
| `renderable` | `boolean` | no | — | Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates. |
| `rotation` | `number` | no | — | The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `scale` | `number | PointData` | no | — | The scale factors of this object along the local coordinate axes.

The default scale is (1, 1). |
| `pivot` | `number | PointData` | no | — | The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0). |
| `origin` | `number | PointData` | no | — | The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position. |
| `position` | `PointData` | no | — | The coordinate of the object relative to the local coordinates of the parent. |
| `skew` | `PointData` | no | — | The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape. |
| `visible` | `boolean` | no | — | The visibility of the object. If false the object will not be drawn,
and the transform will not be updated. |
| `x` | `number` | no | — | The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x |
| `y` | `number` | no | — | The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y |
| `boundsArea` | `Rectangle` | no | — | An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set. |
| `accessible` | `boolean` | no | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | no | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | no | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | no | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | no | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | no | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | no | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | no | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |
| `cullArea` | `Rectangle` | no | — | Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations. |
| `cullable` | `boolean` | no | — | Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area. |
| `cullableChildren` | `boolean` | no | — | Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance. |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |
| `onRender` | `(renderer: Renderer) => void` | no | — | This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame |
| `width` | `number` | no | — | The width of the display object, in pixels. |
| `height` | `number` | no | — | The height of the display object, in pixels. |
| `mask` | `Mask` | no | — | The mask to apply, which can be a Container or null.

If null, it clears the existing mask. |
| `setMask` | `(options: Partial<MaskOptionsAndMask>) => void` | no | — |  |
| `filters` | `Filter | readonly Filter[]` | no | — | Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer. |
| `label` | `string` | no | — | The instance label of the object. |
| `zIndex` | `number` | no | — | The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order. |
| `sortableChildren` | `boolean` | no | — | If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position. |
| `cacheAsTexture` | `(val: boolean | CacheAsTextureOptions) => void` | no | — |  |

### SpritesheetOptions

Options for loading a spritesheet from an atlas.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `texture` | `BindableTexture` | yes | — | Reference to Texture |
| `data` | `S` | yes | — | JSON data for the atlas. |
| `resolutionFilename` | `string` | no | — | The filename to consider when determining the resolution of the spritesheet. |
| `cachePrefix` | `string` | no | — | Prefix to add to texture names when adding to global TextureCache,
using this option can be helpful if you have multiple texture atlases
that share texture names and you need to disambiguate them. |

### TransformOptions

Options for the Transform constructor.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `matrix` | `Matrix` | no | — | The matrix to use. |
| `observer` | `{ _onUpdate: (transform: Transform) => void }` | no | — | The observer to use. |

### GifBufferOptions

Options when constructing from buffer

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `fps` | `number` | no | — | FPS to use when the GIF animation doesn't define any delay between frames |
| `compare` | `COMPARE_FUNCTION` | no | — | When provided the sampler will be a comparison sampler with the specified
COMPARE_FUNCTION.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules. |
| `transparent` | `boolean` | no | — | if true, this canvas will be set up to be transparent where possible |
| `format` | `TEXTURE_FORMATS` | no | — | the format that the texture data has |
| `width` | `number` | no | — | the pixel width of this texture source. This is the REAL pure number, not accounting resolution |
| `height` | `number` | no | — | the pixel height of this texture source. This is the REAL pure number, not accounting resolution |
| `label` | `string` | no | — | optional label, can be used for debugging |
| `destroyed` | `boolean` | no | — | Has the style been destroyed? |
| `dynamic` | `boolean` | no | — | Used by RenderTexture.create to allow resizing. Not used by TextureSource itself. |
| `addressModeU` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeV` | `WRAP_MODE` | no | — | specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `addressModeW` | `WRAP_MODE` | no | — | Specifies the {{GPUAddressMode\|address modes}} for the texture width, height, and depth coordinates, respectively. |
| `magFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. |
| `minFilter` | `SCALE_MODE` | no | — | specifies the sampling behavior when the sample footprint is larger than one texel. |
| `mipmapFilter` | `SCALE_MODE` | no | — | specifies behavior for sampling between mipmap levels. |
| `lodMinClamp` | `number` | no | — | specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `lodMaxClamp` | `number` | no | — | Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. |
| `addressMode` | `WRAP_MODE` | no | — | setting this will set wrapModeU,wrapModeV and wrapModeW all at once! |
| `wrapMode` | `WRAP_MODE` | no | — |  |
| `scaleMode` | `SCALE_MODE` | no | — | setting this will set magFilter,minFilter and mipmapFilter all at once! |
| `maxAnisotropy` | `number` | no | — | Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support TextureStyle#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of TextureStyle#maxAnisotropy will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear' |
| `_resourceId` | `number` | no | — |  |
| `autoDensity` | `boolean` | no | — | Should the canvas be resized to preserve its screen width and height regardless
of the resolution of the renderer, this is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas. |
| `mipLevelCount` | `number` | no | — | The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true |
| `autoGenerateMipmaps` | `boolean` | no | — | Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture. |
| `viewDimension` | `TEXTURE_VIEW_DIMENSIONS` | no | — | How this texture is viewed/sampled by shaders.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension`. For example, cube maps are typically stored as a
2D texture with 6 array layers (`dimensions: '2d'`) but viewed as `viewDimension: 'cube'`. |
| `arrayLayerCount` | `number` | no | — | The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers). |
| `alphaMode` | `ALPHA_MODES` | no | — | the alpha mode of the texture |
| `antialias` | `boolean` | no | — | Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture. |
| `autoGarbageCollect` | `boolean` | no | — | If true, the Garbage Collector will unload this texture if it is not used after a period of time |
| `resolution` | `number` | no | — | the resolution of the texture. |
| `dimensions` | `TEXTURE_DIMENSIONS` | no | — | how many dimensions does this texture have? currently v8 only supports 2d |

### GifSpriteOptions

Configuration options for creating a GifSprite instance.

These options control both the visual appearance and playback behavior
of animated GIFs.

| Key | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | `GifSource` | yes | — | Source containing the GIF frame and animation data |
| `autoPlay` | `boolean` | no | — | Whether to start playing right away when created.
If `false`, you must call GifSprite.play to start playback. |
| `scaleMode` | `SCALE_MODE` | no | — | This is not implemented and you should, instead, use `scaleMode`
when loading the Asset as an option for the UnresolvedAsset's `data`. |
| `loop` | `boolean` | no | — | Whether to loop the animation.
If `false`, the animation will stop after the last frame. |
| `animationSpeed` | `number` | no | — | Animation playback speed multiplier.
Higher values speed up the animation, lower values slow it down. |
| `autoUpdate` | `boolean` | no | — | Whether to auto-update animation via shared ticker.
Set to `false` to manage updates yourself. |
| `onComplete` | `() => void` | no | — | Callback when non-looping animation completes.
This is only called if `loop` is set to `false`.
If `loop` is `true`, use GifSprite.onLoop instead. |
| `onLoop` | `() => void` | no | — | Callback when looping animation completes a loop. |
| `onFrameChange` | `(currentFrame: number) => void` | no | — | Callback when animation frame changes.
This is called every time the current frame changes,
allowing you to respond to frame changes in real-time. |
| `fps` | `number` | no | — | Fallback FPS if GIF contains no timing information |
| `anchor` | `number | PointData` | no | — | The anchor point of the sprite (0-1 range).
Controls the origin point for rotation, scaling, and positioning.
Can be a number for uniform anchor or a PointData for separate x/y values. |
| `x` | `number` | no | — | The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x |
| `y` | `number` | no | — | The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y |
| `origin` | `number | PointData` | no | — | The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position. |
| `scale` | `number | PointData` | no | — | The scale factors of this object along the local coordinate axes.

The default scale is (1, 1). |
| `width` | `number` | no | — | The width of the display object, in pixels. |
| `height` | `number` | no | — | The height of the display object, in pixels. |
| `label` | `string` | no | — | The instance label of the object. |
| `renderable` | `boolean` | no | — | Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates. |
| `accessible` | `boolean` | no | — | Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set |
| `accessibleTitle` | `string` | no | — | Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]' |
| `accessibleHint` | `string` | no | — | Sets the aria-label attribute of the shadow div |
| `tabIndex` | `number` | no | — | Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate. |
| `accessibleType` | `keyof HTMLElementTagNameMap` | no | — | Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button. |
| `accessiblePointerEvents` | `PointerEvents` | no | — | Specify the pointer-events the accessible div will use
Defaults to auto. |
| `accessibleText` | `string` | no | — | Sets the text content of the shadow |
| `accessibleChildren` | `boolean` | no | — | Setting to false will prevent any children inside this container to
be accessible. Defaults to true. |
| `cullArea` | `Rectangle` | no | — | Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations. |
| `cullable` | `boolean` | no | — | Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area. |
| `cullableChildren` | `boolean` | no | — | Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance. |
| `onRender` | `(renderer: Renderer) => void` | no | — | This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame |
| `mask` | `Mask` | no | — | The mask to apply, which can be a Container or null.

If null, it clears the existing mask. |
| `setMask` | `(options: Partial<MaskOptionsAndMask>) => void` | no | — |  |
| `filters` | `Filter | readonly Filter[]` | no | — | Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer. |
| `zIndex` | `number` | no | — | The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order. |
| `sortableChildren` | `boolean` | no | — | If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position. |
| `cacheAsTexture` | `(val: boolean | CacheAsTextureOptions) => void` | no | — |  |
| `children` | `ContainerChild[]` | no | — | The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods. |
| `parent` | `Container` | no | — | The display object container that contains this display object.
This represents the parent-child relationship in the display tree. |
| `boundsArea` | `Rectangle` | no | — | An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set. |
| `isRenderGroup` | `boolean` | no | — |  |
| `position` | `PointData` | no | — | The coordinate of the object relative to the local coordinates of the parent. |
| `rotation` | `number` | no | — | The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `angle` | `number` | no | — | The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees. |
| `pivot` | `number | PointData` | no | — | The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0). |
| `skew` | `PointData` | no | — | The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape. |
| `alpha` | `number` | no | — | The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque). |
| `tint` | `ColorSource` | no | — | The tint applied to the sprite.

This can be any valid ColorSource. |
| `blendMode` | `BLEND_MODES` | no | — | The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export. |
| `visible` | `boolean` | no | — | The visibility of the object. If false the object will not be drawn,
and the transform will not be updated. |
| `cursor` | `string & {} | Cursor` | no | — | The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL. |
| `eventMode` | `EventMode` | no | — | Enable interaction events for the Container. Touch, pointer and mouse events are supported. |
| `interactive` | `boolean` | no | — | Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object. |
| `interactiveChildren` | `boolean` | no | — | Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children. |
| `hitArea` | `IHitArea` | no | — | Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds. |
| `onclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action. |
| `onmousedown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object. |
| `onmouseenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble. |
| `onmouseleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble. |
| `onmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object. |
| `onglobalmousemove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onmouseout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onmouseover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object. |
| `onmouseup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object. |
| `onmouseupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown. |
| `onpointercancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost. |
| `onpointerdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed. |
| `onpointerenter` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble. |
| `onpointerleave` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble. |
| `onpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object. |
| `onglobalpointermove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `onpointerout` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object. |
| `onpointerover` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object. |
| `onpointertap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click). |
| `onpointerup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released. |
| `onpointerupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown. |
| `onrightclick` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object. |
| `onrightdown` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object. |
| `onrightup` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object. |
| `onrightupoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown. |
| `ontap` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object. |
| `ontouchcancel` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted. |
| `ontouchend` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen. |
| `ontouchendoutside` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart. |
| `ontouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object. |
| `onglobaltouchmove` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event. |
| `ontouchstart` | `FederatedEventHandler<FederatedPointerEvent>` | no | — | Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen. |
| `onwheel` | `FederatedEventHandler<FederatedWheelEvent>` | no | — | Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object. |
| `autoGarbageCollect` | `boolean` | no | — | If set to true, the resource will be garbage collected automatically when it is not used. |
| `roundPixels` | `boolean` | no | — | Whether or not to round the x/y position to whole pixels.
Useful for crisp pixel art style rendering. |

## Quick Reference

**assets:** `crossOrigin`, `setBasisTranscoderPath`, `setKTXTranscoderPath`, `Assets`, `BackgroundLoader`, `Cache`, `Loader`, `Resolver`, `Spritesheet`, `ProgressCallback`, `AssetsPreferences`, `CacheParser`, `FormatDetectionParser`, `LoaderParserAdvanced`, `LoaderParser`, `LoadFontData`, `LoadSVGConfig`, `PromiseAndParser`, `PreferOrder`, `ResolveURLParser`, `LoadParserName`, `AssetParser`, `ResolvedAsset`, `ResolvedSrc`, `AssetSrc`, `UnresolvedAsset`, `AssetsBundle`, `AssetsManifest`, `SpritesheetFrameData`, `SpritesheetData`, `SpriteSheetJson`, `AssetExtension`, `AssetExtensionAdvanced`, `LoaderParserPriority`, `loadJson`, `loadTxt`, `loadWebFont`, `loadSvg`, `loadTextures`, `loadVideoTextures`, `loadBasis`, `basisTranscoderUrls`, `loadDDS`, `loadKTX`, `loadKTX2`, `ktxTranscoderUrls`, `loadBitmapFont`, `spritesheetAsset`, `WorkerManager`
**environment:** `loadEnvironmentExtensions`, `autoDetectEnvironment`, `Adapter`, `ContextIds`, `PredefinedColorSpace`, `RenderingContext`, `ICanvasRenderingContext2DSettings`, `ICanvasParentNode`, `ICanvasStyle`, `ICanvasRect`, `WebGLContextEventMap`, `ICanvas`, `ICanvasRenderingContext2D`, `ImageLike`, `DOMAdapter`, `BrowserAdapter`, `WebWorkerAdapter`
**maths:** `floatEqual`, `lineIntersection`, `segmentIntersection`, `nextPow2`, `isPow2`, `log2`, `Matrix`, `ObservablePoint`, `Point`, `Circle`, `Ellipse`, `Polygon`, `Rectangle`, `RoundedRectangle`, `Triangle`, `TransformableObject`, `SHAPE_PRIMITIVE`, `Size`, `Observer`, `PointData`, `PointLike`, `ShapePrimitive`, `groupD8`, `PI_2`, `RAD_TO_DEG`, `DEG_TO_RAD`
**utils:** `formatShader`, `isWebGLSupported`, `isWebGPUSupported`, `sayHello`, `ViewableBuffer`, `Transform`, `Pool`, `PoolGroupClass`, `ArrayOr`, `RectangleLike`, `TypeOrBool`, `isMobileResult`, `Path`, `PoolItem`, `PoolItemConstructor`, `PoolConstructor`, `ArrayFixed`, `Dict`, `isMobile`, `DATA_URI`, `path`, `earcut`
**rendering:** `autoDetectRenderer`, `fastCopy`, `CanvasFilterSystem`, `FilterSystem`, `PrepareBase`, `PrepareQueue`, `PrepareSystem`, `PrepareUpload`, `Batch`, `Batcher`, `BatcherPipe`, `BatchGeometry`, `BatchTextureArray`, `DefaultBatcher`, `DefaultShader`, `AlphaMask`, `ColorMask`, `MaskEffectManager`, `ScissorMask`, `StencilMask`, `CanvasContextSystem`, `CanvasLimitsSystem`, `CanvasRenderer`, `CanvasRenderTargetAdaptor`, `CanvasRenderTargetSystem`, `CanvasTextureSystem`, `GlBufferSystem`, `GlContextSystem`, `GlGeometrySystem`, `GlBackBufferSystem`, `GlColorMaskSystem`, `GlEncoderSystem`, `GlLimitsSystem`, `GlStencilSystem`, `GlUboSystem`, `GlRenderTargetSystem`, `GlProgram`, `GlShaderSystem`, `GlUniformGroupSystem`, `GlStateSystem`, `GlTextureSystem`, `WebGLRenderer`, `BindGroupSystem`, `GpuBufferSystem`, `GpuColorMaskSystem`, `GpuDeviceSystem`, `GpuEncoderSystem`, `GpuLimitsSystem`, `GpuStencilSystem`, `GpuUboSystem`, `PipelineSystem`, `GpuRenderTargetSystem`, `BindGroup`, `GpuProgram`, `GpuShaderSystem`, `GpuStateSystem`, `GpuTextureSystem`, `WebGPURenderer`, `BackgroundSystem`, `Buffer`, `BufferResource`, `ExtractSystem`, `GenerateTextureSystem`, `GCSystem`, `Geometry`, `InstructionSet`, `GlobalUniformSystem`, `RenderTarget`, `RenderTargetSystem`, `SchedulerSystem`, `Shader`, `UboSystem`, `UniformGroup`, `HelloSystem`, `State`, `AbstractRenderer`, `CubeTexture`, `RenderableGCSystem`, `RenderTexture`, `BufferImageSource`, `CanvasSource`, `CompressedSource`, `CubeTextureSource`, `ExternalSource`, `ImageSource`, `TextureSource`, `VideoSource`, `Texture`, `TextureGCSystem`, `TextureMatrix`, `TexturePoolClass`, `TextureStyle`, `ViewSystem`, `Bounds`, `RenderGroup`, `CanvasGraphicsContextSystem`, `GraphicsContextSystem`, `HTMLTextSystem`, `CanvasRendererTextSystem`, `AbstractTextSystem`, `CanvasTextSystem`, `MaskChannel`, `PrepareSourceItem`, `PrepareQueueItem`, `BatchAction`, `BatchableElement`, `BatchableQuadElement`, `BatchableMeshElement`, `DefaultBatchElements`, `DefaultBatchableQuadElement`, `DefaultBatchableMeshElement`, `MaskEffect`, `RendererPreference`, `CanvasSystems`, `CLEAR_OR_BOOL`, `GlRenderingContext`, `WEBGL_compressed_texture_pvrtc`, `WEBGL_compressed_texture_etc`, `WEBGL_compressed_texture_etc1`, `WEBGL_compressed_texture_atc`, `EXT_texture_compression_bptc`, `EXT_texture_compression_rgtc`, `WebGLExtensions`, `PRECISION`, `ExtractedAttributeData`, `WebGLSystems`, `WebGLOptions`, `GPU`, `BindResource`, `ProgramPipelineLayoutDescription`, `ProgramLayout`, `ProgramSource`, `GPUProgramData`, `StructsAndGroups`, `StencilState`, `WebGPUSystems`, `WebGPUOptions`, `TypedArray`, `GCData`, `GCable`, `Topology`, `VertexFormat`, `IndexBufferArray`, `Attribute`, `AttributeOption`, `GeometryDescriptor`, `Instruction`, `InstructionPipe`, `RenderPipe`, `BatchPipe`, `PipeConstructor`, `GlobalUniformGroup`, `GlobalUniformData`, `RenderSurface`, `ShaderGroups`, `GlShaderWith`, `GpuShaderWith`, `ShaderWithGroupsDescriptor`, `ShaderWith`, `ShaderWithGroups`, `ShaderWithResources`, `IShaderWithResources`, `ShaderDescriptor`, `ShaderFromGroups`, `ShaderFromResources`, `ShaderSystem`, `UniformData`, `CULL_MODES`, `System`, `SystemConstructor`, `ALPHA_MODES`, `TEXTURE_FORMATS`, `TEXTURE_DIMENSIONS`, `TEXTURE_VIEW_DIMENSIONS`, `WRAP_MODE`, `SCALE_MODE`, `COMPARE_FUNCTION`, `GetPixelsOutput`, `CubeTextureFaces`, `ImageResource`, `VideoResource`, `TextureBorders`, `UVs`, `BindableTexture`, `TextureSourceLike`, `Renderer`, `RenderPipes`, `GpuPowerPreference`, `GPUDataOwner`, `BoundsData`, `Effect`, `EffectConstructor`, `BUFFER_TYPE`, `CLEAR`, `GL_FORMATS`, `GL_TARGETS`, `GL_WRAP_MODES`, `BufferUsage`, `STENCIL_MODES`, `DRAW_MODES`, `BLEND_TO_NPM`, `WRAP_MODES`, `SCALE_MODES`, `TexturePool`
**scene:** `graphicsContextToSvg`, `buildGeometryFromPath`, `Culler`, `DOMContainer`, `Container`, `RenderContainer`, `FillGradient`, `FillPattern`, `Graphics`, `GraphicsContext`, `GraphicsPath`, `ShapePath`, `RenderLayer`, `PerspectiveMesh`, `PerspectivePlaneGeometry`, `MeshPlane`, `PlaneGeometry`, `MeshRope`, `MeshSimple`, `RopeGeometry`, `Mesh`, `MeshGeometry`, `Particle`, `ParticleContainer`, `AnimatedSprite`, `NineSliceGeometry`, `NineSliceSprite`, `NineSlicePlane`, `TilingSprite`, `Sprite`, `ViewContainer`, `CullingMixinConstructor`, `View`, `CacheAsTextureMixin`, `ChildrenHelperMixin`, `Mask`, `MaskOptionsAndMask`, `EffectsMixin`, `FindMixin`, `GetFastGlobalBoundsMixin`, `GetGlobalMixin`, `MeasureMixin`, `OnRenderMixin`, `SortMixin`, `ToLocalGlobalMixin`, `ContainerChild`, `ContainerEvents`, `RenderFunction`, `LineCap`, `LineJoin`, `GradientType`, `PatternRepetition`, `TextureSpace`, `FillStyle`, `StrokeAttributes`, `StrokeStyle`, `FillInput`, `StrokeInput`, `ConvertedFillStyle`, `ConvertedStrokeStyle`, `FillStyleInputs`, `BatchMode`, `PathInstruction`, `RoundedPoint`, `ShapePrimitiveWithHoles`, `TextureShader`, `IParticle`, `ParticleProperties`, `AnimatedSpriteFrames`, `FrameObject`, `styleAttributes`, `shapeBuilders`
**accessibility:** `AccessibilitySystem`, `PointerEvents`
**filters:** `ColorBlend`, `ColorBurnBlend`, `ColorDodgeBlend`, `DarkenBlend`, `DifferenceBlend`, `DivideBlend`, `ExclusionBlend`, `HardLightBlend`, `HardMixBlend`, `LightenBlend`, `LinearBurnBlend`, `LinearDodgeBlend`, `LinearLightBlend`, `LuminosityBlend`, `NegationBlend`, `OverlayBlend`, `PinLightBlend`, `SaturationBlend`, `SoftLightBlend`, `SubtractBlend`, `VividLightBlend`, `AlphaFilter`, `BlurFilter`, `BlurFilterPass`, `ColorMatrixFilter`, `DisplacementFilter`, `NoiseFilter`, `Filter`, `CanvasFilterCapable`, `ColorMatrix`, `FilterWithShader`, `FilterAntialias`, `BLEND_MODES`
**app:** `Application`, `ResizePlugin`, `TickerPlugin`, `CullerPlugin`, `ApplicationPlugin`
**color:** `Color`, `RgbaArray`, `ColorSource`
**events:** `EventBoundary`, `EventSystem`, `EventsTicker`, `FederatedEvent`, `FederatedMouseEvent`, `FederatedPointerEvent`, `FederatedWheelEvent`, `EventSystemFeatures`, `PixiTouch`, `FederatedEventMap`, `GlobalFederatedEventMap`, `AllFederatedEventMap`, `FederatedEventEmitterTypes`, `Cursor`, `IHitArea`, `FederatedEventHandler`, `EventMode`, `IFederatedContainer`
**text:** `AbstractBitmapFont`, `BitmapFont`, `BitmapFontManager`, `BitmapText`, `HTMLText`, `HTMLTextStyle`, `AbstractSplitText`, `SplitBitmapText`, `SplitText`, `AbstractText`, `CanvasTextMetrics`, `Text`, `TextStyle`, `CharData`, `RawCharData`, `BitmapFontData`, `TextSplitOutput`, `TextString`, `AnyTextStyle`, `FontMetrics`, `TextStyleAlign`, `TextStyleFill`, `TextStyleFontStyle`, `TextStyleFontVariant`, `TextStyleFontWeight`, `TextStyleLineJoin`, `TextStyleTextBaseline`, `TextStyleWhiteSpace`, `TextDropShadow`
**ticker:** `Ticker`, `TickerCallback`, `UPDATE_PRIORITY`
**extensions:** `extensions`, `ExtensionFormatLoose`, `ExtensionMetadata`, `ExtensionType`
**gif:** `GifSource`, `GifSprite`, `GifFrame`, `GifAsset`

## Documentation

- **Architecture** — # Architecture

PixiJS is composed of several major components that work together to render 2D content to the screen.
- **Scene Graph** — # Scene Graph

The scene graph is the tree of objects that PixiJS draws every frame.
- **Render Loop** — # Render Loop

At the core of PixiJS lies its **render loop**, a repeating cycle that updates and redraws your scene every frame.
- **Render Groups** — # Render Groups

A RenderGroup is a Container that PixiJS treats as a self-contained rendering unit.
- **Render Layers** — # Render Layers

RenderLayers let you control **draw order** independently of the **scene graph hierarchy**.
- **Environments** — # Using PixiJS in Different Environments

PixiJS runs in browsers by default with zero configuration.
- **Garbage Collection** — # Managing Garbage Collection in PixiJS

PixiJS objects like textures and meshes consume GPU memory that JavaScript's garbage collector can't reclaim automatically.
- **Performance Tips** — # Performance Tips

This page collects practical advice for improving frame rate and reducing memory usage in PixiJS applications.
- **Overview** — # Accessibility

Canvas elements are invisible to screen readers by default.
- **Overview** — # Application

The  Application class is the starting point for most PixiJS projects.
- **Overview** — # Assets

The  Assets singleton is how you load images, spritesheets, fonts, and other resources in PixiJS.
- **Overview** — # Color

The `Color` class provides a unified way to work with colors in PixiJS.
- **Overview** — # Environment

Most PixiJS users run in a browser and can ignore this page.
- **Overview** — # Events

PixiJS provides a DOM-like federated event model for mouse, touch, and pointer input.
- **Overview** — # Extensions

PixiJS is built as a set of swappable parts called **extensions**.
- **Overview** — # Filters

Filters apply post-processing effects to any display object and its children.
- **Overview** — # Math

PixiJS provides math utilities for 2D transformations, geometry, and shapes.
- **Overview** — # Rendering

PixiJS renderers draw your scene to a canvas using **WebGL/WebGL2**, **WebGPU**, or the **Canvas 2D** API.
- **Overview** — # Scene objects

Everything visible in a PixiJS application is a scene object arranged in a **scene graph**: a tree of containers, sprites, text, graphics, and other display objects.
- **Overview** — # GIF

The GIF module adds animated GIF support to PixiJS.
- **Overview** — # Ticker

The  Ticker class executes callbacks on every animation frame.
- **Overview** — # Utils

PixiJS ships helper functions for browser detection, device checks, data manipulation, and path handling.
- **v8 Migration Guide** — # v8 Migration Guide

Welcome to the PixiJS v8 Migration Guide!
- **v7 Migration Guide** — # v7 Migration Guide

First and foremost, PixiJS v7 is a modernization release that reflects changes in the ecosystem since PixiJS was first published over six years ago.
- **v6 Migration Guide** — # v6 Migration Guide

[PixiJS 6](https://github.
- **v5 Migration Guide** — # v5 Migration Guide

This document is useful for developers who are attempting to **upgrading from v4 to v5**.

## Links

- [Repository](https://github.com/pixijs/pixijs)
- Author: PixiJS Team