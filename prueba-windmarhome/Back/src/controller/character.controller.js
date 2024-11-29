import { CharacterRepository } from "../db.js"

export const createCharacter = (req, res)=>{
    const {name, date, description, img} = req.body
    try{
        const data = CharacterRepository.CreateCharacter({name, date, description, img})
        res.status(200).json(data)
    }catch(error){
        res.status(401).send(error)
    }
}

export const getCharacter = (req, res)=>{
    const {id} = req.params
    try{
         const data = CharacterRepository.GetCharacter({id})
         res.status(200).json(data)
        }catch(error){
            res.status(401).send(error)
        }
}