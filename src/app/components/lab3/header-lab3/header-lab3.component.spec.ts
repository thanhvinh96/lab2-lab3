import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLab3Component } from './header-lab3.component';

describe('HeaderLab3Component', () => {
  let component: HeaderLab3Component;
  let fixture: ComponentFixture<HeaderLab3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLab3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderLab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
