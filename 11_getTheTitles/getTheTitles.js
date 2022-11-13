const getTheTitles = function() {

    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]   

let test = [];

for (i = 0; i < books.length; i++){
    book = books[i].title
    test[i] = book;
}
return test;

};

// Do not edit below this line
module.exports = getTheTitles;
