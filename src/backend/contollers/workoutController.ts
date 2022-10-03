import WorkoutModel from '../interfaces/workoutModel.interface'
import { Request, Response } from 'express'
import Workout from '../models/workout.model'
import mongoose, { Document } from 'mongoose'
import workoutModel from '../models/workout.model'

const getWorkouts = async (req: Request, res: Response) => {
    const workout: WorkoutModel[] = await Workout.find({}).sort({ createdAt: -1 })
    res.json(workout)
}
const createWorkout = async (req: Request, res: Response) => {
    try {
        const workout = await Workout.create(
            req.body
        )
        res.status(201).json(workout)
    } catch (error) {
        res.status(400).json({ error: error })
        console.log(error)
    }
}
const getWorkout = async (req: Request, res: Response) => {
    const id: string = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not Found', message: 'Invalid ID' })
    }
    const workout: WorkoutModel = await Workout.findById({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: 'Not Found' })
    }
    res.json(workout)
}
const deleteWorkout = async (req: Request, res: Response) => {
    const id: string = req.params.id
    // check if the ID is a valid mongoose object 12 chars || 24 hex
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not Found', message: 'Invalid ID' })
    }

    const workout: WorkoutModel = await Workout.findByIdAndDelete({ _id: id })

    if (!workout) {
        return res.status(404).json({ error: 'Not Found' })
    }

    res.status(204)
}
const patchWorkout = async (req: Request, res: Response) => {
    const id: string = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not Found', message: 'Invalid ID' })
    }

    const workout: WorkoutModel = await Workout.findByIdAndUpdate({ _id: id }, {
        // spreading the props of body into the new object (this lives in).
        // This way only the passed in properties are being sent back through this object.
        // This is exactly what PATCH does: partial update.
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error: 'Not Found' })
    }

    // this step seems to be needed if you want the response to include the new values
    // otherwise the old value (from before the PATCH) is going to be inside the response
    const updatedWorkout:WorkoutModel = await Workout.findById({_id:id})
    res.json(updatedWorkout)


}

export default {
    getWorkouts,
    deleteWorkout,
    getWorkout,
    patchWorkout,
    createWorkout
}