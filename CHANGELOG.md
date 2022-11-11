# Changelog
All notable changes to this project will be documented in this file.

## [0.0.4] - 2022-11-11
### New Features
- ExtensionTarget's options.extensions accepts Extensions as well as EntryList.

```js
new ExtensionTarget({
  extensions: [
    Extension.create(),
    Extension,  // When there are no arguments, you can omit `create()`.
  ],
});
```

## [0.0.3] - 2022-11-10
### New Features
- Added `status` property.

### Breaking changes
- Changed to a generic expression type.

### Fix
- Improved the class inheritance check method.

## [0.0.2] - 2022-11-09
### New Features
- ExtensionTarget class has `static Extention: Extension`.
- The second argument of Extension class is not required.

## [0.0.1] - 2022-11-09
Initial version.