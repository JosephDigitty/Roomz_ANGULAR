import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalabilityComponent } from './avalability.component';

describe('AvalabilityComponent', () => {
  let component: AvalabilityComponent;
  let fixture: ComponentFixture<AvalabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvalabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvalabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
