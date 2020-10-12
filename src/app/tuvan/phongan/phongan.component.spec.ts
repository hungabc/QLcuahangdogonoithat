import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonganComponent } from './phongan.component';

describe('PhonganComponent', () => {
  let component: PhonganComponent;
  let fixture: ComponentFixture<PhonganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
