# Classes

## rendering

### `GlEncoderSystem`
The system that handles encoding commands for the WebGL.
*implements `System`*
```ts
constructor(renderer: WebGLRenderer): GlEncoderSystem
```
**Properties:**
- `commandFinished: Promise<void>`
**Methods:**
- `setGeometry(geometry: Geometry, shader?: Shader): void`
- `finishRenderPass(): void`
- `draw(options: { geometry: Geometry; shader: Shader; state?: State; topology?: Topology; size?: number; start?: number; instanceCount?: number; skipSync?: boolean }): void`
- `destroy(): void` — Generic destroy methods to be overridden by the subclass
