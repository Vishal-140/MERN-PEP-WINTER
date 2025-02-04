const express = require('express')
const app = express()
const fsPromises = require('fs/promises')

const PORT = 1010;

app.get('/tasks', async(req, res) => {
    const text = await fsPromises.readFile('db.json', 'utf-8')
    // Currently data is text
    // we need text to js object
    const obj = JSON.parse(text)
    // NOTE that JSON.parse is Synchronous
    res.json(obj)
})

app.post('/tasks', (req, res) => {
    console.log('Request Received')
})


app.listen(PORT, ()=>{
    console.log(`SERVER STARTED AT PORT ${PORT}`)
})