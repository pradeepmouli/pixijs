# Classes

## rendering

### `GpuStencilSystem`
This manages the stencil buffer. Used primarily for masking
*implements `System`*
```ts
constructor(renderer: WebGPURenderer): GpuStencilSystem
```
**Methods:**
- `setStencilMode(stencilMode: STENCIL_MODES, stencilReference: number): void`
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
