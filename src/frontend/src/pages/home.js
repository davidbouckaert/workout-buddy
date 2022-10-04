import {useEffect, useState} from 'react'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    // fetch the workouts only once by feeding it an empty array
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json) // array of workouts
            }
        }

        fetchWorkouts()
    },[])

    /* only if workouts has a value, start mapping trough them. */
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
                <WorkoutForm/>
        </div>
    )
}

export default Home