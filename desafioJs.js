class Book {
    constructor(title, description, author, id) {
      this.title = title;
      this.description = description;
      this.author = author;
      this.id = id;
      /// this.id = Math.Random().toFixed(3)
    }
  }

class Library {
    constructor(){
        this.books = [];
    }

    addBook(bookInfo){
        const newBook = new Book(bookInfo);
        this.books.push(bookInfo);
    }

    getBooks(){
        return this.books;
    }

    deleteBookById(id){
        let removedBook = ''
        this.books = this.books.filter((book) => {
            if (book.id.toString() !== id){
                return book
            }else{
                removedBook = book
            }
        })
        return removedBook
    }

    getBookById(id){
        const result = this.books.filter((book) =>{
            if (book.id.toString() === id){
                return book
            }
        })
        return result
    }

    updateBookById(id, info){
        this.books = this.books.filter((book)=> {
            if (book.id.toString()===id){
                if(info.title){
                    book.title = info.title
                }
                if(info.author){
                    book.author = info.author
                }
                if(info.description){
                    book.description = info.description
                }
                if(info.id){
                    book.id = info.id
                }
                return book
            }else{
                return book
            }
        })
    }
}

/// Usei um ID sem ser aleatório só para fazer os teste se tudo tava funcionando
let lib = new Library()
let newBook = new Book('teste', 'teste', 'teste', 1)
lib.addBook(newBook)
let newBook2 = new Book('teste', 'teste', 'teste', 2)
lib.addBook(newBook2)
lib.getBooks()
lib.getBookById('1')
lib.deleteBookById('2')
lib.getBooks()
lib.updateBookById('1', {author:'teste3', description:'teste3', id:3})
lib.getBooks()

