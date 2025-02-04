const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

// server created
const app = express();

// Middleware
app.use(express.json());

// GET - Default Route
app.get("/", (req, res) => {
    res.send(`<h1>Server is running on PORT ${PORT}</h1>`);
});

// GET - /tasks Route
app.get("/tasks", async (req, res) => {
    try {
        const text = await fsPromises.readFile("./db.json");
        const obj = JSON.parse(text);
        res.json({
            status: "success",
            data: {
                tasks: obj,
            },
        });
    } catch (error) {
        res.status(500)
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }

});

// POST - /tasks Route
app.post("/tasks", async (req, res) => {

    try {
        // Adding new data in db.json file

        // STEP-1. Request the data
        const newObj = req.body;
        console.log('newObj', newObj);

        // STEP-2. Read the current data from file
        const text = await fsPromises.readFile('./db.json', 'utf-8');
        const arr = JSON.parse(text);

        // STEP-3. Append or push new data
        arr.push(newObj);

        // STEP-4. Save it
        const textData = JSON.stringify(arr);
        await fsPromises.writeFile("./db.json", textData);

        res.status(201);
        res.json({
            status: "success",
        });
    } catch (error) {
        res.status(500)
        res.json({
            status: "fail",
            message: "Internal Server Error",
        })
    }

});

// listening
app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`);
});