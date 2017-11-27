import {Injectable} from "@angular/core";
import {HttpModule, Headers, RequestOptions, Http, ConnectionBackend} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutService{
  http:any;
  apiKey: string;
  workOutsUrl: string;

  constructor(private httpProvider: Http ){
    this.http = this.httpProvider;
    this.apiKey = 'API_KEY';
    this.workOutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts/collections/workouts';
  }

  getWorkouts(){
    return this.http.get(this.workOutsUrl+'?apiKey='+this.apiKey)
      .map(res => res.json());
  }

  addWorkOut(workout) {

    var headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post(this.workOutsUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout), {headers: headers})
      .map(res => res.json());

  }

  deleteWorkout(workoutId) {
    return this.http.delete(this.workOutsUrl + '/' + workoutId + '?apiKey=' + this.apiKey )
      .map(res => res.json());
  }
}
