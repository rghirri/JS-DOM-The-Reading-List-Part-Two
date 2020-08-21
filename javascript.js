var books = [
    {title: 'The Mary Berry Cook Book',
     author: 'Mary Berry',
     alreadyRead: false
    },
    {title: 'The 30 Min Meal ',
     author: 'Jamie Oliver',
     alreadyRead: true
    }];
      
  for (var i = 0; i < books.length; i++) {
    var bookP = document.createElement('p');
    var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookP.appendChild(bookDescription);
    document.body.appendChild(bookP);
  }
  