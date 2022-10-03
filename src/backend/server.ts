import express, { Application } from 'express'
import { Response, Request } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import fs from 'fs'
import workoutRouter from './routes/workoutRoutes'
import mongoose, { ConnectOptions } from 'mongoose'
require('dotenv').config()
const MONGO_URI: string = process.env.WORKOUT_MONGO_ATLAS_CONNECTION_STRING

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

// connect to db
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions).then(() => {
    console.log('Connected to MongoDB!')
    // listen on port 3000
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`)
    })
}).catch((err:any) => { console.log(err) })

// this takes all the URL encoded data and passes that into an object (body) that you can use on the request object
app.use(express.urlencoded({extended:true}))

// access JSON on the response (res).body property
app.use(express.json())

// import routes
app.use('/api/workouts', workoutRouter)