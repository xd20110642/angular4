import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  // 初始化产品类
  public products: Array<Product> = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学时创建的', ['电子产品', '123']),
    new Product(2, '第2个商品', 1.69, 3, '这是第一个商品，是我在学时创建的', ['电子产品', '123']),
    new Product(3, '第3个商品', 1.79, 2, '这是第一个商品，是我在学时创建的', ['电子产品', '123']),
    new Product(4, '第4个商品', 1.00, 5, '这是第一个商品，是我在学时创建的', ['电子产品', '123']),
    new Product(5, '第5个商品', 2, 3, '这是第一个商品，是我在学时创建的', ['电子产品', '123']),
    new Product(6, '第6个商品', 6, 3.5, '这是第一个商品，是我在学时创建的', ['电子产品', '123']),
  ]
  constructor() { }
//  定义一个方法返回所有的产品信息
  getProducts(): Array<Product> {
    return this.products;
  }
//  定义一个收索的方法 更具id返回商品 这个是数组里面的方法
  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id　);
  }
// 返回产品的类型
  getProductLei(): any {
    return ['电子产品', '123', '465'];
  }
}
// 定义产品类
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
