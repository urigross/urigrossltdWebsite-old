import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfHebComponent } from './mdf-heb.component';

describe('MdfHebComponent', () => {
  let component: MdfHebComponent;
  let fixture: ComponentFixture<MdfHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
