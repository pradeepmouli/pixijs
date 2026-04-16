# Classes

## scene

### `Graphics`
The Graphics class is primarily used to render primitive shapes such as lines, circles and
rectangles to the display, and to color and fill them. It can also be used to create complex
masks and hit areas for interaction.
*extends `Graphics`*
*implements `Instruction`*
```ts
constructor(options?: GraphicsContext | GraphicsOptions): Graphics
```
*Inherits 72 properties from `Graphics` — see [`Graphics`](../graphics.md)*
**Methods:**
- `mixin(source: Dict<any>): void` — Mixes all enumerable properties and methods from a source object to Container.
- `containsPoint(point: PointData): boolean` — Checks if the object contains the given point.
Returns true if the point lies within the Graphics object's rendered area.
- `destroy(options?: DestroyOptions): void` — Destroys this graphics renderable and optionally its context.
- `setFillStyle(args: [style: FillInput]): this` — Sets the current fill style of the graphics context.
The fill style can be a color, gradient, pattern, or a complex style object.
- `setStrokeStyle(args: [style: StrokeInput]): this` — Sets the current stroke style of the graphics context.
Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations.
- `fill(style?: FillInput): this` — Fills the current or given path with the current fill style or specified style.
- `stroke(args: [style?: StrokeInput]): this` — Strokes the current path with the current stroke style or specified style.
Outlines the shape using the stroke settings.
- `texture(texture: Texture): this` — Adds a texture to the graphics context. This method supports multiple ways to draw textures
including basic textures, tinted textures, and textures with custom dimensions.
- `beginPath(): this` — Resets the current path. Any previous path and its commands are discarded and a new path is
started. This is typically called before beginning a new shape or series of drawing commands.
- `cut(): this` — Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
subtracting a path from the previously drawn path.

If a hole is not completely in a shape, it will fail to cut correctly.
- `arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): this` — Adds an arc to the current path, which is centered at (x, y) with the specified radius,
starting and ending angles, and direction.
- `arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this` — Adds an arc to the current path that connects two points using a radius.
The arc is drawn between the current point and the specified end point,
using the given control point to determine the curve of the arc.
- `arcToSvg(rx: number, ry: number, xAxisRotation: number, largeArcFlag: number, sweepFlag: number, x: number, y: number): this` — Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
This is particularly useful when converting SVG paths to Graphics or creating complex curved shapes.
- `bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number, smoothness?: number): this` — Adds a cubic Bézier curve to the path, from the current point to the specified end point.
The curve is influenced by two control points that define its shape and curvature.
- `closePath(): this` — Closes the current path by drawing a straight line back to the start point.

This is useful for completing shapes and ensuring they are properly closed for fills.
- `ellipse(x: number, y: number, radiusX: number, radiusY: number): this` — Draws an ellipse at the specified location and with the given x and y radii.
An optional transformation can be applied, allowing for rotation, scaling, and translation.
- `circle(x: number, y: number, radius: number): this` — Draws a circle shape at the specified location with the given radius.
- `path(path: GraphicsPath): this` — Adds another `GraphicsPath` to this path, optionally applying a transformation.
This allows for reuse of complex paths and shapes across different graphics instances.
- `lineTo(x: number, y: number): this` — Connects the current point to a new point with a straight line.
Any subsequent drawing commands will start from this new point.
- `moveTo(x: number, y: number): this` — Sets the starting point for a new sub-path.

Moves the "pen" to a new location without drawing a line.
Any subsequent drawing commands will start from this point.
- `quadraticCurveTo(cpx: number, cpy: number, x: number, y: number, smoothness?: number): this` — Adds a quadratic curve to the path. It requires two points: the control point and the end point.
The starting point is the last point in the current path.
- `rect(x: number, y: number, w: number, h: number): this` — Draws a rectangle shape.

This method adds a new rectangle path to the current drawing.
- `roundRect(x: number, y: number, w: number, h: number, radius?: number): this` — Draws a rectangle with rounded corners. The corner radius can be specified to
determine how rounded the corners should be.
- `poly(points: number[] | PointData[], close?: boolean): this` — Draws a polygon shape by specifying a sequence of points. This method allows for the creation of complex polygons,
which can be both open and closed.

An optional transformation can be applied, enabling the polygon to be scaled,
rotated, or translated as needed.
- `regularPoly(x: number, y: number, radius: number, sides: number, rotation?: number, transform?: Matrix): this` — Draws a regular polygon with a specified number of sides. All sides and angles are equal,
making shapes like triangles, squares, pentagons, etc.
- `roundPoly(x: number, y: number, radius: number, sides: number, corner: number, rotation?: number): this` — Draws a polygon with rounded corners.

