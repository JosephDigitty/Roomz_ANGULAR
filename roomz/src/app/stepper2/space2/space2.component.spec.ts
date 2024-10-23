import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Space2Component } from './space2.component';

describe('Space2Component', () => {
  let component: Space2Component;
  let fixture: ComponentFixture<Space2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Space2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Space2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
