import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlywoodHebComponent } from './plywood-heb.component';

describe('PlywoodHebComponent', () => {
  let component: PlywoodHebComponent;
  let fixture: ComponentFixture<PlywoodHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlywoodHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlywoodHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
