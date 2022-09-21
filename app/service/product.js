const Service = require('egg').Service;

class ProductService extends Service {
  async product({page, page_size,id}) {
    const list = await this.app.mysql.select('product',{
      where: {categoryId : id},
      limit: page_size * 1, // 返回数据量
      offset: (page - 1) * page_size ,
    });
    return [list];
  }
  async category() {
    const arr = await this.app.mysql.select('category');
    return [arr];
  }
}

module.exports = ProductService;