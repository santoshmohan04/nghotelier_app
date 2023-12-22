import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpaginationComponent } from './headerpagination.component';

describe('HeaderpaginationComponent', () => {
  let component: HeaderpaginationComponent;
  let fixture: ComponentFixture<HeaderpaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderpaginationComponent]
    });
    fixture = TestBed.createComponent(HeaderpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
