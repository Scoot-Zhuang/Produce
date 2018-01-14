import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品啦啦啦', ['电子产品', '软件开发'] ),
    new Product(2, '第二个商品', 2.99, 4.5, '这是第一个商品啦啦啦', ['电子产品', '软件开发'] ),
    new Product(3, '第三个商品', 3.99, 3.5, '这是第一个商品啦啦啦', ['电子产品', '软件开发'] ),
    new Product(4, '第四个商品', 4.99, 3.5, '这是第一个商品啦啦啦', ['电子产品', '软件开发'] ),
    new Product(5, '第五个商品', 5.99, 2.5, '这是第一个商品啦啦啦', ['电子产品', '软件开发'] ),
    new Product(6, '第六个商品', 6.99, 3.5, '这是第一个商品啦啦啦', ['电子产品', '软件开发'] ),
    new Product(5, '第五个商品', 5.99, 2.5, '这是第一个商品啦啦啦', ['电子产品', '软件开发'] ),
    new Product(6, '第六个商品', 6.99, 3.5, '这是第一个商品啦啦啦', ['电子产品', '软件开发'] )

  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2018-1-14', '海涛', 3.5, '不错哦',6),
    new Comment(1, 1, '2018-1-14', '毛首元', 4.5, '不错哦',6),
    new Comment(2, 1, '2018-1-14', '王龙', 3.5, '不错哦',6),
    new Comment(3, 1, '2018-1-14', '张慎慎', 2.5, '不错哦',6),
    new Comment(4, 2, '2018-1-14', '史召', 3.5, '不错哦',6),
    new Comment(5, 2, '2018-1-14', '张颖', 4.5, '不错哦',6),
    new Comment(6, 3, '2018-1-14', '盼盼', 3.5, '不错哦' ,6),
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentForProduct(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categorties: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public time: string,
    public userName: string,
    public rating: number,
    public content: string,
    public niceNum: number
  ) {}
}

