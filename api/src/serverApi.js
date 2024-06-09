import express from 'express'
import cors from 'cors'
import { errors, posts } from './router/index.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use('/', posts)
app.use('/', errors)

app.listen(PORT, () => console.log(`🔥 Server UP! 🔥 http://localhost:${PORT}`))

export default app