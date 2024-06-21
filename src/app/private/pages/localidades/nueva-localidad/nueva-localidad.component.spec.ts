import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaLocalidadComponent } from './nueva-localidad.component';

describe('NuevaLocalidadComponent', () => {
  let component: NuevaLocalidadComponent;
  let fixture: ComponentFixture<NuevaLocalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevaLocalidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevaLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
