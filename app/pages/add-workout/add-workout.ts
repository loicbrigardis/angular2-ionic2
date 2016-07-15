import {Component} from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { NavController } from 'ionic-angular';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
    templateUrl: 'build/pages/add-workout/add-workout.html',
    providers: [WorkoutService]
})

export class AddWorkoutPage {
    title: string;
    note: string;
    type: string;
    result;

    constructor(
        private _workoutService: WorkoutService,
        private _nav: NavController
    ) { }

    onSubmit() {
        var workout = {
            title: this.title,
            note: this.note,
            type: this.type
        }

        //AddWorkout
        this._workoutService.addWorkout(workout)
            .subscribe(
            data => { this.result = data },
            err => console.log(err),
            () => console.log('Workout Added')
            );

            this._nav.setRoot(WorkoutsPage)

    };


}
