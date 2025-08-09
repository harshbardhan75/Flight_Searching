const express = require("express");
const {PORT} = require('./config/serverConfig')

const setupAndStartServer = async()=>{



const app = express();

app.listen(PORT,()=>{
    console.log(`Server has been started at ${PORT}`);
    console.log(process.env.PORT);
    console.log(process.env.APP_NAME);
})




}
setupAndStartServer();

