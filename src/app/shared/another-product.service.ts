import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';

@Injectable()
export class AnotherProductService implements ProductService {
  getProduct(): Product {
    return new Product(1, 'Vivo', 4899, '你的手机');
  }

  constructor() { }

}
