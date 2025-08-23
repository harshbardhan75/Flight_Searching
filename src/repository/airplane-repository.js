const {Airplane}= require("../models/index");

class AirplaneRepository{
    async getAirplane(id){
        try {
           
              const airplane = await Airplane.findByPk(id);
               if (!airplane) {
    throw new Error(`Airplane with id ${data.airplaneId} not found`);
}
        return airplane;
        } 
        
        catch (error) {
        console.log("error in airplane repository layer")    
        }
      
    }
}

module.exports = AirplaneRepository;