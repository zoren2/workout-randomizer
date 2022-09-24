import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableWorkoutListComponent } from './draggable-workout-list.component';

describe('DraggableWorkoutListComponent', () => {
  let component: DraggableWorkoutListComponent;
  let fixture: ComponentFixture<DraggableWorkoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggableWorkoutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableWorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
