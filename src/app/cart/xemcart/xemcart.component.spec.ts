import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemcartComponent } from './xemcart.component';

describe('XemcartComponent', () => {
  let component: XemcartComponent;
  let fixture: ComponentFixture<XemcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
