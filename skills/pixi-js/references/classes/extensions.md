# Classes

## extensions

### `extensions`
Global registration system for all PixiJS extensions. Provides a centralized way to add, remove,
and manage functionality across the engine.

Features:
- Register custom extensions and plugins
- Handle multiple extension types
- Priority-based ordering
**Methods:**
- `remove(extensions: any[]): { remove: any; add: any; mixin: any }` — Remove extensions from PixiJS.
- `add(extensions: any[]): { remove: any; add: any; mixin: any }` — Register new extensions with PixiJS. Extensions can be registered in multiple formats:
- As a class with a static `extension` property
- As an extension format object
- As multiple extensions passed as separate arguments
- `mixin(Target: any, sources: unknown[]): void` — Mixin the source object(s) properties into the target class's prototype.
Copies all property descriptors from source objects to the target's prototype.
```ts
import { extensions, ExtensionType } from 'pixi.js';

// Register a simple object extension
extensions.add({
  extension: {
      type: ExtensionType.LoadParser,
      name: 'my-loader',
      priority: 100, // Optional priority for ordering
  },
  // add load parser functions
});

// Register a class-based extension
class MyRendererPlugin {
    static extension = {
        type: [ExtensionType.WebGLSystem, ExtensionType.WebGPUSystem],
        name: 'myRendererPlugin'
    };

   // add renderer plugin methods
}
extensions.add(MyRendererPlugin);

// Remove extensions
extensions.remove(MyRendererPlugin);
```
