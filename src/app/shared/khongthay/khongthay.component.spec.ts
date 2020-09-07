import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhongthayComponent } from './khongthay.component';

describe('KhongthayComponent', () => {
  let component: KhongthayComponent;
  let fixture: ComponentFixture<KhongthayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhongthayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhongthayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
