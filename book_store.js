// Constructor function for Authors
let Author =function(name, birthYear, nationality ){
    this.Name= name
    this.BirthYear= birthYear
    this.Nationality= nationality
  }
  
  // Constructor function for Books
  let Book = function(title,author,genre, price){
    this.Title= title
    this.Author= author
    this.Genre=genre
    this.Price= price
  }
  
  // method for desplaying the book title author's name , genre and price 
  let getBookInfo = function(){
    console.log(`Book title: ${this.Title}`);
    console.log(`Author name: ${this.Author.Name}`);
    console.log(`Genre: ${this.Genre}`);
    console.log(`Price: ${this.Price}`);
  }
  
  
  // first autor and book
  let J_K = new Author("J.K. Rowling", 1965, "British")
  let Book1 = new Book("Harry Potter", J_K, "Fantasy", "9.99$")
  
  // second autor and book
  let Premchand = new Author("Munshi Premchand", 1880, "India")
  let Book2 = new Book("Godan", Premchand, "Fiction", "₹ 299")
  let Book3 = new Book("Gaban", Premchand, "Fiction", "₹ 399")
  
  // third author and book
  let Chatan_Bhagat = new Author("Chetan Bhagat", 1974, "Indian");
  let Book4 = new Book("400 Days", Chatan_Bhagat, "Fiction", '₹ 350');
  
  // forth author and book
  let Walter_Isaacson= new Author("Walter Isaacson", 1948, "American");
  let Book5 = new Book("Steve jobs", Walter_Isaacson, "Non-fiction","₹ 1400");
  
  
  // displaying the book info
  getBookInfo.call(Book1);
  console.log('------------------')
  getBookInfo.call(Book2);
  console.log('------------------')
  getBookInfo.call(Book3);
  console.log('------------------')
  getBookInfo.call(Book4);
  console.log('------------------')
  getBookInfo.call(Book5);