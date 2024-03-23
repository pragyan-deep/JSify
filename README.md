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

const list = [
    { name: "1 ABC"},
    { name: "CBA"},
    { name: "11 A"},
    { name: "ZA"},
    { name: "AAA"},
    { name: "VA"},
    { name: "A1"},
    { name: "ABA"},
    { name: "2 A"},
]; 
const sortedList = sortBy(list, "desc", (compare, a, b) => compare(a.name, b.name))