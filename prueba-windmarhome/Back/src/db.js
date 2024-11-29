import DBLocal from "db-local"

const {Schema} = new DBLocal({path: './db'})

const Character = Schema('characters', {
_id: {type: String, required: true},
name :{type: String, required: true},
date : {type: String, required: true},
description : {type: String, required: true},
img: {type: String, required: true}
})

export class CharacterRepository{
    static CreateCharacter({name, date, description, img}){
        const character = Character.create({
            _id: crypto.randomUUID(),
            name, 
            date,
            description,
            img
        }).save()
        return character
    }

    static GetCharacter({id}){
        const character = Character.findOne(id)
        return character
    }
}