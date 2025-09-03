import express from "express" //to use express
import dotenv from "dotenv"  //to use .env file

import connectdb from "../src/db/connectDB.js";
import notesRoutes from "../src/routes/notesRoutes.js";
import rateLimiter from "../src/middleware/rateLimiter.js";

dotenv.config();  //need to congiure in oreder to use the values

const app= express();  //used to create main server
const PORT=process.env.PORT;  //get value

//midlewares
app.use(express.json()); //to parse values of body to json
app.use(rateLimiter);

app.use("/api/notes",notesRoutes);

connectdb().then(()=>{  //first connect Mangodb then start server
        app.listen(PORT,()=>{  //to start a server 
        console.log(`Server runs in ${PORT}`);
        });
    });
