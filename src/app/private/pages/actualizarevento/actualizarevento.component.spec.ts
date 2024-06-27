import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizareventoComponent } from './actualizarevento.component';

describe('ActualizareventoComponent', () => {
  let component: ActualizareventoComponent;
  let fixture: ComponentFixture<ActualizareventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizareventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizareventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
