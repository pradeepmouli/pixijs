# Classes

## accessibility

### `AccessibilitySystem`
The Accessibility system provides screen reader and keyboard navigation support for PixiJS content.
It creates an accessible DOM layer over the canvas that can be controlled programmatically or through user interaction.

By default, the system activates when users press the tab key. This behavior can be customized through options:
```js
const app = new Application({
    accessibilityOptions: {
    // Enable immediately instead of waiting for tab
    enabledByDefault: true,
    // Disable tab key activation
    activateOnTab: false,
    // Show/hide accessibility divs
    debug: false,
    // Prevent accessibility from being deactivated when mouse moves
    deactivateOnMouseMove: false,
}
});
```

The system can also be controlled programmatically by accessing the `renderer.accessibility` property:
```js
app.renderer.accessibility.setAccessibilityEnabled(true);
```

To make individual containers accessible:
```js
container.accessible = true;
```
There are several properties that can be set on a Container to control its accessibility which can
be found here: AccessibleOptions.
*implements `System<AccessibilitySystemOptions>`*
```ts
constructor(renderer: Renderer, _mobileInfo: isMobileResult): AccessibilitySystem
```
**Properties:**
- `defaultOptions: AccessibilityOptions` — The default options used by the system.
You can set these before initializing the Application to change the default behavior.
- `debug: boolean` — Whether accessibility divs are visible for debugging
**Methods:**
- `destroy(): void` — Destroys the accessibility system. Removes all elements and listeners.
> [!IMPORTANT] This is typically called automatically when the Application is destroyed.
> A typically user should not need to call this method directly.
- `setAccessibilityEnabled(enabled: boolean): void` — Enables or disables the accessibility system.
