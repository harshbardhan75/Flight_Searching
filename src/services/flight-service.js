const {FlightRepository,AirplaneRepository} = require("../repository/index");
const {compareTime} = require("../utils/helper");


class FlightService{

    constructor(){
this.airplaneRepository = new AirplaneRepository();
this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
           if (!compareTime(data.arrivalTime,data.departureTime)) {
            throw{error:"arrival time is must be greater than departure time"}
           }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId) ;
            const flight = await this.flightRepository.createFlight({...data,totalSeat:airplane.capacity});
            return flight;
          

        } catch (error) {
             console.log("something went wrong in flight- repository layer");
        throw{error}
        }
    }

    async getAllFlightData(data){
        try {
            const flights = await this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            console.log("something went  wrong at service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;


/**
 * {
 * flightnumber,
 * airplaneid
 * ,departureid,
 * arrivalairportid,
 * artrivaltime,
 * departuretime
 * ,price,
 * totalseat->airplane
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */