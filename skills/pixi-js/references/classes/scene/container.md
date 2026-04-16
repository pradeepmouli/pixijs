# Classes

## scene

### `Container`
Container is a general-purpose display object that holds children. It also adds built-in support for advanced
rendering features like masking and filtering.

It is the base class of all display objects that act as a container for other objects, including Graphics
and Sprite.

<details id="transforms">

<summary>Transforms</summary>

The [transform]Container#localTransform of a display object describes the projection from its
local coordinate space to its parent's local coordinate space. The following properties are derived
from the transform:

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[pivot]Container#pivot</td>
      <td>
        Invariant under rotation, scaling, and skewing. The projection of into the parent's space of the pivot
        is equal to position, regardless of the other three transformations. In other words, It is the center of
        rotation, scaling, and skewing.
      </td>
    </tr>
    <tr>
      <td>[position]Container#position</td>
      <td>
        Translation. This is the position of the [pivot]Container#pivot in the parent's local
        space. The default value of the pivot is the origin (0,0). If the top-left corner of your display object
        is (0,0) in its local space, then the position will be its top-left corner in the parent's local space.
      </td>
    </tr>
    <tr>
      <td>[scale]Container#scale</td>
      <td>
        Scaling. This will stretch (or compress) the display object's projection. The scale factors are along the
        local coordinate axes. In other words, the display object is scaled before rotated or skewed. The center
        of scaling is the [pivot]Container#pivot.
      </td>
    </tr>
    <tr>
      <td>[rotation]Container#rotation</td>
      <td>
         Rotation. This will rotate the display object's projection by this angle (in radians).
      </td>
    </tr>
    <tr>
      <td>[skew]Container#skew</td>
      <td>
        <p>Skewing. This can be used to deform a rectangular display object into a parallelogram.</p>
        <p>
        In PixiJS, skew has a slightly different behaviour than the conventional meaning. It can be
        thought of the net rotation applied to the coordinate axes (separately). For example, if "skew.x" is
        ⍺ and "skew.y" is β, then the line x = 0 will be rotated by ⍺ (y = -x*cot⍺) and the line y = 0 will be
        rotated by β (y = x*tanβ). A line y = x*tanϴ (i.e. a line at angle ϴ to the x-axis in local-space) will
        be rotated by an angle between ⍺ and β.
        </p>
        <p>
        It can be observed that if skew is applied equally to both axes, then it will be equivalent to applying
        a rotation. Indeed, if "skew.x" = -ϴ and "skew.y" = ϴ, it will produce an equivalent of "rotation" = ϴ.
        </p>
        <p>
        Another quite interesting observation is that "skew.x", "skew.y", rotation are commutative operations. Indeed,
        because rotation is essentially a careful combination of the two.
        </p>
      </td>
    </tr>
    <tr>
      <td>[angle]Container#angle</td>
      <td>Rotation. This is an alias for [rotation]Container#rotation, but in degrees.</td>
    </tr>
    <tr>
      <td>[x]Container#x</td>
      <td>Translation. This is an alias for position.x!</td>
    </tr>
    <tr>
      <td>[y]Container#y</td>
      <td>Translation. This is an alias for position.y!</td>
    </tr>
    <tr>
      <td>[width]Container#width</td>
      <td>
        Implemented in [Container]Container. Scaling. The width property calculates scale.x by dividing
        the "requested" width by the local bounding box width. It is indirectly an abstraction over scale.x, and there
        is no concept of user-defined width.
      </td>
    </tr>
    <tr>
      <td>[height]Container#height</td>
      <td>
        Implemented in [Container]Container. Scaling. The height property calculates scale.y by dividing
        the "requested" height by the local bounding box height. It is indirectly an abstraction over scale.y, and there
        is no concept of user-defined height.
      </td>
    </tr>
  </tbody>
</table>
</details>

<details id="alpha">
<summary>Alpha</summary>

This alpha sets a display object's **relative opacity** w.r.t its parent. For example, if the alpha of a display
object is 0.5 and its parent's alpha is 0.5, then it will be rendered with 25% opacity (assuming alpha is not
applied on any ancestor further up the chain).
</details>

<details id="visible">
<summary>Renderable vs Visible</summary>

The `renderable` and `visible` properties can be used to prevent a display object from being rendered to the
screen. However, there is a subtle difference between the two. When using `renderable`, the transforms  of the display
object (and its children subtree) will continue to be calculated. When using `visible`, the transforms will not
be calculated.
```ts
import { BlurFilter, Container, Graphics, Sprite } from 'pixi.js';

const container = new Container();
const sprite = Sprite.from('https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png');

sprite.width = 512;
sprite.height = 512;

// Adds a sprite as a child to this container. As a result, the sprite will be rendered whenever the container
// is rendered.
container.addChild(sprite);

// Blurs whatever is rendered by the container
container.filters = [new BlurFilter()];

// Only the contents within a circle at the center should be rendered onto the screen.
container.mask = new Graphics()
    .beginFill(0xffffff)
    .drawCircle(sprite.width / 2, sprite.height / 2, Math.min(sprite.width, sprite.height) / 2)
    .endFill();
```

