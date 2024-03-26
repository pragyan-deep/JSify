## Installing

### Package manager

Using npm:

```bash
$ npm install @jtsify/jtsify
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { sortBy } from '@jtsify/jtsify';
```

If you use `require` for importing, **only default export is available**:

```js
const jtsify = require('@jtsify/jtsify');
```

## Example

> **Note**: CommonJS usage  
> In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()`, use the following approach:

```js

import { sortBy } from '@jtsify/jtsify';
//const jtsify = require('@jtsify/jtsify'); // legacy way

const jtsify = require("@jtsify/jtsify")

const a = [
    { name: "1 A"},
    { name: "CBA"},
    { name: "11 A"},
    { name: "ZA"},
    { name: "AAA"},
    { name: "VA"},
    { name: "A1"},
    { name: "ABA"},
    { name: "2 A"},
];

const sortedAsc = jtsify.sortBy(a, "asc", (compare, a, b) => compare(a.name, b.name));
// Result:  
// [
//   { name: '1 A' },
//   { name: '2 A' },
//   { name: '11 A' },
//   { name: 'A1' },
//   { name: 'AAA' },
//   { name: 'ABA' },
//   { name: 'CBA' },
//   { name: 'VA' },
//   { name: 'ZA' }
// ]

const sortedDsc = jtsify.sortBy(a, "desc", (compare, a, b) => compare(a.name, b.name));
// Result:  
// [
//   { name: 'ZA' },
//   { name: 'VA' },
//   { name: 'CBA' },
//   { name: 'ABA' },
//   { name: 'AAA' },
//   { name: 'A1' },
//   { name: '11 A' },
//   { name: '2 A' },
//   { name: '1 A' }
// ]