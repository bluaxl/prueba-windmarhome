import express from "express"
import cors from 'cors'
import character from './routes/character.routes.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use(character)
app.listen(3000, ()=>{
    console.log('se esta ejecutando en el puerto 3000');
} )