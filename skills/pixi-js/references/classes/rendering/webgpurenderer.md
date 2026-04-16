# Classes

## rendering

### `WebGPURenderer`
The WebGPU PixiJS Renderer. This renderer allows you to use the next-generation graphics API, WebGPU.
```ts
// Create a new renderer
const renderer = new WebGPURenderer();
await renderer.init();

// Add the renderer to the stage
document.body.appendChild(renderer.canvas);

// Create a new stage
const stage = new Container();

// Render the stage
renderer.render(stage);
```

You can use autoDetectRenderer to create a renderer that will automatically detect the best
renderer for the environment.
```ts
import { autoDetectRenderer } from 'pixi.js';
// Create a new renderer
const renderer = await autoDetectRenderer();
```

The renderer is composed of systems that manage specific tasks. The following systems are added by default
whenever you create a WebGPU renderer:

| WebGPU Core Systems                      | Systems that are specific to the WebGL renderer                               |
| ---------------------------------------- | ----------------------------------------------------------------------------- |
| GpuUboSystem           | This manages WebGPU uniform buffer objects feature for shaders                |
| GpuEncoderSystem       | This manages the WebGPU command encoder                                       |
| GpuDeviceSystem        | This manages the WebGPU Device and its extensions                             |
| GpuBufferSystem        | This manages buffers and their GPU resources, keeps everything in sync        |
| GpuTextureSystem       | This manages textures and their GPU resources, keeps everything in sync       |
| GpuRenderTargetSystem  | This manages what we render too. For example the screen, or another texture   |
| GpuShaderSystem        | This manages shaders, programs that run on the GPU to output lovely pixels    |
| GpuStateSystem         | This manages the state of the WebGPU Pipelines. eg the various flags that can be set blend modes / depthTesting etc |
| PipelineSystem         | This manages the WebGPU pipelines, used for rendering                         |
| GpuColorMaskSystem     | This manages the color mask. Used for color masking                           |
| GpuStencilSystem       | This manages the stencil buffer. Used primarily for masking                   |
| BindGroupSystem        | This manages the WebGPU bind groups. this is how data is bound to a shader when rendering |

The breadth of the API surface provided by the renderer is contained within these systems.
*extends `AbstractRenderer<WebGPUPipes, WebGPUOptions, T>`*
*implements `WebGPUSystems`*
```ts
constructor<T>(): WebGPURenderer<T>
```
**Properties:**
- `defaultOptions: { resolution: number; failIfMajorPerformanceCaveat: boolean; roundPixels: boolean }` — The default options for the renderer.
- `gpu: GPU` — The WebGPU Device.
- `name: string` — The name of the renderer.
- `tick: number` — The current tick of the renderer.
- `view: ViewSystem` — The view system manages the main canvas that is attached to the DOM
- `background: BackgroundSystem` — The background system manages the background color and alpha of the main view.
- `textureGenerator: GenerateTextureSystem` — System that manages the generation of textures from the renderer
- `buffer: GpuBufferSystem` — BufferSystem instance.
- `gc: GCSystem`
- `texture: GpuTextureSystem` — TextureSystem instance.
- `renderTarget: GpuRenderTargetSystem` — RenderTargetSystem instance.
- `shader: GpuShaderSystem` — ShaderSystem instance.
- `renderGroup: RenderGroupSystem`
- `colorMask: GpuColorMaskSystem` — ColorMaskSystem instance.
- `scheduler: SchedulerSystem`
- `globalUniforms: GlobalUniformSystem`
- `initHook: RendererInitHook`
- `renderableGC: RenderableGCSystem`
- `hello: HelloSystem`
- `textureGC: TextureGCSystem`
- `extract: ExtractSystem`
- `ubo: GpuUboSystem` — UboSystem instance.
- `limits: GpuLimitsSystem`
- `encoder: GpuEncoderSystem` — EncoderSystem instance.
- `stencil: GpuStencilSystem` — StencilSystem instance.
- `state: GpuStateSystem` — StateSystem instance.
- `bindGroup: BindGroupSystem` — BindGroupSystem instance.
- `pipeline: PipelineSystem` — PipelineSystem instance.
- `device: GpuDeviceSystem` — DeviceSystem instance.
- `accessibility: AccessibilitySystem`
- `events: EventSystem`
- `filter: FilterSystem`
- `prepare: PrepareBase` — The prepare mixin provides methods to prepare display objects for rendering.
It is used to ensure that textures and other resources are ready before rendering.
- `canvasText: AbstractTextSystem`
- `htmlText: HTMLTextSystem`
- `graphicsContext: GraphicsContextSystem`
**Methods:**
- `init(options: Partial<OPTIONS>): Promise<void>` — Initialize the renderer.
- `render(options: Container<ContainerChild> | RenderOptions): void` — Renders the object to its view.
- `resize(desiredScreenWidth: number, desiredScreenHeight: number, resolution?: number): void` — Resizes the WebGL view to the specified width and height.
- `clear(options: ClearOptions): void` — Clears the render target.
- `destroy(options: RendererDestroyOptions): void`
- `generateTexture(options: Container<ContainerChild> | GenerateTextureOptions): Texture` — Generate a texture from a container.
- `resetState(): void` — Resets the rendering state of the renderer.
This is useful when you want to use the WebGL context directly and need to ensure PixiJS's internal state
stays synchronized. When modifying the WebGL context state externally, calling this method before the next Pixi
render will reset all internal caches and ensure it executes correctly.

This is particularly useful when combining PixiJS with other rendering engines like Three.js:
```js
// Reset Three.js state
threeRenderer.resetState();

// Render a Three.js scene
threeRenderer.render(threeScene, threeCamera);

// Reset PixiJS state since Three.js modified the WebGL context
pixiRenderer.resetState();

// Now render Pixi content
pixiRenderer.render(pixiScene);
```
