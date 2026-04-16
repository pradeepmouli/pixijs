# Classes

## rendering

### `BindGroupSystem`
This manages the WebGPU bind groups. this is how data is bound to a shader when rendering
*implements `System`*
```ts
constructor(renderer: WebGPURenderer): BindGroupSystem
```
**Methods:**
- `getBindGroup(bindGroup: BindGroup, program: GpuProgram, groupIndex: number): GPUBindGroup`
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
