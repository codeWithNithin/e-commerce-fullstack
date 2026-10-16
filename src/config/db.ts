import mongoose from 'mongoose'
import { Config } from './env.js'

const connectDB = async () => {
    await mongoose.connect(Config.DB_URL!)
}

export default connectDB
