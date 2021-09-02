/**
 * Singleton class.
 */
class Singleton {
  /**
   * Property to hold the Singleton instance.
   * @type {Singleton}
   */
  static #instance = null;

  /**
   * Create a new Singleton instance. This constructor cannot be accessed from outside of this class.
   * @private
   */
  constructor() { }

  /**
   * Get the Singleton instance. If the Singleton instance is not exists, then a new instance will be created.
   * If the Singleton instance is exists, it will be returned to the caller.
   * @returns {Singleton}
   * @example
   * const instance1 = Singleton.getInstance();
   * const instance2 = Singleton.getInstance();
   * console.log(instance1 === instance2); // true
   */
  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton()
    }
    return Singleton.#instance;
  }
}

module.exports = Singleton;