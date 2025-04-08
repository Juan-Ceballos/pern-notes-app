const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

let notes = []

app.get('/', (req, res) => {
    res.status(201).send(notes)
})

app.post('/notes', (req, res) => {
    const {title, content} = req.body
    const newNote = {id: notes.length + 1, title, content}
    notes.push(newNote)
    res.status(201).send(newNote)
})

app.put('/notes/:id', (req, res) => {
    const {id} = req.params
    const {title, content} = req.body
    let note = notes.find(note => note.id === parseInt(id))
    if (note) {
        note.title = title
        note.content = content
        res.status(200).send(note)
    } else {
        res.status(404).send({message: "Note not found"})
    }
})

app.delete('/notes/:id', (req, res) => {
    const {id} = req.params 
    notes = notes.filter(note => note.id !== parseInt(id))
    res.status(204).send()
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})