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
**Properties:**
- `defaultOptions: Pick<ParticleContainerOptions, "dynamicProperties" | "roundPixels">` — Defines the default options for creating a ParticleContainer.
- `particleChildren: T[]` — An array of particles that are children of this ParticleContainer.
This array can be modified directly for performance, but the 'update' method
must be called afterwards to ensure the container is rendered correctly.
- `shader: Shader` — The shader used for rendering particles in this ParticleContainer.
- `texture: Texture` — The texture used for rendering particles in this ParticleContainer. All particles
must share the same base texture for optimal performance.

> [!NOTE]
> If not set, the texture of the first particle added to this container will be used.
- `autoGarbageCollect: boolean` — If set to true, the resource will be garbage collected automatically when it is not used.
- `children: ContainerChild[]` — The array of children of this container. Each child must be a Container or extend from it.

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
- `onpointercancel: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost.
- `onpointerdown: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed.
- `onpointerenter: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble.
- `onpointerleave: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble.
- `onpointermove: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object.
- `onglobalpointermove: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event.
- `onpointerout: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object.
- `onpointerover: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object.
- `onpointertap: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click).
- `onpointerup: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released.
- `onpointerupoutside: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown.
- `onrightclick: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object.
- `onrightdown: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object.
- `onrightup: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object.
- `onrightupoutside: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown.
- `ontap: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object.
- `ontouchcancel: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted.
- `ontouchend: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen.
- `ontouchendoutside: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart.
- `ontouchmove: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object.
- `onglobaltouchmove: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event.
- `ontouchstart: FederatedEventHandler<FederatedPointerEvent>` (optional) — Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen.
- `onwheel: FederatedEventHandler<FederatedWheelEvent>` (optional) — Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object.
- `onRender: (renderer: Renderer) => void` — This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame
- `filterArea: Rectangle` (optional) — The area the filter is applied to. This is used as an optimization to define a specific region

<!-- truncated -->
