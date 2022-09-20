const Service = require('egg').Service;

function arrayToTree(items) {
  const result = [];   
  const itemMap = {};  
  items.forEach(item => {
    itemMap[item.categoryId] = {...item, children: []}
    const treeItem =  itemMap[item.categoryId];
    if (item.parentId === 0) {
      result.push(treeItem);
    } else {
      itemMap[item.parentId].children.push(treeItem)
    }
  })
  return result;
}

class ProductService extends Service {
  async product() {
    const arr = await this.app.mysql.select('category');
    return arrayToTree(arr)
  }
}

module.exports = ProductService;