Similar to `regularPoly` but with the ability to round the corners of the polygon.
- `roundShape(points: RoundedPoint[], radius: number, useQuadratic?: boolean, smoothness?: number): this` — Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
- `filletRect(x: number, y: number, width: number, height: number, fillet: number): this` — Draws a rectangle with fillet corners. Unlike rounded rectangles, this supports negative corner
radii which create external rounded corners rather than internal ones.
- `chamferRect(x: number, y: number, width: number, height: number, chamfer: number, transform?: Matrix): this` — Draws a rectangle with chamfered (angled) corners. Each corner is cut off at
a 45-degree angle based on the chamfer size.
- `star(x: number, y: number, points: number, radius: number, innerRadius?: number, rotation?: number): this` — Draws a star shape centered at a specified location. This method allows for the creation
of stars with a variable number of points, outer radius, optional inner radius, and rotation.

The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
An optional transformation can be applied to scale, rotate, or translate the star as needed.
- `svg(svg: string): this` — Parses and renders an SVG string into the graphics context. This allows for complex shapes
and paths defined in SVG format to be drawn within the graphics context.
- `restore(): this` — Restores the most recently saved graphics state by popping the top of the graphics state stack.
This includes transformations, fill styles, and stroke styles.
- `save(): this` — Saves the current graphics state onto a stack. The state includes:
- Current transformation matrix
- Current fill style
- Current stroke style
- `getTransform(): Matrix` — Returns the current transformation matrix of the graphics context.
This matrix represents all accumulated transformations including translate, scale, and rotate.
- `resetTransform(): this` — Resets the current transformation matrix to the identity matrix, effectively removing
any transformations (rotation, scaling, translation) previously applied.
- `rotateTransform(angle: number): this` — Applies a rotation transformation to the graphics context around the current origin.
Positive angles rotate clockwise, while negative angles rotate counterclockwise.
- `scaleTransform(x: number, y?: number): this` — Applies a scaling transformation to the graphics context, scaling drawings by x horizontally
and by y vertically relative to the current origin.
- `setTransform(transform: Matrix): this` — Sets the current transformation matrix of the graphics context.

This method can either
take a Matrix object or individual transform values to create a new transformation matrix.
- `transform(transform: Matrix): this` — Applies a transformation matrix to the current graphics context by multiplying
the current matrix with the specified matrix. This allows for complex transformations
combining multiple operations.
- `translateTransform(x: number, y?: number): this` — Applies a translation transformation to the graphics context, moving the origin by the specified amounts.
This affects all subsequent drawing operations.
- `clear(): this` — Clears all drawing commands from the graphics context, effectively resetting it.
This includes clearing the current path, fill style, stroke style, and transformations.

> [!NOTE] Graphics objects are not designed to be continuously cleared and redrawn.
> Instead, they are intended to be used for static or semi-static graphics that
> can be redrawn as needed. Frequent clearing and redrawing may lead to performance issues.
- `clone(deep: boolean): Graphics` — Creates a new Graphics object that copies the current graphics content.
The clone can either share the same context (shallow clone) or have its own independent
context (deep clone).
- `lineStyle(width?: number, color?: ColorSource, alpha?: number): this`
- `beginFill(color: ColorSource, alpha?: number): Graphics`
- `endFill(): Graphics`
- `drawCircle(args: [x: number, y: number, radius: number]): this`
- `drawEllipse(args: [x: number, y: number, radiusX: number, radiusY: number]): this`
- `drawPolygon(args: [points: number[] | PointData[], close?: boolean]): this`
- `drawRect(args: [x: number, y: number, w: number, h: number]): this`
- `drawRoundedRect(args: [x: number, y: number, w: number, h: number, radius?: number]): this`
- `drawStar(args: [x: number, y: number, points: number, radius: number, innerRadius: number, rotation: number]): this`
- `unload(): void` — Unloads the GPU data from the view.
- `addChild<U>(children: U): U[0]` — Adds one or more children to the container.
The children will be rendered as part of this container's display list.
- `removeChild<U>(children: U): U[0]` — Removes one or more children from the container.
When removing multiple children, events will be triggered for each child in sequence.
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
```ts
// Create a new graphics object
const graphics = new Graphics();

// Draw a filled rectangle with a stroke
graphics
    .rect(0, 0, 100, 100)
    .fill({ color: 0xff0000 }) // Fill with red
    .stroke({ width: 2, color: 0x000000 }); // Stroke with black

// Draw a complex shape
graphics
    .moveTo(50, 50)
    .lineTo(100, 100)
    .arc(100, 100, 50, 0, Math.PI)
    .closePath()
    .fill({ color: 0x00ff00, alpha: 0.5 }); // Fill the shape

// Use as a mask
sprite.mask = graphics;
```
