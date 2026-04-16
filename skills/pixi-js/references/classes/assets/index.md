# assets

| Class | Description |
|-------|-------------|
| [Assets](assets.md) | The global Assets class is a singleton that manages loading, caching, and unloading of all resources
in your PixiJS application.

Key responsibilities:
- **URL Resolution**: Maps URLs/keys to browser-compatible resources
- **Resource Loading**: Handles loading and transformation of assets
- **Asset Caching**: Manages a global cache to prevent duplicate loads
- **Memory Management**: Provides unloading capabilities to free memory

Advanced Features:
- **Asset Bundles**: Group and manage related assets together
- **Background Loading**: Load assets before they're needed over time
- **Format Detection**: Automatically select optimal asset formats

Supported Asset Types:
| Type                | Extensions                                                       | Loaders                                                               |
| ------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| Textures            | `.png`, `.jpg`, `.gif`, `.webp`, `.avif`, `.svg`                 | loadTextures, loadSvg                                 |
| Video Textures      | `.mp4`, `.m4v`, `.webm`, `.ogg`, `.ogv`, `.h264`, `.avi`, `.mov` | loadVideoTextures                                             |
| Sprite Sheets       | `.json`                                                          | spritesheetAsset                                              |
| Bitmap Fonts        | `.fnt`, `.xml`, `.txt`                                           | loadBitmapFont                                                |
| Web Fonts           | `.ttf`, `.otf`, `.woff`, `.woff2`                                | loadWebFont                                                   |
| JSON                | `.json`                                                          | loadJson                                                      |
| Text                | `.txt`                                                           | loadTxt                                                       |
| Compressed Textures | `.basis`, `.dds`, `.ktx`, `.ktx2`                                | loadBasis, loadDDS, loadKTX, loadKTX2 |
> [!NOTE] Some loaders allow for custom configuration, please refer to the specific loader documentation for details. |
| [BackgroundLoader](backgroundloader.md) | The BackgroundLoader handles loading assets passively in the background to prepare them for future use.
It loads one asset at a time to minimize impact on application performance.

Key features:
- Sequential loading of assets
- Automatic pause when high-priority loads occur
- Configurable concurrency |
| [Cache](cache.md) | A global cache for all assets in your PixiJS application. The cache system provides fast
access to loaded assets and prevents duplicate loading.

Key Features:
- Automatic caching of loaded assets
- Support for custom cache parsers
- Automatic parsing of complex assets (e.g., spritesheets)
- Memory management utilities
> [!IMPORTANT] You typically do not need to use this class directly.
> Use the main Assets class for high-level asset management.
> `Assets.get(key)` will automatically use the cache. |
| [Loader](loader.md) | The Loader is responsible for loading all assets, such as images, spritesheets, audio files, etc.
It does not do anything clever with URLs - it just loads stuff!
Behind the scenes all things are cached using promises. This means it's impossible to load an asset more than once.
Through the use of LoaderParsers, the loader can understand how to load any kind of file!

It is not intended that this class is created by developers - its part of the Asset class
This is the second major system of PixiJS' main Assets class |
| [Resolver](resolver.md) | A class that is responsible for resolving mapping asset URLs to keys.
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
This is the third major system of PixiJS' main Assets class |
| [Spritesheet](spritesheet.md) | Utility class for maintaining reference to a collection
of Textures on a single Spritesheet.

To access a sprite sheet from your code you may pass its JSON data file to Pixi's loader:

```js
import { Assets } from 'pixi.js';

const sheet = await Assets.load('images/spritesheet.json');
```

Alternately, you may circumvent the loader by instantiating the Spritesheet directly:

```js
import { Spritesheet } from 'pixi.js';

const sheet = new Spritesheet(texture, spritesheetData);
await sheet.parse();
console.log('Spritesheet ready to use!');
```

With the `sheet.textures` you can create Sprite objects, and `sheet.animations` can be used to create an AnimatedSprite.

Here's an example of a sprite sheet JSON data file:
```json
{
    "frames": {
        "enemy1.png":
        {
            "frame": {"x":103,"y":1,"w":32,"h":32},
            "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
            "sourceSize": {"w":32,"h":32},
            "anchor": {"x":0.5,"y":0.5}
        },
        "enemy2.png":
        {
            "frame": {"x":103,"y":35,"w":32,"h":32},
            "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
            "sourceSize": {"w":32,"h":32},
            "anchor": {"x":0.5,"y":0.5}
        },
        "button.png":
        {
            "frame": {"x":1,"y":1,"w":100,"h":100},
            "spriteSourceSize": {"x":0,"y":0,"w":100,"h":100},
            "sourceSize": {"w":100,"h":100},
            "anchor": {"x":0,"y":0},
            "borders": {"left":35,"top":35,"right":35,"bottom":35}
        }
    },

    "animations": {
        "enemy": ["enemy1.png","enemy2.png"]
    },

    "meta": {
        "image": "sheet.png",
        "format": "RGBA8888",
        "size": {"w":136,"h":102},
        "scale": "1"
    }
}
```
Sprite sheets can be packed using tools like https://codeandweb.com/texturepacker|TexturePacker,
https://renderhjs.net/shoebox/|Shoebox or https://github.com/krzysztof-o/spritesheet.js|Spritesheet.js.
Default anchor points (see Texture#defaultAnchor), default 9-slice borders
(see Texture#defaultBorders) and grouping of animation sprites are currently only
supported by TexturePacker.

Alternative ways for loading spritesheet image if you need more control:

```js
import { Assets } from 'pixi.js';

const sheetTexture = await Assets.load('images/spritesheet.png');
Assets.add({
    alias: 'atlas',
    src: 'images/spritesheet.json',
    data: {texture: sheetTexture} // using of preloaded texture
});
const sheet = await Assets.load('atlas')
```

or:

```js
import { Assets } from 'pixi.js';

Assets.add({
    alias: 'atlas',
    src: 'images/spritesheet.json',
    data: {imageFilename: 'my-spritesheet.2x.avif'} // using of custom filename located in "images/my-spritesheet.2x.avif"
});
const sheet = await Assets.load('atlas')
``` |