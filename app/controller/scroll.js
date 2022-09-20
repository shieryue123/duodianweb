'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async arr() {
    const { ctx } = this;
    const data = await ctx.service.scroll.product();
    ctx.body = {
      code:1,
      data
    };
  }
}

module.exports = ProductController;