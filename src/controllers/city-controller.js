const {cityService } = require('../services/index');


const cityService = new cityService();

const create = async (req,res)=>{
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data: city,
            success:true,
            message:"succesfuly created"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
             data: {},
            success:false,
            message:"not able to create city"
        })
    }
}    
const destroy =async  (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: city,
            success:true,
            message:"succesfuly deleted a city"
        })
        
    } catch (error) {
          console.log(error);
        return res.status(500).json({
             data: {},
            success:false,
            message:"not able to delete city"
        })
        
    }
}    
const get =async(req,res)=>{try {
     const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: city,
            success:true,
            message:"succesfuly fetched  a city"
        })
        
} catch (error) {
      console.log(error);
        return res.status(500).json({
             data: {},
            success:false,
            message:"not able to get city"
        })
        
    
}}    
const update = async(req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body)
           return res.status(201).json({
            data: city,
            success:true,
            message:"succesfuly deleted a city"
        })
        
        
    } catch (error) {
         console.log(error);
        return res.status(500).json({
             data: {},
            success:false,
            message:"not able to update  city"
        })
        
    
        
    }
}    

module.exports ={
    create,destroy,get,update
}