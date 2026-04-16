# Classes

## assets

### `Resolver`
A class that is responsible for resolving mapping asset URLs to keys.
At its most basic it can be used for Aliases:

```js
resolver.add('foo', 'bar');
resolver.resolveUrl('foo') // => 'bar'
```

It can also be used to resolve the most appropriate asset for a given URL:

```js
resolver.prefer({
    params: {
        format: 'webp',
        resolution: 2,
    }
});

resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);

resolver.resolveUrl('foo') // => 'bar@2x.webp'
```
Other features include:
- Ability to process a manifest file to get the correct understanding of how to resolve all assets
- Ability to add custom parsers for specific file types
- Ability to add custom prefer rules

This class only cares about the URL, not the loading of the asset itself.

It is not intended that this class is created by developers - its part of the Asset class
This is the third major system of PixiJS' main Assets class
```ts
constructor(): Resolver
```
**Properties:**
- `RETINA_PREFIX: RegExp` — The prefix that denotes a URL is for a retina asset.
**Methods:**
- `setBundleIdentifier(bundleIdentifier: BundleIdentifierOptions): void` — Override how the resolver deals with generating bundle ids.
must be called before any bundles are added
- `prefer(preferOrders: PreferOrder[]): void` — Let the resolver know which assets you prefer to use when resolving assets.
Multiple prefer user defined rules can be added.
- `reset(): void` — Used for testing, this resets the resolver to its initial state
- `setDefaultSearchParams(searchParams: string | Record<string, unknown>): void` — Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.
- `getAlias(asset: UnresolvedAsset): string[]` — Returns the aliases for a given asset
- `removeAlias(alias: string, asset?: ResolvedAsset): void` — Removes the specified alias for an asset.

This only removes the alias mapping. It does **not** remove, unload, or destroy the
underlying asset. If the asset is already cached, it stays in memory until you call
`Assets.unload`.

If `asset` is provided, the alias is only removed when the resolver's current mapping for
that alias matches the given `ResolvedAsset`. This lets you avoid accidentally removing an
alias that has been reassigned.

Silently returns if the alias does not exist or the asset does not match.
- `addManifest(manifest: AssetsManifest): void` — Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
generally a manifest would be built using a tool.
- `addBundle(bundleId: string, assets: Record<string, ArrayOr<string> | UnresolvedAsset<any>> | UnresolvedAsset<any>[]): void` — This adds a bundle of assets in one go so that you can resolve them as a group.
For example you could add a bundle for each screen in you pixi app
- `add(aliases: ArrayOr<UnresolvedAsset>): void` — Tells the resolver what keys are associated with witch asset.
The most important thing the resolver does
- `resolveBundle(bundleIds: ArrayOr<string>): Record<string, ResolvedAsset<any>> | Record<string, Record<string, ResolvedAsset<any>>>` — If the resolver has had a manifest set via setManifest, this will return the assets urls for
a given bundleId or bundleIds.
- `resolveUrl(key: ArrayOr<string>): string | Record<string, string>` — Does exactly what resolve does, but returns just the URL rather than the whole asset object
- `resolve(keys: string): ResolvedAsset` — Resolves each key in the list to an asset object.
Another key function of the resolver! After adding all the various key/asset pairs. this will run the logic
of finding which asset to return based on any preferences set using the `prefer` function
by default the same key passed in will be returned if nothing is matched by the resolver.
- `hasKey(key: string): boolean` — Checks if an asset with a given key exists in the resolver
- `hasBundle(key: string): boolean` — Checks if a bundle with the given key exists in the resolver
