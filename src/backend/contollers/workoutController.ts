import WorkoutModel from '../interfaces/workoutModel.interface'
import { Request, Response } from 'express'
import Workout from '../models/workout.model'
import { Document } from 'mongoose'

const workout_index = (req: Request, res: Response) => {
    res.json({ message: 'GET all workouts' })
}
const workout_post = async (req: Request, res: Response) => {
    const { title, reps, load }: WorkoutModel = req.body
    try {
        const workout = await Workout.create({
            title,
            load,
            reps
        })
        res.status(201).json(workout)
    } catch (error) {
        res.status(400).json({error: error})
        console.log(error)
    }
    /* const workout: WorkoutModel = new Workout(
        req.body
    )
    workout.save()
        .then((result) => {
            console.log('New workout added to the database')
        })
        .catch((err) => {
            console.log(err)
        }) */
}
const workout_id_get = (req: Request, res: Response) => {
    res.json({ message: 'GET a single workout' })
}
const workout_id_delete = (req: Request, res: Response) => {
    res.json({ message: 'DELETE a workout' })
}
const workout_id_patch = (req: Request, res: Response) => {
    res.json({ message: 'PARTIAL UPDATE a workout' })
}

export default {
    workout_index,
    workout_id_delete,
    workout_id_get,
    workout_id_patch,
    workout_post
}