import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { StartComponent } from './start/start.component';
import { CarouselComponent } from './carousel/carousel.component';
import {ProductService} from "./shared/product.service";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { ProductetailComponent } from './productetail/productetail.component';
import { ErrComponent } from './err/err.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipePipe} from "./pipe/pipe.pipe";

// 定义路由
const Routetconfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:title', component: ProductetailComponent},
  {path: '**', component: ErrComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProductComponent,
    SearchComponent,
    StartComponent,
    CarouselComponent,
    HomeComponent,
    ProductetailComponent,
    ErrComponent,
    PipePipe,
  ],
  imports: [
    BrowserModule,
    // 这里必须加入这个
    RouterModule.forRoot(Routetconfig),
  //  验证表单所用到的响应式编程依赖模块
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
