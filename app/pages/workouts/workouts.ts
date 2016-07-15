import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

import {Workout} from '../../workout';

@Component({
    templateUrl: 'build/pages/workouts/workouts.html',
    providers: [WorkoutService]
})

export class WorkoutsPage implements OnInit {

    workouts: Workout[];

    constructor(
        private _workoutService: WorkoutService,
        private _nav: NavController,
        private _navParams: NavParams
    ) {

    }

    ngOnInit() {
        this._workoutService.getWorkouts()
            .subscribe(wk => this.workouts = wk)
    }

    workoutSelected($event, workout) {
        this._nav.push(WorkoutDetailsPage, {
            workout: workout
        });

    }
}