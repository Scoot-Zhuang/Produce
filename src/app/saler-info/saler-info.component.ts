import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-saler-info',
  templateUrl: './saler-info.component.html',
  styleUrls: ['./saler-info.component.css']
})
export class SalerInfoComponent implements OnInit {

  private sellerId: number;

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.sellerId = this.routerInfo.snapshot.params['id'];

    // 本路由跳转到本路由时需要以参数订阅的方式获取url里面的参数
    this.routerInfo.params.subscribe((params: Params) => {
      this.sellerId = params['id'];
    });
  }

}
