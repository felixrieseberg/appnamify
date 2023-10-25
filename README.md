# appnamify

A very small module that returns a string that's safe to use as
name for an application inside Electron tooling. It's only
extracted out as its own module because it's used across
packages.

```js
const { appnamify } = require('appnamify')

// Returns "My-Weird-App-Name"
const safeString = appnamify('My Weird App%Name')
```
