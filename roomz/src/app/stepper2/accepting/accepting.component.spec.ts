import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptingComponent } from './accepting.component';

describe('AcceptingComponent', () => {
  let component: AcceptingComponent;
  let fixture: ComponentFixture<AcceptingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
