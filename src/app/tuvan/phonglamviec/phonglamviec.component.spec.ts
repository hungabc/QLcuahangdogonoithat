import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonglamviecComponent } from './phonglamviec.component';

describe('PhonglamviecComponent', () => {
  let component: PhonglamviecComponent;
  let fixture: ComponentFixture<PhonglamviecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonglamviecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonglamviecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
