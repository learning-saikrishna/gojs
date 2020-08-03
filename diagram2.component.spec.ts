import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagram2Component } from './diagram2.component';

describe('Diagram2Component', () => {
  let component: Diagram2Component;
  let fixture: ComponentFixture<Diagram2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diagram2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diagram2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
