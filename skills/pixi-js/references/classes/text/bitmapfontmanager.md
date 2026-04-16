# Classes

## text

### `BitmapFontManager`
The BitmapFontManager is a helper that exists to install and uninstall fonts
into the cache for BitmapText objects.
**Properties:**
- `ALPHA: (string | string[])[]` — This character set includes all the letters in the alphabet (both lower- and upper- case).
- `NUMERIC: string[][]` — This character set includes all decimal digits (from 0 to 9).
- `ALPHANUMERIC: (string | string[])[]` — This character set is the union of `BitmapFont.ALPHA` and `BitmapFont.NUMERIC`.
- `ASCII: string[][]` — This character set consists of all the ASCII table.
- `defaultOptions: Omit<BitmapFontInstallOptions, "style">` — Default options for installing a new BitmapFont.
- `measureCache: LRU<BitmapTextLayoutData>` — Cache for measured text layouts to avoid recalculating them multiple times.
**Methods:**
- `getFont(text: string, style: TextStyle): BitmapFont` — Get a font for the specified text and style.
- `getLayout(text: string, style: TextStyle, trimEnd: boolean): BitmapTextLayoutData` — Get the layout of a text for the specified style.
- `measureText(text: string, style: TextStyle, trimEnd: boolean): { width: number; height: number; scale: number; offsetY: number }` — Measure the text using the specified style.
- `install(options: BitmapFontInstallOptions): BitmapFont` — Generates a bitmap-font for the given style and character set
- `uninstall(name: string): void` — Uninstalls a bitmap font from the cache.
```ts
import { BitmapFontManager, BitmapText } from 'pixi.js';

BitmapFontManager.install({
  name: 'TitleFont',
  style: {}
});

const title = new BitmapText({ text: 'This is the title', style: { fontFamily: 'TitleFont' }});
```
