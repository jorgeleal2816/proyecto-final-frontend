import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweventsComponent } from './newevents.component';

describe('NeweventsComponent', () => {
  let component: NeweventsComponent;
  let fixture: ComponentFixture<NeweventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeweventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeweventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
