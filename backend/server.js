import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB();



app.listen(4002, () => {
    console.log(`Server is working on port: ${4002}`)
})