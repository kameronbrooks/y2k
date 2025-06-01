# Y2K.css

Y2K.css is a neo-retro CSS style library. It provides a collection of CSS classes to create a Y2K-era aesthetic for your web projects.

## Features

*   **Dithering Patterns**: Simulates retro dithered window effects using 4x4 pixel repeated background images.
    *   `dither-black-white-0` to `dither-black-white-16`
    *   `dither-white-black-0` to `dither-white-black-16`
    *   `dither-white-alpha-0` to `dither-white-alpha-16` (transparent to white)
    *   `dither-black-alpha-0` to `dither-black-alpha-16` (transparent to black)
*   **Retro Shadows**:
    *   **Solid Shadows**:
        *   `.retro-shadow-default`: Applies a default-sized solid shadow.
        *   `.retro-shadow-sm`: Applies a small solid shadow.
        *   `.retro-shadow-xs`: Applies an extra-small solid shadow.
        *   `.retro-inverse-shadow-default`, `.retro-inverse-shadow-sm`, `.retro-inverse-shadow-xs`: Inverse solid shadow versions, typically for dark backgrounds.
    *   **Dithered Shadows**:
        *   `.retro-shadow-dither`: Applies a dithered shadow. Requires a dither level class (e.g., `.dither-8`) to set the `--shadow-texture`.
        *   `.retro-shadow-dither-sm`: Applies a smaller dithered shadow. Requires a dither level class.
        *   Helper classes `.dither-0` through `.dither-16` are provided to set the `--shadow-texture` CSS custom property for dithered shadows.
*   **Retro Bevels**:
    *   `.retro-bevel-outset`: Applies an outset border style.
    *   `.retro-bevel-inset`: Applies an inset border style.
*   **Retro Buttons**:
    *   `.retro-button-default`: A standard retro-styled button with hover and active states.
    *   `.retro-button-3d`: A button with a pseudo-3D gradient effect, including hover and active states.
    *   `.retro-button-stark`: A high-contrast button style with hover and active states.
*   **Retro Inputs**:
    *   `.retro-input`: A retro-styled text input field with focus state.
*   **Dark Mode Support**:
    *   Includes `@media (prefers-color-scheme: dark)` overrides for dithering patterns (alpha versions), shadows (solid and dithered via `--shadow-texture`), bevels, buttons, and inputs to ensure they adapt well to dark system themes.
    *   Specific dark mode utility classes like `.dark-retro-bevel-outset`, `.dark-retro-bevel-inset`, `.dark-retro-shadow-default`, etc., are also available for explicit dark styling.

## Installation



### Using NPM
Import the dependency into your project

```bash
npm i y2k-css
```

### Old-school (HTML/CSS)
To use Y2K.css, you can include the compiled CSS file in your project.

## Usage

### Using NPM

Import the css file from the package into your (React/Nextjs/etc.)
```javascript
import "y2k-css/dist/y2k.css";
```

### Old-school (HTML/CSS)
Link the `dist/y2k.css` file in your HTML:

```html
<link rel="stylesheet" href="path/to/dist/y2k.css">
```

Then, apply the classes to your HTML elements:

```html
<div class="dither-black-white-8 retro-shadow-default retro-bevel-outset">
  Y2K Styled Content
</div>
```

## Notable Items

Here are a few things to keep in mind when using Y2K.css:

*   **Pseudo-element Limitations for Dithered Shadows**:
    *   The `.retro-shadow-dither` and `.retro-shadow-dither-sm` classes rely on `::before` and `::after` pseudo-elements to create the shadow effect. These pseudo-elements cannot be applied to certain types of HTML elements.
    *   **Replaced elements**: These elements are rendered by the browser and do not have a content box that pseudo-elements can be injected into. This includes:
        *   `<img>`
        *   `<input>` (most types, including `button` type if styled as such, though `<button>` element itself is not replaced)
        *   `<textarea>`
        *   `<select>`
        *   `<video>`
        *   `<audio>`
        *   `<embed>`
        *   `<object>`
        *   `<iframe>`
    *   **Void elements**: These elements are self-closing by specification and cannot have any children, including pseudo-elements. This includes:
        *   `<br>`
        *   `<hr>`
        *   `<meta>`
        *   `<link>`
        *   `<base>`
        *   `<area>`
        *   `<col>`
        *   `<param>`
        *   `<source>`
        *   `<track>`
        *   `<wbr>`
    *   For these elements, consider wrapping them in a `<div>` or `<span>` and applying the dithered shadow class to the wrapper.
*   **CSS Custom Properties for Dithered Shadows**:
    *   The dithered shadow classes (`.retro-shadow-dither`, `.retro-shadow-dither-sm`) use a CSS Custom Property `--shadow-texture`. You must also apply one of the `.dither-0` through `.dither-16` utility classes to the same element (or an ancestor) to define this property and set the desired dither pattern for the shadow.
*   **`box-sizing`**:
    *   Some components, like buttons, explicitly set `box-sizing: content-box;` to achieve their specific retro look with padding and borders. If you have a global `box-sizing: border-box;` rule, this might lead to slightly different sizing than intended for these specific components. This is generally handled correctly by the library's styles but is worth noting if you encounter layout surprises.
*   **Dithering Pattern Scaling**:
    *   The dither patterns rely on `image-rendering: pixelated` (or a prefixed variant via the `--image-pixelated` custom property) to maintain a crisp, pixel-art look.
    *   If you encounter issues where dither patterns appear blurry or not perfectly scaled (e.g., due to fractional pixel rendering, browser zoom, or specific display scaling), you can try applying the `.dither-smooth` class to the element.
    *   `.dither-smooth` overrides the `--image-pixelated` custom property to `auto`, which allows the browser's default image scaling algorithm. This might result in a softer look but can resolve rendering artifacts in some situations.
        ```css
        .dither-smooth {
            --image-pixelated: auto;
        }
        ```

## License

This project is licensed under the MIT License.

