import { Router } from "express";
import { createCharacter, getCharacter } from "../controller/character.controller.js";

const router = Router()

router.get('/characters/:id', createCharacter)
router.post('/characters', getCharacter)

export default router