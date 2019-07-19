import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDesignsComponent } from './vehicle-designs.component';

describe('VehicleDesignsComponent', () => {
  let component: VehicleDesignsComponent;
  let fixture: ComponentFixture<VehicleDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
