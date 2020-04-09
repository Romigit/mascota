import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarMascotaComponent } from './cargar-mascota.component';

describe('CargarMascotaComponent', () => {
  let component: CargarMascotaComponent;
  let fixture: ComponentFixture<CargarMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
