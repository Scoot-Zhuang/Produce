import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {LoggerService} from '../shared/logger.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  private product: Product;

  constructor(private producrService: ProductService, private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.log('loggerService被调用');

    this.product = this.producrService.getProduct();
  }

}
