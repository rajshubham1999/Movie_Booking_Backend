const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config();
const dbConfig = require("./config/dbConfig")
const PORT = process.env.PORT || 3001 

const userRoute = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const theatreRoutes = require("./routes/theatreRoutes");
const bookingRoutes = require("./routes/bookingRoutes");


app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow requests from this origin
//     credentials: true // Allow sending credentials (cookies, authorization headers, etc.) with requests
// }));
app.use(express.json());
app.use('/api/user', userRoute);
app.use("/api/movie", movieRoutes);
app.use("/api/theatre", theatreRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})