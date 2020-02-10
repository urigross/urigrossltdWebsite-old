import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirchHebComponent } from './birch-heb.component';

describe('BirchHebComponent', () => {
  let component: BirchHebComponent;
  let fixture: ComponentFixture<BirchHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirchHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirchHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
