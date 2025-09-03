import mongoose from "mongoose";

const connectdb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb connected");
    }catch(error){
        console.log(`Error in connecting db: ${error}`)
        process.exit(1);
    }
}

export default connectdb