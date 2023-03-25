const CrudService = require('./crud-service');
const {AirportRepository} = require('../repository/index');


class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        console.log(airportRepository);
        super(airportRepository);
    }
}

module.exports=AirportService;