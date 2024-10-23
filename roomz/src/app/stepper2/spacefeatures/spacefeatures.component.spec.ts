import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacefeaturesComponent } from './spacefeatures.component';

describe('SpacefeaturesComponent', () => {
  let component: SpacefeaturesComponent;
  let fixture: ComponentFixture<SpacefeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacefeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacefeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
