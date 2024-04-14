import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialpageComponent } from './testimonialpage.component';

describe('TestimonialpageComponent', () => {
  let component: TestimonialpageComponent;
  let fixture: ComponentFixture<TestimonialpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialpageComponent]
    });
    fixture = TestBed.createComponent(TestimonialpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
