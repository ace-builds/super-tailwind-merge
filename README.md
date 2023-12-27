# super-tailwind-merge

`super-tailwind-merge` is a powerful utility that combines the strengths of `classnames` and `tailwind-merge`, providing a seamless approach to merging and conditionally applying CSS classes in a concise and readable manner.

## Overview

The motivation behind `super-tailwind-merge` is to harness the expressive and intuitive nature of `classnames` alongside the functionality offered by `tailwind-merge`, resulting in a highly productive and easily understandable function for merging CSS classes.

### Why Use `super-tailwind-merge`?

- **Combination of `classnames` and `tailwind-merge`:** This package brings together the best of both worlds, leveraging the readability and ease of use of `classnames` for conditional class merging, complemented by the powerful `twMerge` function from `tailwind-merge`.

- **Readable and Productive Syntax:** By merging the capabilities of these two packages, `super-tailwind-merge` offers a supercharged, productive, and highly readable function for conditionally composing CSS classes.

## Installation

To install `super-tailwind-merge` in your project, simply run:

```bash
npm install super-tailwind-merge
//or
yarn add super-tailwind-merge
```

## Usage
### ES6 Import

```javascript
import superTwMerge from 'super-tailwind-merge';

const example1 = superTwMerge('text-red-500', { 'font-bold': true }, 'bg-blue-200');
console.log(example1); // Outputs: 'text-red-500 font-bold bg-blue-200'

const example2 = superTwMerge('text-red-500', 'bg-blue-200', {'text-black': true});
console.log(example2); // Outputs: 'bg-blue-200 text-black'

```

### CommonJS Require

```javascript
const superTwMerge = require('super-tailwind-merge');

const example1 = superTwMerge('text-red-500', { 'font-bold': true }, 'bg-blue-200');
console.log(example1); // Outputs: 'text-red-500 font-bold bg-blue-200'

const example2 = superTwMerge('text-red-500', 'bg-blue-200', {'text-black': true});
console.log(example2); // Outputs: 'bg-blue-200 text-black'

```

## Usage
```javascript
import superTwMerge from 'super-tailwind-merge';
// ...
const buttonClasses = superTwMerge(
  'px-4',
  { 'py-2': true, 'text-white': isActive },
  'bg-blue-500',
  { 'hover:bg-blue-600': true, 'cursor-pointer': isClickable }
);

// Apply the generated classes to your button element
<button className={buttonClasses}>Click Me</button>

// ...
```

### Notes
`super-tailwind-merge` simplifies the process of conditional class merging, enhancing code readability and maintainability when working with Tailwind CSS and conditional class application.

Feel free to contribute or report issues on [GitHub](https://github.com/ace-builds/super-tailwind-merge).