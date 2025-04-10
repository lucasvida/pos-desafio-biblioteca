import Book from "../models/modelsBooks.js";

export const getBooks = async (req,res) =>{
    try{
        const allBooks = await Book.find({});
        res.status(200).json(allBooks);
    }catch(erro){
        res.status(400).json(erro);
    }
}

export const getSingleBook = async (req,res) =>{
    const id = req.params.id;
    try{
        const book = await Book.find({_id:id});
        res.status(200).json(book);
    }catch(erro){
        res.status(400).json(erro);
    }
}

export const postBook = async (req,res) =>{
    try{
        const {title,date,isbn,editora} = req.body;
        const newBook = new Book({title,date,isbn,editora,img});
        await newBook.save();
        res.status(201).json({ success: true, book: newBook });
    }catch(erro){
        res.status(400).json(erro);
    }
}

export const putBook = async (req, res) => {
    const id = req.params.id;
    try {
      const updateBook = await Book.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
  
      if (!updateBook) {
        return res.status(404).json({ success: false, message: "Livro não encontrado." });
      }
  
      res.status(200).json({ success: true, book: updateBook });
    } catch (erro) {
      console.error("Erro ao atualizar livro:", erro);
      res.status(400).json({ error: erro.message });
    }
  };

  export const deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedBook = await Book.findOneAndDelete({ _id: id });
      if (!deleteBook) {
        return res.status(404).json({ success: false, message: "Livro não encontrado." });
      }
      res.status(200).json({
        success: true,
        message: "Livro deletado com sucesso.",
        book: deletedBook
      });
    } catch (erro) {
      console.error("Erro ao deletar o livro:", erro);
      res.status(400).json({ error: erro.message });
    }
  };

  export const erroRouteBooks = (req, res) => {
    const metodo = req.method;
    res.status(404).json({ "erro": `Tipo de requisião ${metodo} não suportado`})
  };
  
  