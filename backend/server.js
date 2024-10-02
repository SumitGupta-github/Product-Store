import express from 'express';
import dotenv from 'dotenv'

import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js'

const app = express()
dotenv.config()
const Port = process.env.PORT || 5000

app.use(express.json()) // allows us to accecpt JSON data in the json.body

//Products Routes 
app.use('/api/Product', productRoutes)

app.listen(Port, ()=> {
    connectDB()
    console.log(`Server started at http://localhost:${Port}`);
})