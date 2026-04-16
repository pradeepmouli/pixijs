# Classes

## rendering

### `GlColorMaskSystem`
The system that handles color masking for the WebGL.
*implements `System`*
```ts
constructor(renderer: WebGLRenderer): GlColorMaskSystem
```
**Properties:**
- `destroy: () => void` (optional) — Generic destroy methods to be overridden by the subclass
**Methods:**
- `setMask(colorMask: number): void`
