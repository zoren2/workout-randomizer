import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DraggableWorkoutListComponent } from './draggable-workout-list/draggable-workout-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WorkoutCardComponent } from './workout-card/workout-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DraggableWorkoutListComponent,
    WorkoutCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
