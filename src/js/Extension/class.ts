import * as Emitter from '../Emitter'

/**
 * The `on` is used for Emitter.
 */
export type Options = Emitter.Options;

/**
 * The first argument is guaranteed to be a class that extends the Extension class.
 */
export type Entry = [ExtensionClass, Options?,];

export type EntryList = Array<Entry>;

/**
 * guaranteed to be a class that inherits from Extension.  
 * (class ChildClass extends Extension)  
 * TODO: Learning better type definition.
 */
export type ExtensionClass = { new(target: object, options?: Options): any };

/**
 * The base class of the extension.
 */
export class Extension extends Emitter.Emitter {
  /**
   * Extension identifier. Uniqueness is expected but not checked.
   */
  id: string = "unknown"

  /**
   * any Instance with an extension attached.
   */
  target: object;

  static create(options?: Options): Entry {
    return [this, options,];
  }

  constructor(target: object, options?: Options) {
    super(options);
    this.target = target;
  }

  destroy(): void {
    super.destroy();
  }
}
