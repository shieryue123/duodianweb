'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/home', controller.home.index);
  router.get('/api/product',controller.product.list);
  router.get('/api/scroll',controller.scroll.arr)
  // router.get('/api/test',controller.home.test)
};
