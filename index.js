const express = require("express")
const {connectMongoDB} = require("./config")

//Require routes
const UserRoutes = require("./routes/user")
const HomeRoute = require("./routes/home")

const app = express()
const port = 4000

//Connection in config
connectMongoDB()
    .then(()=>{
        console.log("Connection built successfully with MongoDB")
    })
    .catch((err) => {
        console.log("Could not connect with MongoDB")
    })

//Routes
app.use("/", UserRoutes)
app.use("/", HomeRoute)

//Launch Express App
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});