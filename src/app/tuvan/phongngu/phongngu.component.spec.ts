import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongnguComponent } from './phongngu.component';

describe('PhongnguComponent', () => {
  let component: PhongnguComponent;
  let fixture: ComponentFixture<PhongnguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhongnguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongnguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
