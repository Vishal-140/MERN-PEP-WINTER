const express = require("express");
require("./config/dbConfig.js");

const Task = require('./models/taskModel.js');

const PORT = 1010;
const app = express();

// Middleware
app.use(express.json());

// GET - READ
app.get("/", (req, res) => {
    res.send(`<h1>Server is running ...</h1>`);
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            status: "success",
            data: { 
                tasks
            },
        });
    } catch (error) {
        console.log("Error in GET /tasks:", error.message);
        res.status(500).json({
            status: "fail",
            message: "Internal Server Error" 
        });
    }
});

// POST - CREATE
app.post('/tasks', async (req, res) => {
    try {
        const taskInfo = req.body;
        const newTask = await Task.create(taskInfo);

        return res.status(201).json({
            status: "success",
            data: { 
                task: newTask 
            },
        });
    } catch (error) {
        console.log("Error in POST /tasks:", error.message);

        if (error.name === "ValidationError") {
            return res.status(400).json({ 
                status: "fail",
                message: error.message
            });
        } 
        return res.status(500).json({ 
            status: "fail", 
            message: "Internal Server Error" 
        });
    }
});

// PATCH - UPDATE
app.patch('/tasks/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params;
        const result = await Task.findByIdAndUpdate(taskId, req.body, { new: true });

        if (!result) {
            return res.status(400).json({
                status: "fail",
                message: "Task ID does not exist!",
            });
        }
        return res.status(200).json({
            status: "success",
            data: { 
                task: result
            },
        });

    } catch (error) {
        console.log(error.message);
        
        if (error.name === "CastError") {
            return res.status(400).json({
                status: "fail",
                message: "Invalid parameter",
            });
        } 
        
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
        });
    }
});

// DELETE
app.delete('/tasks/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params;
        const result = await Task.findByIdAndDelete(taskId);

        if (!result) {
            return res.status(400).json({
                status: "fail",
                message: "Task ID does not exist!",
            });
        }

        return res.status(204).send(); 

    } catch (error) {
        console.log(error.message);
        
        if (error.name === "CastError") {
            return res.status(400).json({
                status: "fail",
                message: "Invalid parameter",
            });
        }

        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
        });
    }
});



// Start server
app.listen(PORT, () => {
    console.log(`--------  SERVER STARTED ON PORT ${PORT}  --------`);
});
