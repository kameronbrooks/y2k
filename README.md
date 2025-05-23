# Y2K.css

Y2K.css is a neo-retro CSS style library. It provides a collection of CSS classes to create a Y2K-era aesthetic for your web projects.

## Features

*   **Dithering Patterns**: Simulates retro dithered window effects
    *   `dither-black-white-0` to `dither-black-white-16`
    *   `dither-white-black-0` to `dither-white-black-16`
    *   `dither-white-alpha-0` to `dither-white-alpha-16`
    *   `dither-black-alpha-0` to `dither-black-alpha-16`
*   **Retro Shadow**:
    *   `.retro-shadow-default`: Applies a solid black shadow.
*   **Retro Bevels**:
    *   `.retro-bevel-outset`: Applies an outset border.
    *   `.retro-bevel-inset`: Applies an inset border.

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

