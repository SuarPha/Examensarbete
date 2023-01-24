import dbConnect from "../../../util/connectMongoDB"
import Product from "../../../models/Product"


//http://localhost:3000/api/products

export default async function handler(req, res) {

    const { method } = req;

    dbConnect.connect();
   

        //get all the products

    if(method === "GET"){ //If GET method do somthing.....

        try{
            const products = await Product.find();
            res.status(200).json(products);
        }catch(error){
            res.status(500).json({
                status: 'unsuccessfully!'
            });
        }

    }

    if(method === "POST"){ // If POST method do something else.....
        try{
            const product = await Product.create(req.body);
            res.status(201).json(product);

        }catch(err){
            res.status(500).json(err);
        }
    }
  }