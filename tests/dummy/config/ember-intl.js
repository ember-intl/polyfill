/* eslint-env node */

const { VENDOR } = require('../../../lib/strategies');

module.exports = function(/* env */) {
  return {
    /**
    * The locales that are application supports.
    *
    * This is optional and is automatically set if project stores translations
    * where ember-intl is able to look them up (<project root>/translations/).
    *
    * If the project relies on side-loading translations, then you must explicitly
    * list out the locales. i.e: ['en-us', 'en-gb', 'fr-fr']
    *
    * @property locales
    * @type {Array}
    * @default []
    */
    locales: ['en-us', 'fr-fr'],

    /**
    * autoPolyfill, when true will automatically inject the IntlJS polyfill
    * into index.html
    *
    * @property autoPolyfill
    * @type {Boolean}
    * @default false
    */
    autoPolyfill: {
      strategy: VENDOR
    },

    /**
    * disablePolyfill prevents the polyfill from being bundled in the asset folder of the build
    *
    * @property disablePolyfill
    * @type {Boolean}
    * @default false
    */
    disablePolyfill: false,

    /**
     * When set, polyfill will overwrite the Intl global
     *
     * @property forcePolyfill
     * @type {Boolean}
     * @default false
     */
    forcePolyfill: true
  };
};
