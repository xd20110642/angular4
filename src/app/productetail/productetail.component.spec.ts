import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductetailComponent } from './productetail.component';

describe('ProductetailComponent', () => {
  let component: ProductetailComponent;
  let fixture: ComponentFixture<ProductetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
