import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinHebComponent } from './twin-heb.component';

describe('TwinHebComponent', () => {
  let component: TwinHebComponent;
  let fixture: ComponentFixture<TwinHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwinHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
