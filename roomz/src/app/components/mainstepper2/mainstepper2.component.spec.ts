import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainstepper2Component } from './mainstepper2.component';

describe('Mainstepper2Component', () => {
  let component: Mainstepper2Component;
  let fixture: ComponentFixture<Mainstepper2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainstepper2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainstepper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
