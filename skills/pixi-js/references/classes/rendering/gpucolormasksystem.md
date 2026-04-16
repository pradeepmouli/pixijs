# Classes

## rendering

### `GpuColorMaskSystem`
The system that handles color masking for the GPU.
*implements `System`*
```ts
constructor(renderer: WebGPURenderer): GpuColorMaskSystem
```
**Methods:**
- `setMask(colorMask: number): void`
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
