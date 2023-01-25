import dbConnect from "../../../util/connectMongoDB"
import Product from "../../../models/Product"
import User from "../../../models/User";

//http://localhost:3000/api/products

export default async function handler(req, res) {

    const { 
        method,
        query: { id },
        cookies
    
    } = req;
    const token = cookies.token

    dbConnect.connect();
   

        // CRUD all pizzas

    if(method === "GET"){ //If GET method do somthing.....
        
        try{
            const product = await Product.findById(id);
            res.status(200).json(product);
        }catch(error){
            res.status(500).json({
                status: 'unsuccessfully!'
            });
        }
    }
    if(method === "PUT"){ 
        if(!token || token !== process.env.token){
            return res.status(401).json("Not authenticated!")
        }
        try{
            const product = await Product.findByIdAndUpdate(id, req.body,{
                new: true,
            });
            res.status(200).json(product);

        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method === "DELETE"){ 
        if(!token || token !== process.env.token){
            return res.status(401).json("Not authenticated!")
        }
        try{
            await Product.findByIdAndDelete(id);
            res.status(200).json("The product has been deleted!");

        }catch(err){
            res.status(500).json(err);
        }
    }
  }