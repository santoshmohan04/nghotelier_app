import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomspageComponent } from './roomspage.component';

describe('RoomspageComponent', () => {
  let component: RoomspageComponent;
  let fixture: ComponentFixture<RoomspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomspageComponent]
    });
    fixture = TestBed.createComponent(RoomspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
