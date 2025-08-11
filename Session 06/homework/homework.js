//B1: Xây dựng các lớp
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getInfo = function () {
        return "".concat(this.title, ", ").concat(this.author);
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.showBooks = function () {
        console.log("Danh sách thư viện: ");
        this.books.forEach(function (book) {
            console.log(book.getInfo());
        });
    };
    return Library;
}());
//B2: Khởi tạo 5 đối tượng từ lớp Book
var book1 = new Book("To Kill a Mockingbird", "Harper Lee");
var book2 = new Book("1984", "George Orwell");
var book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book4 = new Book("Pride and Prejudice", "Jane Austen");
var book5 = new Book("The Hobbit", "J.R.R. Tolkien");
//B3: Thêm 5 sách vào thư viện
var myLib = new Library();
myLib.addBook(book1);
myLib.addBook(book2);
myLib.addBook(book3);
myLib.addBook(book4);
myLib.addBook(book5);
myLib.showBooks();
