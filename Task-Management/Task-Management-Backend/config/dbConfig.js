const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_DB_DATABASE_NAME = process.env.MONGO_DB_DATABASE_NAME;

const MONGO_DB_CONNECT_URL = MONGO_DB_URL.replace("<db_password>", MONGO_DB_PASSWORD);

const connectToDb = async () => {
    try {
        await mongoose.connect(MONGO_DB_CONNECT_URL);

        console.log("--------  Connected to Database Successfully  -------");

    } catch (err) {
        console.log("-------- Error in Database Connection -------");
    }
};

connectToDb();