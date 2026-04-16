# Classes

## text

### `HTMLText`
A HTMLText object creates text using HTML/CSS rendering with SVG foreignObject.
This allows for rich text formatting using standard HTML tags and CSS styling.

Key features:
- HTML tag support (&lt;strong&gt;, &lt;em&gt;, etc.)
- CSS styling and custom style overrides
- Emoji and special character support
- Line breaking and word wrapping
- SVG-based rendering
*extends `HTMLText`*
*implements `View`*
```ts
constructor(options?: HTMLTextOptions): HTMLText
```
*Inherits 74 properties from `HTMLText` — see [`HTMLText`](../htmltext.md)*
**Methods:**
- `mixin(source: Dict<any>): void` — Mixes all enumerable properties and methods from a source object to Container.
- `getSize(out?: Size): Size` — Retrieves the size of the Text as a [Size]Size object based on the texture dimensions and scale.
This is faster than getting width and height separately as it only calculates the bounds once.
- `setSize(value: number | Optional<Size, "height">, height?: number): void` — Sets the size of the Text to the specified width and height.
This is faster than setting width and height separately as it only recalculates bounds once.
- `containsPoint(point: PointData): boolean` — Checks if the object contains the given point in local coordinates.
Uses the text's bounds for hit testing.
- `destroy(options: DestroyOptions): void` — Destroys this text renderable and optionally its style texture.
- `unload(): void` — Unloads the GPU data from the view.
- `addChild<U>(children: U): U[0]` — Adds one or more children to the container.
The children will be rendered as part of this container's display list.
- `removeChild<U>(children: U): U[0]` — Removes one or more children from the container.
When removing multiple children, events will be triggered for each child in sequence.
- `enableRenderGroup(): void` — Calling this enables a render group for this container.
This means it will be rendered as a separate set of instructions.
The transform of the container will also be handled on the GPU rather than the CPU.
- `disableRenderGroup(): void` — This will disable the render group for this container.
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
- `removeChildren(beginIndex?: number, endIndex?: number): ContainerChild[]` — Removes all children from this container that are within the begin and end indexes.
- `removeChildAt<U>(index: number): U` — Removes a child from the specified index position.
- `getChildAt<U>(index: number): U` — Returns the child at the specified index.
- `setChildIndex(child: ContainerChild, index: number): void` — Changes the position of an existing child in the container.
- `getChildIndex(child: ContainerChild): number` — Returns the index position of a child Container instance.
- `addChildAt<U>(child: U, index: number): U` — Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown.
If the child is already in this container, it will be moved to the specified index.

When moving a child within the **same** container, `childAdded` and `added` events are
**not** emitted because the parent-child relationship hasn't changed. Events only fire when
a child is added from a different parent (or from no parent).
- `swapChildren<U>(child: U, child2: U): void` — Swaps the position of 2 Containers within this container.
- `removeFromParent(): void` — Remove the Container from its parent Container. If the Container has no parent, do nothing.
- `reparentChild<U>(child: U): U[0]` — Reparent a child or multiple children to this container while preserving their world transform.
This ensures that the visual position and rotation of the children remain the same even when changing parents.
- `reparentChildAt<U>(child: U, index: number): U` — Reparent the child to this container at the specified index while preserving its world transform.
This ensures that the visual position and rotation of the child remain the same even when changing parents.
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
import { HTMLText } from 'pixi.js';

// Basic HTML text with tags
const text = new HTMLText({
    text: '<h1>Title</h1><p>This is a <strong>bold</strong> and <em>italic</em> text.</p>',
    style: {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xff1010,
        align: 'center',
    }
});

// Rich HTML text with custom styling
const richText = new HTMLText({
    text: `
        <div class="title">Welcome</div>
        <div class="content">
            This text supports:
            <ul>
                <li>✨ Emojis</li>
                <li>🎨 Custom CSS</li>
                <li>📏 Auto-sizing</li>
            </ul>
        </div>
    `,
    style: {
        fontSize: 24,
        fill: '#334455',
        cssOverrides: [
            '.title { font-size: 32px; color: red; }',
            '.content { line-height: 1.5; }'
        ],
        wordWrap: true,
        wordWrapWidth: 300,
    }
});

// Text with custom texture settings
const crispText = new HTMLText({
    text: '<div style="padding: 10px">High Quality Text</div>',
    style: {
        fontSize: 24,
        fill: '#4a4a4a',
    },
    textureStyle: {
        scaleMode: 'nearest',
    }
});
```

Platform Considerations:
- Rendering may vary slightly between browsers
- Requires browser support for foreignObject
- Performance similar to Canvas text
- Memory usage comparable to Canvas text
