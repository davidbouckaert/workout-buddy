import express, { Router } from 'express'
import workoutController from '../contollers/workoutController'


// create router
const router: Router = express.Router()

// using a controller with /workouts as the entry point
router.get('/', workoutController.workout_index)
router.post('/', workoutController.workout_post)
router.get('/:id', workoutController.workout_id_get)
router.delete('/:id', workoutController.workout_id_delete)
router.patch('/:id', workoutController.workout_id_patch)

export default router