# Classes

## rendering

### `SchedulerSystem`
The SchedulerSystem manages scheduled tasks with specific intervals.
*implements `System<null>`*
```ts
constructor(): SchedulerSystem
```
**Methods:**
- `init(): void` — Initializes the scheduler system and starts the ticker.
- `repeat(func: (elapsed: number) => void, duration: number, useOffset: boolean): number` — Schedules a repeating task.
- `cancel(id: number): void` — Cancels a scheduled task.
