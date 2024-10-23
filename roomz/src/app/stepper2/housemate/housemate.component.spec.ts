import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousemateComponent } from './housemate.component';

describe('HousemateComponent', () => {
  let component: HousemateComponent;
  let fixture: ComponentFixture<HousemateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousemateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousemateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
