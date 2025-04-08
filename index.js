const express = require('express')
const {Pool} = require('pg')
const app = express()
const PORT = 3000

app.use(express.json())

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'notesdb',
    password: 'JUostgres@08',
    port: 5432
})

app.get('/notes', async (req, res) => {
    const result = await pool.query('SELECT * FROM notes')
    res.status(201).send(result.rows)
})

app.post('/notes', async (req, res) => {
    const {title, content} = req.body
    const result = await pool.query('INSERT INTO notes(title, content) VALUES($1, $2) RETURNING *', [title, content])
    res.status(201).send(result.rows[0])
})

app.put('/notes/:id', async (req, res) => {
    const {id} = req.params
    const {title, content} = req.body
    const result = await pool.query('UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id])
    res.status(200).send(result.rows[0])
})

app.delete('/notes/:id', async (req, res) => {
    const {id} = req.params 
    await pool.query('DELETE FROM notes WHERE id = $1', [id])
    res.status(204).send()
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})