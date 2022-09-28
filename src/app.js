import express from "express"
import peliculasRoutes from './routes/peliculas.routes.js'
import indexRoutes from './routes/index.rout.js'


const app = express();

app.use(express.json())

app.use(indexRoutes)
app.use('/api', peliculasRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;