'use strict';

/**
 * fakestore service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fakestore.fakestore');
