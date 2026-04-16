# Classes

## rendering

### `WebGLRenderer`
The WebGL PixiJS Renderer. This renderer allows you to use the most common graphics API, WebGL (and WebGL2).

```ts
// Create a new renderer
const renderer = new WebGLRenderer();
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
// Create a new renderer
const renderer = await rendering.autoDetectRenderer({
   preference:'webgl',
});
```

The renderer is composed of systems that manage specific tasks. The following systems are added by default
whenever you create a WebGL renderer:

| WebGL Core Systems                          | Systems that are specific to the WebGL renderer                               |
| ------------------------------------------- | ----------------------------------------------------------------------------- |
| GlUboSystem               | This manages WebGL2 uniform buffer objects feature for shaders                |
| GlBackBufferSystem        | manages the back buffer, used so that we can pixi can pixels from the screen  |
| GlContextSystem           | This manages the WebGL context and its extensions                             |
| GlBufferSystem            | This manages buffers and their GPU resources, keeps everything in sync        |
| GlTextureSystem           | This manages textures and their GPU resources, keeps everything in sync       |
| GlRenderTargetSystem      | This manages what we render too. For example the screen, or another texture   |
| GlGeometrySystem          | This manages geometry, used for drawing meshes via the GPU                    |
| GlUniformGroupSystem      | This manages uniform groups. Syncing shader properties with the GPU           |
| GlShaderSystem            | This manages shaders, programs that run on the GPU to output lovely pixels    |
| GlEncoderSystem           | This manages encoders, a WebGPU Paradigm, use it to draw a mesh + shader      |
| GlStateSystem             | This manages the state of the WebGL context. eg the various flags that can be set blend modes / depthTesting etc |
| GlStencilSystem           | This manages the stencil buffer. Used primarily for masking                   |
| GlColorMaskSystem         | This manages the color mask. Used for color masking                           |

The breadth of the API surface provided by the renderer is contained within these systems.
*extends `AbstractRenderer<WebGLPipes, WebGLOptions, T>`*
*implements `WebGLSystems`*
```ts
constructor<T>(): WebGLRenderer<T>
```
**Properties:**
- `defaultOptions: { resolution: number; failIfMajorPerformanceCaveat: boolean; roundPixels: boolean }` — The default options for the renderer.
- `gl: WebGL2RenderingContext`
- `name: string` — The name of the renderer.
- `tick: number` — The current tick of the renderer.
- `view: ViewSystem` — The view system manages the main canvas that is attached to the DOM
- `background: BackgroundSystem` — The background system manages the background color and alpha of the main view.
- `textureGenerator: GenerateTextureSystem` — System that manages the generation of textures from the renderer
- `buffer: GlBufferSystem` — BufferSystem instance.
- `gc: GCSystem`
- `texture: GlTextureSystem` — TextureSystem instance.
- `geometry: GlGeometrySystem` — GeometrySystem instance.
- `renderTarget: GlRenderTargetSystem` — RenderTargetSystem instance.
- `shader: GlShaderSystem` — ShaderSystem instance.
- `renderGroup: RenderGroupSystem`
- `colorMask: GlColorMaskSystem` — ColorMaskSystem instance.
- `scheduler: SchedulerSystem`
- `globalUniforms: GlobalUniformSystem`
- `initHook: RendererInitHook`
- `renderableGC: RenderableGCSystem`
- `hello: HelloSystem`
- `textureGC: TextureGCSystem`
- `extract: ExtractSystem`
- `ubo: GlUboSystem` — UboSystem instance.
- `limits: GlLimitsSystem`
- `uniformGroup: GlUniformGroupSystem` — UniformGroupSystem instance.
- `encoder: GlEncoderSystem` — EncoderSystem instance.
- `stencil: GlStencilSystem` — StencilSystem instance.
- `state: GlStateSystem` — StateSystem instance.
- `context: GlContextSystem` — ContextSystem instance.
- `backBuffer: GlBackBufferSystem` — BackBufferSystem instance.
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
