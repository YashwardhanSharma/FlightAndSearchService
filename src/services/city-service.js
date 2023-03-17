const {CityRepository} = require('../repository/index');

class CityService{
    constructor(){
        this.CityRepository=new CityRepository();
    }
        async createCity(data){
            try {
                const city = await this.CityRepository.createCity(data);
                return city;
            } catch (error) {
                console.log("Somthing went wrong at service layer");
                throw {error};
            }
        }
       async deleteCity(cityID){
        try {
                const response =await this.CityRepository.createCity(cityID);
                return response;
        } catch (error) {
            console.log("Somthing went wrong at service layer");
            throw {error};
        }
       }
       async updateCity(cityID,data){
        try {
               const city=await this.CityRepository.updateCity(cityID,data);
               return city;
        } catch (error) {
            console.log("Somthing went wrong at service layer");
            throw {error};
        }
       }
       async getCity(cityID){
        try {
            const city=await this.CityRepository.getCity(cityID);
            return city;
        } catch (error) {
            
        }
       }
}

module.exports=CityService;