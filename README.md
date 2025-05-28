# Y2K.css

Y2K.css is a neo-retro CSS style library. It provides a collection of CSS classes to create a Y2K-era aesthetic for your web projects.

## Features

*   **Dithering Patterns**: Simulates retro dithered window effects using 4x4 pixel repeated background images.
    *   `dither-black-white-0` to `dither-black-white-16`
    *   `dither-white-black-0` to `dither-white-black-16`
    *   `dither-white-alpha-0` to `dither-white-alpha-16` (transparent to white)
    *   `dither-black-alpha-0` to `dither-black-alpha-16` (transparent to black)
*   **Retro Shadows**:
    *   `.retro-shadow-default`: Applies a default-sized solid shadow.
    *   `.retro-shadow-sm`: Applies a small solid shadow.
    *   `.retro-shadow-xs`: Applies an extra-small solid shadow.
    *   `.retro-inverse-shadow-default`, `.retro-inverse-shadow-sm`, `.retro-inverse-shadow-xs`: Inverse shadow versions, typically for dark backgrounds.
*   **Retro Bevels**:
    *   `.retro-bevel-outset`: Applies an outset border style.
    *   `.retro-bevel-inset`: Applies an inset border style.
*   **Retro Buttons**:
    *   `.retro-button-default`: A standard retro-styled button with hover and active states.
    *   `.retro-button-3d`: A button with a more pronounced 3D effect, including hover and active states.
*   **Retro Inputs**:
    *   `.retro-input`: A retro-styled text input field with focus state.
*   **Dark Mode Support**:
    *   Includes `@media (prefers-color-scheme: dark)` overrides for dithering patterns (alpha versions), shadows, bevels, buttons, and inputs to ensure they adapt well to dark system themes.
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

## License

This project is licensed under the MIT License.

