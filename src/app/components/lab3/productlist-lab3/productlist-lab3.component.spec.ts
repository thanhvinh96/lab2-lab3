import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistLab3Component } from './productlist-lab3.component';

describe('ProductlistLab3Component', () => {
  let component: ProductlistLab3Component;
  let fixture: ComponentFixture<ProductlistLab3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductlistLab3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductlistLab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
