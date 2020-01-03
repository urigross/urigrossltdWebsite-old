import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlywoodSideNavbarComponent } from './plywood-side-navbar.component';

describe('PlywoodSideNavbarComponent', () => {
  let component: PlywoodSideNavbarComponent;
  let fixture: ComponentFixture<PlywoodSideNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlywoodSideNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlywoodSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
