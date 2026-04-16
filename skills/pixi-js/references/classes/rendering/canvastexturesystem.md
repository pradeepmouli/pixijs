# Classes

## rendering

### `CanvasTextureSystem`
Texture helper system for CanvasRenderer.
*implements `System`*
```ts
constructor(renderer: CanvasRenderer): CanvasTextureSystem
```
**Methods:**
- `init(): void` — Initializes the system (no-op for canvas).
- `initSource(_source: TextureSource): void` — Initializes a texture source (no-op for canvas).
- `generateCanvas(texture: Texture): ICanvas` — Creates a canvas containing the texture's frame.
- `getPixels(texture: Texture): GetPixelsOutput` — Reads pixel data from a texture.
- `destroy(): void` — Destroys the system (no-op for canvas).
