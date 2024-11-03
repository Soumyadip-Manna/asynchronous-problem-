const books = 
[
        
        {title: 'The Great Gatsby' ,
        author : 'F. Scott Fitzgerald',
        year : 1925
        },

        {title: 'To kill a Moking bird' ,
        author : 'Herper lee',
        year : 1960
        },

        {title: 'Who are you' ,
        author : 'F. Scott Fitzgerald',
        year : 1925
        }
];

function arrange(title){
     let newTitle=    title.sort();
        console.log(newTitle.join(','));
}

function passTitle(books,callBack){
     const titles =   books.map((book) => book.title);
     callBack(titles);
}

passTitle(books,arrange);