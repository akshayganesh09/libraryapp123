const express = require('express');
const authorsRouter = express.Router();

function router(nav){
    var authors = [

        {
            title : 'tom and jerry',
            author : 'joseph barbera',
            genre : 'cartoon',
            img : "joseph.jpg"
            
        },
        {
            title :'Harry Potter',
            author :'jk rowling',
            genre : 'fantasy',
            img : "jk.jpg"
            
        },
        {
            title :'A passage to India',
            author :'E K Froster',
            genre : 'documentry',
            img : "em.jpg"
            
        },{
            title :'The Great Gatsby',
            author :'F. Scott Fitzgerald',
            genre : 'classical fiction',
            img : "F.jpg"
            
        }
    ]
    
    
    
    authorsRouter.get('/',function(req,res){
    
        res.render("authors.ejs",
        
        {
            nav,
            title:'Library',
            authors
    
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
    
        const id = req.params.id
        res.render('author',
        {
            nav,
            title:'Library',
            author: authors[id]
        });
    });

    return authorsRouter;

}



module.exports = router;