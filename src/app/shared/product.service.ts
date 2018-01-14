import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct() {
    return new Product(0, 'iphone6s', 6088, '我的手机');
  }

}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}
