import * as Extension from '../Extension'
import * as Emitter from '../Emitter'

/**
 * Collection of values returned by `Extension.create()`.
 */
export type Options = Emitter.Options & {
  extensions?: Extension.EntryList
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

  constructor(options: Options) {
    super(options);

    if (options) {
      if (options.extensions) {
        options.extensions.forEach((entry) => {
          if (entry[0] instanceof Extension.Extension) {
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

    super.destroy();
  }
}
