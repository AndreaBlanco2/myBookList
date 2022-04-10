// Book class : For each book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI 
class UI {

    static displayBooks() {


        //Books from "storage"
        const StoredBooks = [{
            title: 'Book One',
            author: 'John Doe',
            isbn: '343434'
        },
        {
            title: 'Book Two',
            author: 'Jane Doe',
            isbn: '556677'
        }];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book)); //still to be writen
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = '<td>' + book.title + '</td><td>' + book.author + '</td><td>' + book.isbn + '</td><td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>';

        list.appendChild(row);
    }

    static ShowAlerts(message, className) {

        //create div
        const div = document.createElement('div');
        div.className = 'alert alert-' + className;
        //add text 
        div.appendChild(document.createTextNode(message));
        const container = document.getElementById('contenedor');
        const form = document.getElementById('book-form');
        console.log(form);
        console.log(container);
        container.insertBefore(div, container.children[1]);

        //needs tp be removed after time 
        setTimeout(() => document.querySelector('.alert').remove(), 2000);

    }

}

// Store - so values are stored in the arrays 
//  ****THIS IS PENDING FOR NEXT ITERATION OF THE PROGRAM****

// display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Add a book

function AddToList() {

    //prevent addict empty books

    var bookTitle = document.getElementById('book-form').title.value;
    var bookAuthor = document.getElementById('book-form').author.value;
    var bookIsbn = document.getElementById('book-form').isbn.value;

    //console.log(bookAuthor);
    const book = new Book(bookTitle, bookAuthor, bookAuthor);

    if (bookTitle == '' || bookAuthor == '' || bookIsbn == '') {

        UI.ShowAlerts('Please fill in all fields', 'danger');


    } else {
        UI.addBookToList(book);

    //Show alert 
     //boot class for green mesage
        UI.ShowAlerts('Book Added', 'success');
    }



    //UI.addBookToList(book);

    //clear fields
    //This does nto work to assignt to the variables because this is the 
    //assigned value not the variable 
    document.getElementById('book-form').title.value = "";
    document.getElementById('book-form').author.value = "";
    document.getElementById('book-form').isbn.value = "";
}
// Remove a book

document.getElementById('book-list').addEventListener('click', (e) => {
    RemoveBook(e.target);

    UI.ShowAlerts('Book Removed', 'success');
    
}); //This is the appropiate way to call the function




function RemoveBook(element) {

    if (element.classList.contains('delete')) {
        var toRemove = element.parentElement.parentElement.remove();
    }
       
}

