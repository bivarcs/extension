/**
 * event type.
 */
declare type Type = string;
/**
 * Second argument of `emit()`.
 */
declare type Data = any;
/**
 * Passed to the callback function.
 */
declare type EmitterEvent = Data & {
    readonly type: Type;
    readonly target: object;
};
/**
 * A function called when a event occurs.
 */
declare type Listener = (event: EmitterEvent) => void;
/**
 * Data for individual event listeners.
 */
declare type Entry$1 = [Type, Listener, ListenerOptions];
/**
 * A collection of Entry.
 */
declare type EntryList$1 = Array<Entry$1>;
/**
 * Options for event listeners.
 *
 * once: One-time run.
 * order: Order in events of the same type.
 */
declare type ListenerOptions = {
    readonly once?: boolean;
    readonly order?: number;
};
/**
 * class options.
 *
 * on: Event listeners registered at instance initialization.
 */
declare type Options$2 = {
    on?: EntryList$1;
    [key: string]: any;
};
/**
 * class
 */
declare class Emitter {
    private Emitter$entries;
    constructor(options?: Options$2);
    /**
     * Add an event.
     */
    on(type: Type, callback: Listener, options?: ListenerOptions): void;
    /**
     * Remove an event.
     */
    off(type: Type, callback: Listener): void;
    /**
     * Emit an event.
     */
    emit(type: Type, data?: Data): EmitterEvent;
    /**
     * Remove all events and stop functioning.
     */
    destroy(): void;
}

/**
 * The `on` is used for Emitter.
 */
declare type Options$1 = Options$2;
/**
 * The first argument is guaranteed to be a class that extends the Extension class.
 */
declare type Entry = [ChildClass, Options$1?];
declare type EntryList = Array<Entry>;
/**
 * guaranteed to be a class that inherits from Extension.
 * (class ChildClass extends Extension)
 * TODO: Learning better type definition.
 */
declare type ChildClass = {
    new (target: object, options?: Options$1): any;
};
/**
 * The base class of the extension.
 */
declare class Extension extends Emitter {
    /**
     * Extension identifier. Uniqueness is expected but not checked.
     */
    id: string;
    /**
     * any Instance with an extension attached.
     */
    target: object;
    static create(options?: Options$1): Entry;
    constructor(target: object, options?: Options$1);
    destroy(): void;
}

/**
 * Collection of values returned by `Extension.create()`.
 */
declare type Options = Options$2 & {
    extensions?: EntryList;
};
/**
 * The class that will be the target of the extension.
 * It inherits Emitter.
 */
declare class ExtensionTarget extends Emitter {
    private readonly extensions;
    constructor(options: Options);
    destroy(): void;
}

declare const _default: {
    Extension: typeof Extension;
    ExtensionTarget: typeof ExtensionTarget;
};

export { _default as default };
