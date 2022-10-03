import { model, Schema } from 'mongoose'
import WorkoutModel from '../interfaces/workoutModel.interface'

const workoutSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

export default model<WorkoutModel>('Workout', workoutSchema)