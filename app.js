const express = require('express');
const app = express();
const nav = [
        {
            link:'/books',name:'Books'
        },
        {
            link:'/authors',name:'Authors'
        },
        {
            link:'/login',name:'Login'
        },
        {
            link:'/signup', name:'Signup'
        },
        {
            link:'/newbook', name:'NewBook'
        }
        
    ];

const booksRouter = require('./src/routes/bookroutes')(nav)
const authorsRouter = require('./src/routes/authorrouter')(nav)
const loginRouter = require('./src/routes/loginrouter')(nav)
const newbookRouter = require('./src/routes/newbookrouter')(nav)
const signupRouter = require('./src/routes/signuprouter')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs'); 
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/newbook',newbookRouter);
app.use('/signup',signupRouter);

app.get('/',function(req,res){

    res.render("index",

    {
        nav,
        title:'Library'

    });  
});
   

app.listen(5000);