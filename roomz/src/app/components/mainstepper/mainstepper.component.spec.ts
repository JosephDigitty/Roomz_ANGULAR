import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainstepperComponent } from './mainstepper.component';

describe('MainstepperComponent', () => {
  let component: MainstepperComponent;
  let fixture: ComponentFixture<MainstepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainstepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
