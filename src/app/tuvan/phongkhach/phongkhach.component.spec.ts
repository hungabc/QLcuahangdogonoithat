import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongkhachComponent } from './phongkhach.component';

describe('PhongkhachComponent', () => {
  let component: PhongkhachComponent;
  let fixture: ComponentFixture<PhongkhachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhongkhachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongkhachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
