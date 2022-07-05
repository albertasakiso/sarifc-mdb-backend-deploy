'use strict';

/**
 * fakestore router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fakestore.fakestore');
