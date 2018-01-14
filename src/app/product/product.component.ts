import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;
  private productName: string;

  constructor(private routerInfo: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.productId = this.routerInfo.snapshot.queryParams['id'];

    // this.productId = this.routerInfo.snapshot.params['id'];

    this.routerInfo.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });

    // resolve守卫, 左右在于进入组件之前把组件需要的数据都准备好
    this.routerInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

  goToSeller() {
    this.router.navigate(['/product/2/seller', 99]);
  }

}


export class Product {
  constructor(
    public id: number,
    public name: string
  ) {}
}
