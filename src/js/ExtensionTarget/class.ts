import * as Extension from '../Extension'
import * as Emitter from '../Emitter'

/**
 * Collection of values returned by `Extension.create()`.
 */
export type Options = Emitter.Options & {
  extensions?: Array<Extension.Entry | { create: () => Extension.Entry }>
}

/**
 * It passes the `... instanceof Extension.Extension` check.
 */
export type ExtensionList = Array<{ destroy: () => void }>

/**
 * The class that will be the target of the extension.
 * It inherits Emitter.
 */
export class ExtensionTarget extends Emitter.Emitter {
  private readonly extensions: ExtensionList = []

  constructor(options?: Options) {
    super(options);

    if (options) {
      if (options.extensions) {
        options.extensions.forEach((entry) => {
          if (!Array.isArray(entry)) entry = entry.create();

          if (entry[0].prototype instanceof Extension.Extension) {
            this.extensions.push(new entry[0](this, entry[1]));
          }
        });
      }
    }
  }

  destroy(): void {
    this.extensions.forEach((extension) => {
      extension.destroy();
    });

    this.extensions.length = 0;

    super.destroy();
  }

  static Extension: Extension.ExtensionClass = Extension.Extension
}
