/////////        1       //////////
class Library{
    constructor(){
        this.books = []
    }
    addBook(book){
       this.books.push(book) 
    }
    removeBook(title){
        this.books = this.books.filter(book => book.title !== title)
    }
    findBooksByAuthor(author){
        return this.books.filter(book => book.author === author)
    }
}

const library = new Library()

library.addBook({ title: "JS Mastery", author: "Ahmed", year: 2021 });
library.addBook({ title: "OOP Guide", author: "Ahmed", year: 2023 });
library.addBook({ title: "Web Dev", author: "Ali", year: 2020 });


library.removeBook("OOP Guide");


const ahmedBooks = library.findBooksByAuthor("Ahmed");

console.log(library.books);
console.log(ahmedBooks);
console.log(library.books.length);