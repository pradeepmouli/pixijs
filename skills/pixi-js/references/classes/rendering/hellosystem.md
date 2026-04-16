# Classes

## rendering

### `HelloSystem`
A simple system responsible for initiating the renderer.
*implements `System<HelloSystemOptions>`*
```ts
constructor(renderer: Renderer): HelloSystem
```
**Properties:**
- `defaultOptions: HelloSystemOptions` — The default options for the system.
**Methods:**
- `init(options: HelloSystemOptions): void` — It all starts here! This initiates every system, passing in the options for any system by name.
