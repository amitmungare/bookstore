import { connect } from 'mongoose';

const connectDatabase = () =>{
    connect("mongodb+srv://amungare27:nmL84jlpl59P0Vse@bstore.0kvzpya.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connected to db")
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default connectDatabase
