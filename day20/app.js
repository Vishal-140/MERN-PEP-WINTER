const express = require("express");
require("./config/dbConfig.js")

const Task = require('./models/taskModel.js')

const PORT = 1010;
const app = express();

// middleware
app.use(express.json());

// GET
app.get("/", (req, res) => {
    res.send(`<h1>Server is running ...</h1>`);
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200);
        res.json({
            status: "success",
            data: {
                tasks,
            },
        });
    } catch (err) {
        console.log("Error in POST /tasks", err.message);
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
});

// POST
app.post('/tasks', async(req, res)=>{
    try {
        // 1. Get the data
        const taskInfo = req.body;
        // 2. validate the data 
        const newTask = await Task.create(taskInfo);
        res.json({
            status: "success",
            data: {
                tasks: newTask,
            },
        });
    } catch (error) {
        console.log("Error in POST /tasks", err.message);
        if (err.name === "ValidationError") {
            res.status(400).json({ status: "fail", message: err.message });
        } else {
            res.status(500).json({ status: "fail", message: "Internal Server Error" });
        }
    }
})



app.listen(PORT, () => {
    console.log(`--------  SERVER STARTED ON PORT ${PORT}  --------`)
})