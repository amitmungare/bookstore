
import app from "./app.js"
import connectDatabase from './config/database.js'


connectDatabase()


app.listen(8000, ()=>{
    console.log("server is running...")
})

