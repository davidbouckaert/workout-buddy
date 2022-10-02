//import Workout from 'the model'
//import {workoutModel} from 'interfaces'
import {Request, Response} from 'express'

const workout_index = (req:Request, res:Response)=>{
    res.json({ message: 'GET all workouts' })
}
const workout_post = (req:Request, res:Response)=>{
    res.json({ message: 'CREATE a workout' })
}
const workout_id_get = (req:Request, res:Response)=>{
    res.json({ message: 'GET a single workout' })
}
const workout_id_delete = (req:Request, res:Response)=>{
    res.json({ message: 'DELETE a workout' })
}
const workout_id_patch = (req:Request, res:Response)=>{
    res.json({ message: 'PARTIAL UPDATE a workout' })
}

export default {
    workout_index,
    workout_id_delete,
    workout_id_get,
    workout_id_patch,
    workout_post
}