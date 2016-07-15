import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutsPage } from '../workouts/workouts';

import {Workout} from '../../workout';


@Component({
    templateUrl: 'build/pages/workout-details/workout-details.html',
    providers: [WorkoutService]
})
export class WorkoutDetailsPage implements OnInit {

    workout: Workout;
    result;

    constructor(
        private _nav: NavController,
        private _navParams: NavParams,
        private _workoutService:WorkoutService) {
        
        this.workout = this._navParams.get('workout');
    }

    ngOnInit() {
        this.workout = this._navParams.get('workout');
    }

    deleteWorkout(workoutId) {
        this._workoutService.deleteWorkout(workoutId)
            .subscribe(
            data => { this.result = data },
            err => console.log(err),
            () => console.log('Workout Deleted')
            );

        this._nav.setRoot(WorkoutsPage)


    }


}