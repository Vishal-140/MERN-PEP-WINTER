const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

// server created
const app = express();

// Middleware
app.use(express.json());

// READ
app.get("/", (req, res) => {
    res.send(`<h1>Server is running on PORT ${PORT}</h1>`);
});

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

// CREATE
app.post("/tasks", async (req, res) => {

    try {
        // Adding new data in db.json file

        // STEP-1. Request the data
        const newObj = req.body;
        console.log('newObj', newObj);

        // STEP-2. Read the current data from file
        const text = await fsPromises.readFile('./db.json', 'utf-8');
        const arr = JSON.parse(text);

        // 2.1. Generate the unique ID
        let newId = 1;
        if (arr.length !== 0) {
            const lastTask = arr[arr.length - 1];
            newId = lastTask.id;
            newId += 1;
        }
        // 2.2. Assign the ID
        newObj.id = newId;

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

// UPDATE
app.patch('/tasks/:taskId', async (req, res) => {
    try {
        // Identification mark
        const { taskId } = req.params;
        const { id: tempId, ...updatedTaskInfo } = req.body;

        // Read
        const text = await fsPromises.readFile("./db.json", "utf-8");
        const arr = JSON.parse(text);

        // Find the data object and Update
        const foundIndex = arr.findIndex((elem) => {
            if (elem.id == taskId) {
                return true;
            }
            return false;
        });

        if (foundIndex == -1) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid Task Id!",
            });
        } else {
            // 4. Update the data
            const oldTask = arr[foundIndex];
            const finalNewTask = { ...oldTask, ...updatedTaskInfo };
            arr[foundIndex] = finalNewTask;

            // 5. save the update 
            const textData = JSON.stringify(arr);
            await fsPromises.writeFile("./db.json", textData);

            res.status(200);
            res.json({
                status: "success",
                data: {
                    task: finalNewTask,
                },
            });
        }


    } catch (error) {
        console.log('Error in PATCH task');
        res.status(500);
        res.json({
            status: 'fail',
            message: 'internal server error'
        })

    }
})

// listening
app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`);
});