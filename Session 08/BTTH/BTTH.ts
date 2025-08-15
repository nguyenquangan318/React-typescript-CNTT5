//Xây dựng lớp Book
class Book {
    id: number;
    title: string;
    author: string;
    year: number
}

class textBook extends Book {
    grade: string
}

class Comic extends Book {
    studio: string
}

//Xây dựng lớp Generic Library
class Library<T extends Book> {
    books: T[] = [];
    addBook(book: T): void {
        this.books.push(book)
    }
    getBookById(id: number): T | undefined {
        return this.books.find((book) => book.id === id)
    }
    removeBook(id: number): void {
        this.books = this.books.filter((book) => book.id !== id)
    }
    updateBook(id: number, updatedBook: T): void {
        let book = this.books.find((book) => book.id === id);
        book = updatedBook;
    }
    listBooks(): T[] {
        return this.books
    }
    findBooksByTitleOrAuthor(searchString: string): T[] {
        return this.books.filter((book) => book.title.includes(searchString)
            || book.author.includes(searchString))
    }
    getTotalBooks(): number {
        return this.books.length
    }
    findBooksByYear(year: number): T[] {
        return this.books.filter((book => book.year === year))
    }
}

let library = new Library<Comic>();
library.addBook({ id: 1, title: "Ironman", author: "author", year: 1990, studio: "Marvel" })
console.log(library.listBooks());
