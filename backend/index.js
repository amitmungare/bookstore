import express from 'express'
import mongoose from 'mongoose'
import { MONGODBURL } from './config.js'
import { Book } from './model/bookModel.js'

const app = express()

app.use(express.json())


// CRUD - create, read, update, delete
//      - post,   get,  put,    delete 

app.get('/', (req,res)=>{
    return res.status(200).send("welcome to bookstore")
})

// create book
app.post('/addbook', async (req, res)=>{
    try {

        if(!req.body.title || !req.body.author || !req.body.year){
            return res.status(400).send({message:err.message})
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get('/allbooks', async(req, res)=>{
    try {

        const allbooks = await Book.find({})

        return res.status(200).send(allbooks)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})




app.listen(8080, ()=>{
    console.log("server is running...")
})

mongoose.connect(MONGODBURL)
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err)
})