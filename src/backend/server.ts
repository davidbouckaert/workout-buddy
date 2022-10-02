import express, { Application } from 'express'
import { Response, Request } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import fs from 'fs'
import workoutRouter from './routes/workoutRoutes'
require('dotenv').config()

// create app
const app: Application = express()

// Apply security headers
app.use(helmet())

// log to console
app.use(morgan('combined'))

// log to access.log
app.use(morgan('combined', {
    stream: fs.createWriteStream('./access.log', { flags: 'a' })
}));

// import routes
app.use('/api/workouts', workoutRouter)

// access JSON on the response (res).body property
app.use(express.json())

// listen on port 3000
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})