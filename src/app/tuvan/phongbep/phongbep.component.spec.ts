import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongbepComponent } from './phongbep.component';

describe('PhongbepComponent', () => {
  let component: PhongbepComponent;
  let fixture: ComponentFixture<PhongbepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhongbepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongbepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
