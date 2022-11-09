# Extension
![](https://img.shields.io/npm/types/@bivarcs/extension)
![](https://img.shields.io/node/v/@bivarcs/extension)
![](https://img.shields.io/github/license/bivarcs/extension)

A class for creating extensions.  
This package contains the Extension class and the ExtensionTarget class.
Inherits [Emitter](https://github.com/bivarcs/emitter).

## Installation
### Package Manager
npm: `npm i @bivarcs/extension`  
yarn: `yarn add @bivarcs/extension`  

A command is needed to prepare dependent libraries.

```
npm run dev:setup
yarn run dev:setup
```

## Document
- [API Documentation](https://bivarcs.github.io/extension/docs/) (via: [Typedoc](https://github.com/TypeStrong/typedoc))

## Usage

### Extension
Create original extensions.

```js
import {Extension} from './path/to'

class HogeExtension extends Extension {
  constructor(target, options) {
    super(target, options);

    // some code...
    target.on("someevent", (event) => {
      // ...
      console.log(event.data);  // "hello!"
    });
  }

  destroy() {
    super.destroy();
  }
}
```


### Target of the extension.
Create a class that accepts extensions.

```js
import {ExtensionTarget} from './path/to'

class HogeExtensionTarget extends ExtensionTarget {
  constructor(options) {
    super(options);

    this.emit("someevent", {
      data: "hello!",
    });
  }

  destroy() {
    super.destroy();
  }
}

new HogeExtensionTarget({
  extension: [
    HogeExtension.create({
      // some options
    }),
  ],
});
```

## License
Extension is available under the [MIT license](LICENSE.md).
