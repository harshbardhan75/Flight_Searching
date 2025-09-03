const cityService = require("./city-servics");
const CrudService = require("./crud-service");

module.exports= {
    cityService :require('./city-servics'),
    FlightService : require('./flight-service'),
    AirportService : require("./airport-service"),
    CrudService : require("./crud-service")
}