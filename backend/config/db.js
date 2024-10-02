import mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        console.log("MONGO_URI:", process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI || '')
        console.log(`MONGODB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1) // 1 means exit with faliure 0 means success
    }
}

export default connectDB