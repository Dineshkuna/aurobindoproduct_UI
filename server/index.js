import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import pharmaroute from './routes/pharma.routes.js';
import userroute from './routes/user.routes.js';


dotenv.config();
const app = express();

const port = process.env.PORT || 8080;


// CORS configuration - allows both local and production URLs
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        const allowedOrigins = [
            'http://localhost:3030',  // client local
            'http://localhost:3000',  // admin local
            'http://your-aws-client-url',  // client production
            'http://your-aws-admin-url',   // admin production
        ];
        
        // In development, allow all origins
        if (process.env.NODE_ENV === 'development') {
            return callback(null, true);
        }
        
        // In production, check against allowed origins
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());


app.use("/pharma", pharmaroute);
app.use("/user", userroute);



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
        
    } catch (error) {
        console.error("DB connection error", error);
        process.exit(1);
    }
}

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
