import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TegoTlatOsbHebComponent } from './tego-tlat-osb-heb.component';

describe('TegoTlatOsbHebComponent', () => {
  let component: TegoTlatOsbHebComponent;
  let fixture: ComponentFixture<TegoTlatOsbHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TegoTlatOsbHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TegoTlatOsbHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
