import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestylesComponent } from './lifestyles.component';

describe('LifestylesComponent', () => {
  let component: LifestylesComponent;
  let fixture: ComponentFixture<LifestylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifestylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifestylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
