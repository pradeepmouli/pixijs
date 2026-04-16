# Classes

## rendering

### `GlShaderSystem`
System plugin to the renderer to manage the shaders for WebGL.
```ts
constructor(renderer: WebGLRenderer): GlShaderSystem
```
**Methods:**
- `bind(shader: Shader, skipSync?: boolean): void` — Changes the current shader to the one given in parameter.
- `updateUniformGroup(uniformGroup: UniformGroup): void` — Updates the uniform group.
- `bindUniformBlock(uniformGroup: UniformGroup<any> | BufferResource, name: string, index: number): void` — Binds a uniform block to the shader.
- `destroy(): void`
- `resetState(): void`
