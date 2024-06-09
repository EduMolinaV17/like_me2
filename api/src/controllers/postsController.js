import * as sql from '../models/posts.dao.js'
//Alba, usé este método porque el profesor Raúl lo enseñó y dijo que era igual al try catch 
//además simplifica un poco más el código
export const obtenerPosts = (_, res) => sql.obtenerPostsModel()
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const obtenerPostsById = (req, res) => sql.obtenerPostsByIdModel(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const crearPosts = (req, res) => sql.crearPostsModel(req.body)
  .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const agregarLikesPosts = (req, res) => sql.agregarLikesPostsModel(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const borrarPosts = (req, res) => sql.borrarPostsModel(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const actualizarPosts = (req, res) => sql.actualizarPostsModel(req.params.id, req.body)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const actualizarPostsByTitulo = (req, res) => sql.actualizarPostsByTituloModel(req.params.id, req.query.titulo)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const actualizarPostsByImg = (req, res) => sql.actualizarPostsByImgModel(req.params.id, req.query.img)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const actualizarPostsByDescripcion = (req, res) => sql.actualizarPostsByDescripcionModel(req.params.id, req.query.descripcion)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
