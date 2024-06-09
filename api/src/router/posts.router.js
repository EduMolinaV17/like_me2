import express from 'express'
import * as posts from '../controllers/postsController.js'
import { postsLog } from '../middleware/posts.middleware.js'

const router = express.Router()

router.get('/posts', postsLog, posts.obtenerPosts)
router.get('/posts/:id', postsLog, posts.obtenerPostsById)
router.post('/posts', postsLog, posts.crearPosts)
router.put('/posts/like/:id', postsLog, posts.agregarLikesPosts)
router.delete('/posts/:id', postsLog, posts.borrarPosts)
router.put('/posts/:id', postsLog, posts.actualizarPosts)
router.patch('/posts/:id', postsLog, posts.actualizarPostsByTitulo)
router.patch('/posts/:id', postsLog, posts.actualizarPostsByImg)
router.patch('/posts/:id', postsLog, posts.actualizarPostsByDescripcion)

export default router
