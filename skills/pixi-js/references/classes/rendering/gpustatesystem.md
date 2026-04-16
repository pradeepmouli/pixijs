# Classes

## rendering

### `GpuStateSystem`
System plugin to the renderer to manage WebGL state machines.
*implements `System`*
```ts
constructor(): GpuStateSystem
```
**Properties:**
- `stateId: number` — State ID
- `polygonOffset: number` — Polygon offset
- `blendMode: BLEND_MODES` — Blend mode
**Methods:**
- `getColorTargets(state: State, count: number): GPUColorTargetState[]` — Gets the blend mode data for the current state
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
