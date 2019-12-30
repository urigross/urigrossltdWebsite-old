import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwoodHebComponent } from './hardwood-heb.component';

describe('HardwoodHebComponent', () => {
  let component: HardwoodHebComponent;
  let fixture: ComponentFixture<HardwoodHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwoodHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwoodHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