</details>

<details id="renderGroup">
<summary>RenderGroup</summary>

In PixiJS v8, containers can be set to operate in 'render group mode',
transforming them into entities akin to a stage in traditional rendering paradigms.
A render group is a root renderable entity, similar to a container,
but it's rendered in a separate pass with its own unique set of rendering instructions.
This approach enhances rendering efficiency and organization, particularly in complex scenes.

You can enable render group mode on any container using container.enableRenderGroup()
or by initializing a new container with the render group property set to true (new Container({isRenderGroup: true})).
 The method you choose depends on your specific use case and setup requirements.

An important aspect of PixiJS’s rendering process is the automatic treatment of rendered scenes as render groups.
This conversion streamlines the rendering process, but understanding when and how this happens is crucial
to fully leverage its benefits.

One of the key advantages of using render groups is the performance efficiency in moving them. Since transformations
 are applied at the GPU level, moving a render group, even one with complex and numerous children,
doesn't require recalculating the rendering instructions or performing transformations on each child.
This makes operations like panning a large game world incredibly efficient.

However, it's crucial to note that render groups do not batch together.
This means that turning every container into a render group could actually slow things down,
as each render group is processed separately. It's best to use render groups judiciously, at a broader level,
rather than on a per-child basis.
This approach ensures you get the performance benefits without overburdening the rendering process.

RenderGroups maintain their own set of rendering instructions,
ensuring that changes or updates within a render group don't affect the rendering
instructions of its parent or other render groups.
 This isolation ensures more stable and predictable rendering behavior.

Additionally, renderGroups can be nested, allowing for powerful options in organizing different aspects of your scene.
This feature is particularly beneficial for separating complex game graphics from UI elements,
enabling intricate and efficient scene management in complex applications.

This means that Containers have 3 levels of matrix to be mindful of:

1. localTransform, this is the transform of the container based on its own properties
2. groupTransform, this it the transform of the container relative to the renderGroup it belongs too
3. worldTransform, this is the transform of the container relative to the Scene being rendered
</details>
*extends `Container<C>`*
```ts
constructor<C>(options: ContainerOptions<C>): Container<C>
```
**Properties:**
- `children: C[]` — The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods.
- `parent: Container<ContainerChild>` — The display object container that contains this display object.
This represents the parent-child relationship in the display tree.
- `parentRenderLayer: RenderLayer` — The RenderLayer this container belongs to, if any.
If it belongs to a RenderLayer, it will be rendered from the RenderLayer's position in the scene.
- `localTransform: Matrix` — Current transform of the object based on local factors: position, scale, other stuff.
This matrix represents the local transformation without any parent influence.
- `relativeGroupTransform: Matrix` — The relative group transform is a transform relative to the render group it belongs too. It will include all parent
transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
If this container is is self a render group matrix will be relative to its parent render group
- `groupTransform: Matrix` — The group transform is a transform relative to the render group it belongs too.
If this container is render group then this will be an identity matrix. other wise it
will be the same as the relativeGroupTransform.
Use this value when actually rendering things to the screen
- `destroyed: boolean` — Whether this object has been destroyed. If true, the object should no longer be used.
After an object is destroyed, all of its functionality is disabled and references are removed.
- `boundsArea: Rectangle` — An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set.
- `accessible: boolean` (optional) — Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set
- `accessibleTitle: string` (optional) — Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]'
- `accessibleHint: string` (optional) — Sets the aria-label attribute of the shadow div
- `tabIndex: number` (optional) — Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate.
- `accessibleType: keyof HTMLElementTagNameMap` (optional) — Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.
- `accessiblePointerEvents: PointerEvents` (optional) — Specify the pointer-events the accessible div will use
Defaults to auto.
- `accessibleText: string` (optional) — Sets the text content of the shadow
- `accessibleChildren: boolean` (optional) — Setting to false will prevent any children inside this container to
be accessible. Defaults to true.
- `cullArea: Rectangle` (optional) — Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations.
- `cullable: boolean` (optional) — Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area.
- `cullableChildren: boolean` (optional) — Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance.
- `isInteractive: () => boolean` — Determines if the container is interactive or not
- `cursor: string & {} | Cursor` (optional) — The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL.
- `eventMode: EventMode` (optional) — Enable interaction events for the Container. Touch, pointer and mouse events are supported.
- `interactive: boolean` (optional) — Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object.
- `interactiveChildren: boolean` (optional) — Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children.
- `hitArea: IHitArea` (optional) — Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds.
- `onclick: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action.
- `onmousedown: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object.
- `onmouseenter: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble.
- `onmouseleave: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble.
- `onmousemove: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object.
- `onglobalmousemove: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event.
- `onmouseout: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object.
- `onmouseover: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object.
- `onmouseup: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object.
- `onmouseupoutside: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown.

<!-- truncated -->
