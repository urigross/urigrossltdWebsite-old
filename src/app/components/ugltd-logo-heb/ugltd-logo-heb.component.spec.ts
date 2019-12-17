import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgltdLogoHebComponent } from './ugltd-logo-heb.component';

describe('UgltdLogoHebComponent', () => {
  let component: UgltdLogoHebComponent;
  let fixture: ComponentFixture<UgltdLogoHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgltdLogoHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgltdLogoHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
