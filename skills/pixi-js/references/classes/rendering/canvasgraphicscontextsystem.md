# Classes

## rendering

### `CanvasGraphicsContextSystem`
A system that manages the rendering of GraphicsContexts for Canvas2D.
*implements `System<GraphicsContextSystemOptions>`*
```ts
constructor(renderer: Renderer): CanvasGraphicsContextSystem
```
**Properties:**
- `defaultOptions: GraphicsContextSystemOptions` — The default options for the GraphicsContextSystem.
**Methods:**
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
