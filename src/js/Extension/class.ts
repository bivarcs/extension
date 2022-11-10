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
export type ExtensionClass = { new(target: any, options?: Options): any };

/**
 * The base class of the extension.
 */
export class Extension<T> extends Emitter.Emitter {
  /**
   * Extension identifier. Uniqueness is expected but not checked.
   */
  id: string = "unknown"

  /**
   * any Instance with an extension attached.
   */
  target: T;

  /**
   * `destroy()` to false.
   */
  status: boolean = true

  constructor(target: T, options?: Options) {
    super(options);
    this.target = target;
  }

  destroy(): void {
    super.destroy();

    this.status = false;
  }

  static create(options?: Options): Entry {
    return [this, options,];
  }
}
