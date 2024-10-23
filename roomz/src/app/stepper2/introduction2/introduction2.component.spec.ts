import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction2Component } from './introduction2.component';

describe('Introduction2Component', () => {
  let component: Introduction2Component;
  let fixture: ComponentFixture<Introduction2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introduction2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
