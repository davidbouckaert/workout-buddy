import { Document } from "mongoose";
export default interface WorkoutModel extends Document {
    title: string;
    reps: number;
    load: number;
}