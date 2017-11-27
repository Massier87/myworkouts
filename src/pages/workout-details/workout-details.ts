import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
  selector: 'workoutdetails',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {

  public workout: any;
  public result: any;

  constructor(public navCtrl: NavController, public params: NavParams, private workoutService: WorkoutService) {
      this.workout = this.params.get('workout');
      console.log("WorkOutDetailsPage");
      console.log(this.workout);
  }

  deleteWorkout(workoutId){

    this.workoutService.deleteWorkout(workoutId).subscribe(data => {
      this.result  = data;
    });

    this.navCtrl.push(WorkoutsPage);
  }
}
