import express, { application } from 'express';
import * as dotenv from 'dotenv';
import { mainRouter } from './routes/main.routes';
import cors from 'cors'




dotenv.config();

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use(cors())




app.use('',mainRouter)

app.listen(PORT,()=>{console.log('listening ' + PORT)})