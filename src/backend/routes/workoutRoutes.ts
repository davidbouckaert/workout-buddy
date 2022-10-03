import express, { Router } from 'express'
import workoutController from '../contollers/workoutController'


// create router
const router: Router = express.Router()

// using a controller with /workouts as the entry point
router.get('/', workoutController.getWorkouts)
router.post('/', workoutController.createWorkout)
router.get('/:id', workoutController.getWorkout)
router.delete('/:id', workoutController.deleteWorkout)
router.patch('/:id', workoutController.patchWorkout)

export default router