/**
 * PixiJS — The HTML5 Creation Engine. A fast, lightweight 2D rendering library
 * that works across all modern browsers supporting WebGL, WebGPU, and Canvas.
 * Build games, interactive visualizations, animated UIs, and creative experiences.
 *
 * @useWhen
 * - Building 2D games, animations, or interactive graphics for the web
 * - You need high-performance sprite rendering with WebGL/WebGPU
 * - Creating data visualizations with thousands of animated elements
 * - Building rich interactive UIs beyond what CSS can handle
 *
 * @avoidWhen
 * - Building 3D scenes — use Three.js or Babylon.js instead
 * - Simple DOM-based animations — CSS transitions are simpler
 * - Static charts — use D3 or Chart.js instead
 *
 * @pitfalls
 * - NEVER use v7 API patterns (beginFill/drawRect) in v8 — the Graphics API was completely rewritten
 * - NEVER skip app.init() in v8 — initialization is now async and required before rendering
 * - NEVER create textures from unloaded images — always use Assets.load() first
 * - NEVER put individual event listeners on thousands of sprites — use event delegation on the stage
 * - NEVER modify Graphics every frame — cache as a texture via renderer.generateTexture()
 * - NEVER use Sprite masks at scale — use stencil masks for better performance
 *
 * @packageDocumentation
 * @document __docs__/concepts/architecture.md
 * @document __docs__/concepts/scene-graph.mdx
 * @document __docs__/concepts/render-loop.md
 * @document __docs__/concepts/render-groups.md
 * @document __docs__/concepts/render-layers.mdx
 * @document __docs__/concepts/environments.md
 * @document __docs__/concepts/garbage-collection.md
 * @document __docs__/concepts/performance-tips.md
 * @document accessibility/__docs__/accessibility.md
 * @document app/__docs__/app.md
 * @document assets/__docs__/assets.md
 * @document color/__docs__/color.md
 * @document environment/__docs__/environment.md
 * @document events/__docs__/events.md
 * @document extensions/__docs__/extensions.md
 * @document filters/__docs__/filters.md
 * @document maths/__docs__/math.md
 * @document rendering/__docs__/rendering.md
 * @document scene/__docs__/scene.md
 * @document gif/__docs__/scene-gif.md
 * @document ticker/__docs__/ticker.md
 * @document utils/__docs__/utils.md
 * @document __docs__/migrations/v8.md
 * @document __docs__/migrations/v7.md
 * @document __docs__/migrations/v6.md
 * @document __docs__/migrations/v5.md
 */

export * from './accessibility';
export * from './advanced-blend-modes';
export * from './app';
export * from './assets';
export * from './color';
export * from './compressed-textures';
export * from './culling';
export * from './dom';
export * from './environment';
export * from './environment-browser';
export * from './environment-webworker';
export * from './events';
export * from './extensions';
export * from './filters';
export * from './gif';
export * from './math-extras';
export * from './maths';
export * from './prepare';
export * from './rendering';
export * from './scene';
export * from './spritesheet';
export * from './ticker';
export * from './unsafe-eval';
export * from './utils';
