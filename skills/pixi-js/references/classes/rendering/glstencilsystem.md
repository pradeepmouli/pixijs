# Classes

## rendering

### `GlStencilSystem`
This manages the stencil buffer. Used primarily for masking
*implements `System`*
```ts
constructor(renderer: WebGLRenderer): GlStencilSystem
```
**Properties:**
- `destroy: () => void` (optional) — Generic destroy methods to be overridden by the subclass
**Methods:**
- `resetState(): void`
- `setStencilMode(stencilMode: STENCIL_MODES, stencilReference: number): void`
