import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkoumeHebComponent } from './okoume-heb.component';

describe('OkoumeHebComponent', () => {
  let component: OkoumeHebComponent;
  let fixture: ComponentFixture<OkoumeHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkoumeHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkoumeHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
