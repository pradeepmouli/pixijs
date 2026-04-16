# Classes

## assets

### `Cache`
A global cache for all assets in your PixiJS application. The cache system provides fast
access to loaded assets and prevents duplicate loading.

Key Features:
- Automatic caching of loaded assets
- Support for custom cache parsers
- Automatic parsing of complex assets (e.g., spritesheets)
- Memory management utilities
> [!IMPORTANT] You typically do not need to use this class directly.
> Use the main Assets class for high-level asset management.
> `Assets.get(key)` will automatically use the cache.
**Methods:**
- `reset(): void` — Clear all entries.
- `has(key: any): boolean` — Check if the key exists
- `get<T>(key: any): T` — Fetch entry by key
- `set<T>(key: any, value: T): void` — Set a value by key or keys name
- `remove(key: any): void` — Remove entry by key

This function will also remove any associated alias from the cache also.
```ts
import { Cache } from 'pixi.js';

// Store an asset in the cache
Cache.set('myTexture', texture);

// Retrieve an asset
const texture = Cache.get('myTexture');

// Check if an asset exists
if (Cache.has('myTexture')) {
    // Use the cached asset
    const sprite = new Sprite(Cache.get('myTexture'));
}

// Remove an asset from cache
Cache.remove('myTexture');

// Clear all cached assets
Cache.reset();
```
