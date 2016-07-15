import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
    apikey: string = '<YourMlabKeyHere>';
    workoutUrl = 'https://api.mlab.com/api/1/databases/myworkoutsapp/collections/workouts';

    constructor(private _http: Http) {
    }

    getWorkouts() {
        return this._http.get(this.workoutUrl + '?apiKey=' + this.apikey)
            .map(res => res.json());
    }

    addWorkout(workout) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.workoutUrl + '?apiKey=' + this.apikey, JSON.stringify(workout), { headers: headers })
            .map(res => res.json());
    }

    deleteWorkout(workoutId) {
       return this._http.delete(this.workoutUrl + '/' + workoutId + '?apiKey=' + this.apikey)
            .map(res => res.json());
    }

}