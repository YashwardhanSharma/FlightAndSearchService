// const city = require('../models/city');
const {Op}=require('sequelize');

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
            },
        
        });
        // const city=await City.findByPK(cityId);
        // city.name=data.name;
        // await city.save();
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
   async getAllCities(filter){
    try {
        if(filter.name){
            const cities=await City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name
                    }
                }
            });
            return cities;
        }
        const cities = await City.findAll();
        return cities;
    } catch (error) {
        console.log("Somthing went wrong in the repository layer");
        throw{error};
    }
   }
}

module.exports=CityRepository;