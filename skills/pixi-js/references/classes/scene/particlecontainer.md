# Classes

## scene

### `ParticleContainer`
The ParticleContainer class is a highly optimized container that can render 1000s or particles at great speed.

A ParticleContainer is specialized in that it can only contain and render particles. Particles are
lightweight objects that use minimal memory, which helps boost performance.

It can render particles EXTREMELY fast!

The tradeoff of using a ParticleContainer is that most advanced functionality is unavailable. Particles are simple
and cannot have children, filters, masks, etc. They possess only the basic properties: position, scale, rotation,
and color.

All particles must share the same texture source (using something like a sprite sheet works well here).

When creating a ParticleContainer, a developer can specify which of these properties are static and which are dynamic.
- Static properties are only updated when you add or remove a child, or when the `update` function is called.
- Dynamic properties are updated every frame.

It is up to the developer to specify which properties are static and which are dynamic. Generally, the more static
properties you have (i.e., those that do not change per frame), the faster the rendering.

If the developer modifies the children order or any static properties of the particle, they must call the `update` method.

By default, only the `position` property is set to dynamic, which makes rendering very fast!

Developers can also provide a custom shader to the particle container, allowing them to render particles in a custom way.

To help with performance, the particle containers bounds are not calculated.
It's up to the developer to set the boundsArea property.

It's extremely easy to use. Below is an example of rendering thousands of sprites at lightning speed.

--------- EXPERIMENTAL ---------

This is a new API, things may change and it may not work as expected.
We want to hear your feedback as we go!

--------------------------------
*extends `ParticleContainer`*
*implements `Instruction`*
```ts
constructor<T>(options: ParticleContainerOptions<T>): ParticleContainer<T>
```
*Inherits 76 properties from `ParticleContainer` — see [`ParticleContainer`](../particlecontainer.md)*
**Methods:**
- `mixin(source: Dict<any>): void` — Mixes all enumerable properties and methods from a source object to Container.
- `addParticle(children: T[]): T` — Adds one or more particles to the container. The particles will be rendered using the container's shared texture
and properties. When adding multiple particles, they must all share the same base texture.
- `removeParticle(children: T[]): T` — Removes one or more particles from the container. The particles must already be children
of this container to be removed.
- `update(): void` — Updates the particle container's internal state. Call this method after manually modifying
the particleChildren array or when changing static properties of particles.
- `destroy(options: DestroyOptions): void` — Destroys this sprite renderable and optionally its texture.
- `removeParticles(beginIndex?: number, endIndex?: number): T[]` — Removes all particles from this container that are within the begin and end indexes.
- `removeParticleAt<U>(index: number): U` — Removes a particle from the specified index position.
- `addParticleAt<U>(child: U, index: number): U` — Adds a particle to the container at a specified index. If the index is out of bounds an error will be thrown.
If the particle is already in this container, it will be moved to the specified index.
- `containsPoint(point: PointData): boolean` — Checks if the object contains the given point in local coordinates.
Uses the view's bounds for hit testing.
- `unload(): void` — Unloads the GPU data from the view.
- `enableRenderGroup(): void` — Calling this enables a render group for this container.
This means it will be rendered as a separate set of instructions.
The transform of the container will also be handled on the GPU rather than the CPU.
- `disableRenderGroup(): void` — This will disable the render group for this container.
- `getSize(out?: Size): Size` — Retrieves the size of the container as a [Size]Size object.

This is faster than get the width and height separately.
- `setSize(value: number | Optional<Size, "height">, height?: number): void` — Sets the size of the container to the specified width and height.
This is more efficient than setting width and height separately as it only recalculates bounds once.
- `updateTransform(opts: Partial<UpdateTransformOptions>): this` — Updates the transform properties of the container.
Allows partial updates of transform properties for optimized manipulation.
- `setFromMatrix(matrix: Matrix): void` — Updates the local transform properties by decomposing the given matrix.
Extracts position, scale, rotation, and skew from a transformation matrix.
- `updateLocalTransform(): void` — Updates the local transform.
- `addEventListener<K>(type: K, listener: (e: AllFederatedEventMap[K]) => any, options?: AddListenerOptions): void` — Unlike `on` or `addListener` which are methods from EventEmitter, `addEventListener`
seeks to be compatible with the DOM's `addEventListener` with support for options.
- `removeEventListener<K>(type: K, listener: (e: AllFederatedEventMap[K]) => any, options?: RemoveListenerOptions): void` — Unlike `off` or `removeListener` which are methods from EventEmitter, `removeEventListener`
seeks to be compatible with the DOM's `removeEventListener` with support for options.
- `dispatchEvent(e: FederatedEvent): boolean` — Dispatch the event on this Container using the event's EventBoundary.

The target of the event is set to `this` and the `defaultPrevented` flag is cleared before dispatch.
- `removeFromParent(): void` — Remove the Container from its parent Container. If the Container has no parent, do nothing.
- `replaceChild<U, T>(oldChild: U, newChild: T): void` — Replace a child in the container with a new child. Copying the local transform from the old child to the new one.
- `getGlobalPosition(point?: Point, skipUpdate?: boolean): Point` — Returns the global position of the container, taking into account the container hierarchy.
- `toGlobal<P>(position: PointData, point?: P, skipUpdate?: boolean): P` — Calculates the global position of a point relative to this container.
Takes into account the container hierarchy and transforms.
- `toLocal<P>(position: PointData, from?: Container, point?: P, skipUpdate?: boolean): P` — Calculates the local position of the container relative to another point.
Converts coordinates from any coordinate space to this container's local coordinate space.
- `getLocalBounds(): Bounds` — Retrieves the local bounds of the container as a Bounds object.
Uses cached values when possible for better performance.
- `getBounds(skipUpdate?: boolean, bounds?: Bounds): Bounds` — Calculates and returns the (world) bounds of the display object as a Rectangle.
Takes into account transforms and child bounds.
- `setMask(options: Partial<MaskOptionsAndMask>): void` — Used to set mask and control mask options on a display object.
Allows for more detailed control over masking behavior compared to the mask property.
- `getChildByName(label: string | RegExp, deep?: boolean): Container<ContainerChild>`
- `getChildByLabel(label: string | RegExp, deep?: boolean): Container<ContainerChild>` — Returns the first child in the container with the specified label.
Recursive searches are done in a pre-order traversal.
- `getChildrenByLabel(label: string | RegExp, deep?: boolean, out?: Container<ContainerChild>[]): Container<ContainerChild>[]` — Returns all children in the container with the specified label.
Recursive searches are done in a pre-order traversal.
- `getGlobalAlpha(skipUpdate?: boolean): number` — Returns the global (compound) alpha of the container within the scene.
- `getGlobalTransform(matrix?: Matrix, skipUpdate?: boolean): Matrix` — Returns the global transform matrix of the container within the scene.
- `getGlobalTint(skipUpdate?: boolean): number` — Returns the global (compound) tint color of the container within the scene.
- `getFastGlobalBounds(factorRenderLayers?: boolean, bounds?: Bounds): Bounds` — Computes an approximate global bounding box for the container and its children.
This method is optimized for speed by using axis-aligned bounding boxes (AABBs),
and uses the last render results from when it updated the transforms. This function does not update them.
which may result in slightly larger bounds but never smaller than the actual bounds.

for accurate (but less performant) results use `container.getGlobalBounds`
- `_onTouch(now: number): void` — An optional callback for when an item is touched
```ts
import { ParticleContainer, Particle } from 'pixi.js';

const container = new ParticleContainer();

for (let i = 0; i < 100; ++i)
{
    let particle = new Particle(texture);
    container.addParticle(particle);
}
```
