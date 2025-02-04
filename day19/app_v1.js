const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`<h1>Server is running on PORT ${PORT}</h1>`);
});

app.get("/tasks", async (req, res) => {
    const text = await fsPromises.readFile("./db.json");

    // To convert "text in JSON format" to "JS object" :: JSON.parse()
    // To convert "JS object" to "text in JSON format" :: JSON.stringify()
    const obj = JSON.parse(text); // sync process

    res.json(obj);

});

app.post("/tasks", async (req, res) => {

    // console.log(req.body);

    const newObj = req.body;
    console.log('newObj', newObj);

    const text = await fsPromises.readFile('./db.json', 'utf-8');
    const arr = JSON.parse(text);

    arr.push(newObj);

    const textData = JSON.stringify(arr);
    await fsPromises.writeFile("./db.json", textData);

    res.json({
        status: "success"
    });

});





app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`);
});