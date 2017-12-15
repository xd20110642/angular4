import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public url: string;
  //定义来接收的keyworld
  public keyword: any;
  // 定义一个来接收由服务传送过来的参数
  public product: Array<Product>;
  // 定义检查响应表单
  public titleFilter: FormControl = new FormControl();
  constructor(public productSever: ProductService) {
    this.product = this.productSever.getProducts();
    // 检查到value的值发生了变化 那么就发送流
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        a => { this.keyword = a, console.log(a)},
        err => console.log(err),
        () => console.log("发送完成")
      );
  }

  ngOnInit() {
    this.url = "http://placehold.it/320x150";
  }

}
