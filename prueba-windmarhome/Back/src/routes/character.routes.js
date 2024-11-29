import { Router } from "express";
import { createCharacter, getCharacter } from "../controller/character.controller.js";

const router = Router()

router.get('/characters/:id', getCharacter)
router.post('/character', createCharacter)


export default router