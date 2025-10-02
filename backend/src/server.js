import express from "express" //to use express
import dotenv from "dotenv"  //to use .env file

import connectdb from "../src/db/connectDB.js";
import notesRoutes from "../src/routes/notesRoutes.js";
import rateLimiter from "../src/middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();  //need to congiure in oreder to use the values

const app= express();  //used to create main server
const PORT=process.env.PORT;  //get value

//midlewares
app.use(express.json()); //to parse values of body to json
app.use(rateLimiter);


const allowedOrigins = [
  'http://localhost:3000',
  'https://litenotes-backend.onrender.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
};

// Use the cors middleware with our options
app.use(cors(corsOptions));

app.use("/api/notes",notesRoutes);

connectdb().then(()=>{  //first connect Mangodb then start server
        app.listen(PORT,()=>{  //to start a server 
        console.log(`Server runs in ${PORT}`);
        });
    });
