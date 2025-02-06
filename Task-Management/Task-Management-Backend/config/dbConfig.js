const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://vkc140:vishal140@cluster0.bgvvc.mongodb.net/MERN_WINTER_PEP_TASK_MANAGEMENT?retryWrites=true&w=majority&appName=Cluster0");

        console.log("--------  Connected to Database Successfully  -------");

    } catch (err) {
        console.log("-------- Error in Database Connection -------");
    }
};

connectToDb();