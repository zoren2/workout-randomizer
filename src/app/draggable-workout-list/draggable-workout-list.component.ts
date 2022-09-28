import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggable-workout-list',
  templateUrl: './draggable-workout-list.component.html',
  styleUrls: ['./draggable-workout-list.component.scss']
})
export class DraggableWorkoutListComponent implements OnInit {
  workouts = [
    {
      exercise: 'Back Squat',
      weight: '155'
    },
    {
      exercise: 'Barbell Bench Press',
      weight: '115'
    },
    {
      exercise: 'Lat Pulldown',
      weight: '95'
    },
    {
      exercise: 'Deadlift',
      weight: '185'
    }
    ,
    {
      exercise: 'Dip',
      weight: '175'
    }
    ,
    {
      exercise: 'Standing Calf Raise',
      weight: '320'
    },
    {
      exercise: 'Dumbbell Supinated Curl',
      weight: '30'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.workouts, event.previousIndex, event.currentIndex);
  }

}
