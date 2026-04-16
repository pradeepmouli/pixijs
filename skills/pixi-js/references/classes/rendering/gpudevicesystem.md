# Classes

## rendering

### `GpuDeviceSystem`
System plugin to the renderer to manage the context.
*implements `System<GpuContextOptions>`*
```ts
constructor(renderer: WebGPURenderer): GpuDeviceSystem
```
**Properties:**
- `defaultOptions: GpuContextOptions` — The default options for the GpuDeviceSystem.
- `gpu: GPU` — The GPU device
**Methods:**
- `init(options: GpuContextOptions): Promise<void>`
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
