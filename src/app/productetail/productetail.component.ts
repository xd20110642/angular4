import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";

@Component({
  selector: 'app-productetail',
  templateUrl: './productetail.component.html',
  styleUrls: ['./productetail.component.css']
})
export class ProductetailComponent implements OnInit {
  public productTile: any;
  // 定义通过路由传参获取的数据
  constructor( public router: ActivatedRoute) {
    this.productTile = this.router.snapshot.params['title'];
    console.log(this.productTile);
  }

  ngOnInit() {
  }

}
