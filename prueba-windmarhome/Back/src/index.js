import express from "express"
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.listen(3000, ()=>{
    console.log('se esta ejecutando en el puerto 3000');
} )