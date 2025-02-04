const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello <i>Server is running</i></h1>');
});

// GET - TASK
app.get('/tasks', async (req, res) => {
    const fileData = await fs.readFile("./db.json", "utf-8");
    res.send(fileData);

});

app.listen(4000, () => {
    console.log("SERVER STARTED AT PORT 4000");
});
