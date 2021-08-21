const mongoose = require("mongoose");

const databases = {
    mongoDB() {
        const db = mongoose.connect("mongodb://localhost:27017/Weatherstack", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error) => {
            if (error) console.error("MongoDB error: ", error);
            console.log("MongoDB connected");
        });
        return db;
    }
};

module.exports = databases;
