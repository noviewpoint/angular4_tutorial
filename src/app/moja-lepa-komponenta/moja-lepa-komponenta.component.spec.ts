import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojaLepaKomponentaComponent } from './moja-lepa-komponenta.component';

describe('MojaLepaKomponentaComponent', () => {
  let component: MojaLepaKomponentaComponent;
  let fixture: ComponentFixture<MojaLepaKomponentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojaLepaKomponentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojaLepaKomponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
