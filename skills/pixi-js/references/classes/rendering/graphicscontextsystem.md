# Classes

## rendering

### `GraphicsContextSystem`
A system that manages the rendering of GraphicsContexts.
*implements `System<GraphicsContextSystemOptions>`*
```ts
constructor(renderer: Renderer): GraphicsContextSystem
```
**Properties:**
- `defaultOptions: GraphicsContextSystemOptions` — The default options for the GraphicsContextSystem.
**Methods:**
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
