const {Flights}=require('../models/index');

class FlightRepository{
    async createFlight(data){
     try {
        const flight = await Flights.creat(data);
        return flight;
     } catch (error) {
        console.log("Somthing went wrong in the repository layer");
        throw {error};
     }
    }
    
}

module.exports=FlightRepository;