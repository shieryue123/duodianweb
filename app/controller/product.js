'use strict';

'use strict';

const Controller = require('egg').Controller;

const arrayToTree = arr => {
  const newArr = [];
  const arrJSON = {};
  arr.forEach(item => {
    arrJSON[item.categoryId] = item
    if(item.parentId === 0){
      newArr.push(item)
    }
  });
  arr.forEach(item => {
    if(item.parentId !== 0){
      const parent = arrJSON[ item.parentId ]
      if(parent.children){
        parent.children.push(item)
      }else{
        parent.children = [ item ]
      }
    }
  })
  return newArr
}

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
    const data = await ctx.service.product.category();
    ctx.body = {
      code:1,
      data:arrayToTree(data)
    };
  }
}

module.exports = ProductController;