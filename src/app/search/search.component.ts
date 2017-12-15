import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public formModel;
  public lei: string[ ];
  constructor(public fb: FormBuilder, public pro: ProductService) {
    this.formModel = fb.group({
      product: ['', Validators.minLength(3)],
      price: ['', this.positiveNumberValidator],
      aa: ['']
    });
    this.lei = this.pro.getProductLei();
  }

  ngOnInit() {
  }
//   添加验证规则
  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    let price = parseInt(control.value);
    if (price > 0) {
      return null;
    }
    else {
      return {positiveNumber: true};
    }
  }
//   验证表单是否有校
  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
