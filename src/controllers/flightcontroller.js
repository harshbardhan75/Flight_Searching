const {FlightService} = require("../services/index")


const flightSerice = new FlightService();

const create= async(req,res) =>{
    try {

        const flight = await flightSerice.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : true,
            err: {},
            message: 'successfuly created a flight'
        })
        
    } catch (error) {
         console.log(error);
        return res.status(500).json({
             data: {},
            success:false,
            message:"not able to create flight"
    })
}
}

module.exports={
create
}