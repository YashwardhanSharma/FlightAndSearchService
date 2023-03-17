const city = require('../models/city');
const { City }=require('../models/index');

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Somthing went wrong in the repository layer");
            throw {error};
        }
    }
    async deleteCity(cityID){
        try {
            await City.destroy({
                where:{
                    id:cityID
                }
            });
            return true;
        } catch (error) {
            console.log("Somthing went wrong in the repository layer");
            throw {error};
        }
    }
   async updateCity(cityId,data){
    try {
        const city= await City.update(data,{
            where:{
                id:cityId
            }
        });
        return city;
    } catch (error) {
        console.log("Somthing went wrong in the repository layer");
        throw{error};
    }
   }
   async getCity(cityID){
    try {
        const city= await City.findByPK(cityId);
        return city;
    } catch (error) {
        console.log("Somthing went wrong in the repository layer");
        throw{error};
    }
   }
}

module.exports=CityRepository;