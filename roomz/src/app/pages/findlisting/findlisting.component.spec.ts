import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindlistingComponent } from './findlisting.component';

describe('FindlistingComponent', () => {
  let component: FindlistingComponent;
  let fixture: ComponentFixture<FindlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindlistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
