import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLocalidadComponent } from './actualizar-localidad.component';

describe('ActualizarLocalidadComponent', () => {
  let component: ActualizarLocalidadComponent;
  let fixture: ComponentFixture<ActualizarLocalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarLocalidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
