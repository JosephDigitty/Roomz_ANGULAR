import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatComponent } from './great.component';

describe('GreatComponent', () => {
  let component: GreatComponent;
  let fixture: ComponentFixture<GreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
