'use strict';

/**
 *  fakestore controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::fakestore.fakestore');
