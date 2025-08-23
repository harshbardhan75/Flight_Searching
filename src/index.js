const express = require("express");
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const ApiRoutes = require('./routes/index');



// const Sequelize = require('sequelize');
// const db = require('./models/index');
const {City,Airport} =require('./models/index.js');

const setupAndStartServer = async()=>{



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',ApiRoutes)
app.listen(PORT,async()=>{
    console.log(`Server has been started at ${PORT}`);

    // db.sequelize.sync({alter:true})
    console.log(process.env.PORT);
    console.log(process.env.APP_NAME);



// const city = await City.findOne({
//     where:{
//         id :2
//     }
// });
// const airports = await city.getAirports();
// await city.add
// console.log(city,airports);

})




}
setupAndStartServer();

