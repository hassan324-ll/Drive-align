import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedbacks } from './feedbacks';

describe('Feedbacks', () => {
  let component: Feedbacks;
  let fixture: ComponentFixture<Feedbacks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feedbacks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feedbacks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
