import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  public title: string;
  public note: string;
  public type: string;
  public result: any;


  constructor(public navCtrl: NavController, private workoutService:WorkoutService) {

  }

  onsubmit(){


    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    this.workoutService.addWorkOut(workout).subscribe(data => {
      this.result = data;
    })

    // It is better if the redirection happens after the service function returns
    console.log('Submitted');
    this.navCtrl.push(WorkoutsPage);
  }

}
