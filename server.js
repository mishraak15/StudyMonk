express = require('express');
const path = require('path');
const app = express();
const port = 800;

// var mongoose = require("mongoose");  //declaring the mongoose
// // To connect the mongoose

// mongoose.connect('mongodb://127.0.0.1:27017/ContactDance',
//     {
//         useNewUrlParser: true
//     }
// );

// Declaration of a dance schema
// const DanceSchema = new mongoose.Schema({
//     name: String,
//     gender: String,
//     email: String,
//     mobileno: Number,
//     address: String,
//     medical: String
// });

// var contact = mongoose.model('contact', DanceSchema)   //Schema ka ek model banaya


//For serving static files
app.use('/assets', express.static('assets'));
app.use('/css', express.static('css'));
app.use('/JS', express.static('JS'));
app.use(express.urlencoded({
    extended: true
  }));


//ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).sendFile('home.html', { root:'./html' });
    
})

app.get('/home', (req, res) => {
    res.status(200).sendFile('home.html', { root:'./html' });
    
})

app.get('/contact', (req, res) => {
    res.status(200).sendFile('contact.html', { root:'./html' });
})

app.get('/services', (req, res) => {
    res.status(200).sendFile('services.html', { root:'./html' });
})

app.get('/blogs', (req, res) => {
    res.status(200).sendFile('blog.html', { root:'./html' });
})
app.get('/about', (req, res) => {
    res.status(200).sendFile('about.html', { root:'./html' });
})

// Starting the server
app.listen(port, () => {
    console.log(`The server started successfully at port ${port}`);
});