'use strict';

'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx } = this;
    const {
      page = 1,
      page_size=10,
      id = 119
    } = ctx.query
    const product = await ctx.service.product.product({
      page,
      page_size,
      id
    });
    ctx.body = {
      code:1,
      product: product[0].map(item => {
        return {
          ...item
        }
      })
    };
  }
  async app() {
    const { ctx } = this;
    const data = await ctx.service.product.app();
    ctx.body = {
      code:1,
      data,
    };
  }
}

module.exports = ProductController;