# Classes

## rendering

### `GlobalUniformSystem`
System plugin to the renderer to manage global uniforms for the renderer.
*implements `System`*
```ts
constructor(renderer: GlobalUniformRenderer): GlobalUniformSystem
```
**Methods:**
- `reset(): void`
- `start(options: GlobalUniformOptions): void`
- `bind(__namedParameters: GlobalUniformOptions): void`
- `push(options: GlobalUniformOptions): void`
- `pop(): void`
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
