const mongoose = require("mongoose");
// const DB_Name = require("./utils/constant.js");
const User = require("./models/user.models.js");
const dotenv = require("dotenv");
const { app } = require("./app.js");
const express = require("express");
const cors = require("cors");
const cookiParser = require("cookie-parser")



app.use(cookiParser());
app.use(cors({
    origin: "*"
}));

dotenv.config({
    path: "./.env"
});
app.use(express.json());

const userRoute = require("./routers/user.routes.js");
app.use("/v1", userRoute);


console.log((process.env.MONGODB_URI));
// `${process.env.MONGODB_URI}/${DB_Name}`

const connectDB = async function () {
    try {

        const dbHost = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDb connected succesfully on host ${dbHost}`);
        const user = await User.findOne({ username: "musrat001" });
        if (!user) {
            console.log("User is not found");
            const createdUserObject = {
                fullName: "Musrat",
                email: "Musrat@123",
                username: "musrat001",
                password: "1234"
            }
            const creadtedUser = await User.create(createdUserObject);

        } else {
            console.log("user already Exist");

        }




        app.listen(process.env.PORT, () => {
            console.log(`Your app is running on port ${process.env.PORT}`);

        })
    } catch (error) {
        console.log("Erroe while connecting MongoDB", error);
    }
}

connectDB();




