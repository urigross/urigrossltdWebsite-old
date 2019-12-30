import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHebComponent } from './map-heb.component';

describe('MapHebComponent', () => {
  let component: MapHebComponent;
  let fixture: ComponentFixture<MapHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
