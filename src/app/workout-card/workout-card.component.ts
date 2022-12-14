import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss']
})
export class WorkoutCardComponent implements OnInit {

  @Input() cardExercise!: { exercise: String, weight: String };

  constructor() { }

  ngOnInit(): void {
  }

}
