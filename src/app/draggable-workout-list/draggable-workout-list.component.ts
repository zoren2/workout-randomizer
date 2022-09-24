import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggable-workout-list',
  templateUrl: './draggable-workout-list.component.html',
  styleUrls: ['./draggable-workout-list.component.scss']
})
export class DraggableWorkoutListComponent implements OnInit {
  workouts = [
    'Back Squat',
    'Barbell Bench Press',
    'Lat Pulldown',
    'Romanian Deadlift',
    'Assisted Dip',
    'Standing Calf Raise',
    'Dumbbell Supinated Curl'
  ];


  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.workouts, event.previousIndex, event.currentIndex);
  }

}
