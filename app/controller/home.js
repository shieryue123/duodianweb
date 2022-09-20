'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');


class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const banner = await ctx.service.home.banner();
    const mull_nav = await ctx.service.home.mull_nav();
    const hot_nav = await ctx.service.home.hot_nav();
    ctx.body = {
      code:1,
      data:{
        banner,
        mull_nav,
        hot_nav
      }
    };
  }

  // async test() {
  //   const content = fs.readFileSync(path.resolve(__dirname,'../public/test.json'),'utf-8')
  //   const text = JSON.parse(content)
  //   const { ctx } = this;
  //   // console.log(text);
  //   for(let i=0 ; i < text.length ; i++){
  //     const imgUrl = text[i].floorCellData.imgUrl;
  //     const title = text[i].floorCellData.title
  //     await this.app.mysql.insert('mull_nav', { 
  //       title: title,
  //       image:imgUrl
  //     })
  //   }
  //   ctx.body = {
  //     code:1,
  //     message:'添加成功'
  //   }
  // }
}

module.exports = HomeController;
