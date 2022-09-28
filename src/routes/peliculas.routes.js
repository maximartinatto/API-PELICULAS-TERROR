import { Router } from "express";
import { getPeliculas, getPelicula, createPeliculas, updatePeliculas, deletePeliculas } from "../controllers/peliculas.controllers.js";

const router = Router()

router.get('/peliculas', getPeliculas)

router.get('/peliculas/:id', getPelicula)

router.post('/peliculas', createPeliculas)

router.patch('/peliculas/:id', updatePeliculas)

router.delete('/peliculas/:id', deletePeliculas)

export default router