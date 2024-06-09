import pkg from 'pg'

const { Pool } = pkg

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    allowExitOnIdle: true
}

const pool = new Pool(config)
//Método de captura de errores enseñado por el profesor Raúl Farias
const dbConection = (query, values) => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch(({ code, message })=> {
    const error = { status: false, code, message}
    throw error
  })
  
export default dbConection
