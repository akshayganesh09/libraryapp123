const express = require('express');
const booksRouter = express.Router();

function router(nav){
    var books = [

        {
            title : 'tom and jerry',
            author : 'joseph barbera',
            genre : 'cartoon',
            img : "Tom.jpg"
            
        },
        {
            title :'Harry Potter',
            author :'jk rowling',
            genre : 'cartoon',
            img : "harry.jpg"
            
        },
        {
            title :'A passage to India',
            author :'E K Froster',
            genre : 'documentry',
            img : "a.jpg"
            
        },{
            title :'The Great Gatsby',
            author :'F. Scott Fitzgerald',
            genre : 'classical fiction',
            img : "t.png"
            
        }
    ]
    
    
    
    booksRouter.get('/',function(req,res){
    
        res.render("books.ejs",
        
        {
            nav,
            title:'Library',
            books
    
        });
    });
    
    booksRouter.get('/:id',function(req,res){
    
        const id = req.params.id
        res.render('book',
        {
            nav,
            title:'Library',
            book: books[id]
        });
    });

    return booksRouter;

}



module.exports = router;