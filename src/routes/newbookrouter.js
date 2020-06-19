const express = require('express');
const newbookRouter = express.Router();

function router(nav){

    var newbook=[
        {
            type:"input",
            // label:"username",
            input:"text",
            value:"add a new book",
            assign:"user"
            
        },
        {
            type:"input",
            // label:"password",
            input:"text",
            value:"name of the author",
            assign:"pass"
        },
        {
            type:"input",
            // label:"password",
            input:"text",
            value:"type of genre",
            assign:"pass"
        },
        {
            type:"input",
            // label:"password",
            input:"file",
            value:"new image",
            assign:"pass"
        }
    ]

    newbookRouter.get('/',function(req,res){
    
        res.render("newbook.ejs",
        
        {
            nav,
            title:'add NewBook',
            newbook
    
        });
    });

    return newbookRouter;
}
    module.exports = router;