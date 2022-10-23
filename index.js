const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


//RENDER ABOUT PAGE

app.get("/", (req, res) => {
    res.render("home")
})

//app.get('/about', (req, res) => {
//    res.render('about');
//})

//RENDER ARTICLE LIST PAGE
app.get('/art_list', (req, res) => {
    res.render('art_list');
})

//RENDER ARTICLE PAGE
app.get('/art', (req, res) => {
    res.render('art');
})

//RENDER BLOG LIST PAGE
app.get('/blog_list', (req, res) => {
    res.render('blog_list');
})

//RENDER BLOG PAGE
app.get('/blog', (req, res) => {
    res.render('blog');
})

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})