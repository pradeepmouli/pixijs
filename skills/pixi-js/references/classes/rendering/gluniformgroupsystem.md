# Classes

## rendering

### `GlUniformGroupSystem`
System plugin to the renderer to manage shaders.
*implements `System`*
```ts
constructor(renderer: WebGLRenderer): GlUniformGroupSystem
```
**Methods:**
- `updateUniformGroup(group: UniformGroup, program: GlProgram, syncData: { textureCount: number }): void` — Uploads the uniforms values to the currently bound shader.
- `destroy(): void` — Destroys this System and removes all its textures.
