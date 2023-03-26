const {FlightService} = require('../services/index');
const {SuccessCode}=require('../utils/error-codes');
const flightService=new FlightService();

const create = async (req, res)=>{
    try {
        const flightRequestData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCode.CREATED).json({
            data:flight,
            sucess:true,
            err:{},
            message:'Successfully created a flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        });
    }
}

const getAll=async(req,res)=>{
    try {
        const response=await flightService.getAllFlightData(req.query);
        return res.status(SuccessCode.OK).json({
            data : response,
            success:true,
            err:{},
            message:'Successfully fetch the flights'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the flights',
            err:error
        });
    }
}

module.exports={
   create,
   getAll
}