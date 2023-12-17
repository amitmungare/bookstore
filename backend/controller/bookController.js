
import Book from '../model/bookModel.js'


// add new book 
export const addNewBook = ( async (req, res)=>{

    try{
        if(!req.body.title || !req.body.author || !req.body.publishedYear){
            return res.status(400).send({message:err.message})
        }

        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishedYear : req.body.publishedYear
        }

        const book = await Book.create(newBook);

        return res.status(201).send(book)

    }catch(err){
        console.log(err.message)
        res.status(500).send({message:err.message})
    }
    
})

// get all books
export const getAllBooks =(async (req, res)=>{
    try {
        const book = await Book.find({})
        return res.status(200).json({
            count:book.length,
            books:book
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).send({message:err.message})
    }
})


// get book by id
export const getBookById =( async (req, res) => {
    try {
      const { id } = req.params;
  
      const book = await Book.findById(id);

      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      return res.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  // Update a Book
  export const updateBook =(async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishedYear
      ) {
        return res.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = req.params;
  
      const result = await Book.findByIdAndUpdate(id, req.body);
  
      if (!result) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      return res.status(200).send({ message: 'Book updated successfully' });

    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  // Delete a book
  export const deleteBook =( async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Book.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      return res.status(200).send({ message: 'Book deleted successfully' });

    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });