# Classes

## events

### `EventsTicker`
This class handles automatic firing of PointerEvents
in the case where the pointer is stationary for too long.
This is to ensure that hit-tests are still run on moving objects.
**Properties:**
- `events: EventSystem` — The event system.
- `domElement: HTMLElement` — The DOM element to listen to events on.
- `interactionFrequency: number` — The frequency that fake events will be fired.
**Methods:**
- `init(events: EventSystem): void` — Initializes the event ticker.
- `addTickerListener(): void` — Adds the ticker listener.
- `removeTickerListener(): void` — Removes the ticker listener.
- `pointerMoved(): void` — Sets flag to not fire extra events when the user has already moved there mouse
- `destroy(): void` — Destroys the event ticker.
