const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

// server created
const app = express();

// Middleware
app.use(express.json());

// READ - GET
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

// CREATE - POST
app.post("/tasks", async (req, res) => {

    try {
        // Adding new data in db.json file

        // STEP-1. Request the data
        const newObj = req.body;
        console.log('newObj', newObj);

        if(newObj.assignee == undefined || newObj.assignee.length == 0){
            res.status(400)
            res.json({
                status: "fail",
                message: "assignee is required"
            })
        }

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
        console.log("error in POST task")
        console.log(error.message)
        
        res.status(500)
        res.json({
            status: "fail",
            message: "Internal Server Error",
        })
    }

});

// UPDATE - PATCH
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
});

// DELETE
app.delete('/tasks/:taskId', async(req, res) => {
    // 1. Get the data from the request -> taskId & params
    // 2. Read the current list
    // 3. Find the index of the element using taskId
    // 4. Splice the data (if the task id is valid)
    // 5. Store the updated array in the list
    try {
        const {taskId} = req.params;
        const text = await fsPromises.readFile("./db.json", "utf-8");
        const arr = JSON.parse(text);

        const foundIndex = arr.findIndex((elem) => {
            if(elem.id == taskId) {
                return true;
            }
            else {
                return false;
            }
        });

        if(foundIndex == -1) {
            res.status(400);
            res.json({
                status: "fail",
                message: "invalid task id",
            });
        } else {
            // Delete
            arr.splice(foundIndex, 1);

            await fsPromises.writeFile("./db.json", JSON.stringify(arr));

            res.status(204);
            res.json({
                status: "success",

            })
        }

    } catch (error) {
        console.log(error.message)
    }
    
})

// listening
app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`);
});