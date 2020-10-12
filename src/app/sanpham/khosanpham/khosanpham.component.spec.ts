import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhosanphamComponent } from './khosanpham.component';

describe('KhosanphamComponent', () => {
  let component: KhosanphamComponent;
  let fixture: ComponentFixture<KhosanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhosanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhosanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
