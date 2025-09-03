const {FlightService} = require("../services/index")


const flightSerice = new FlightService();

const create= async(req,res) =>{
    try {
     const  flightRequestData = {
        flightNumber : req.body.flightNumber,
        airplaneId: req.body.airplaneId ,
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId:req.body.arrivalAirportId, 
        arrivalTime:req.body.arrivalTime ,
        departureTime : req.body.departureTime,
        price:req.body.price
     }
        const flight = await flightSerice.createFlight(flightRequestData);
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

const getAll = async(req,res)=>{
    try {
        const response = await flightSerice.getAllFlightData(req.query);
        return res.status(200).json({
            data : response,
            success:true,
            err:{},
            message:'succesfuly fetched the flight'
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            success:false,
            message:'Not able to fetched the flight',
            err:error
        })
        
        
    }
}

module.exports={
create,getAll
}