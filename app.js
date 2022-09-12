const express = require("express");  
const path = require("path");
// const fs = require("fs");
const app = express(); 
const port =8000; 


// app.use(express.static(path.join('static', options)))
app.use('/static', express.static('static'));  

app.use(express.urlencoded());

app.set('view engine', 'pug');
                                               
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    
    
    const params = { } 

    res.status(200).render('home.pug', params);

})

app.get("/contact", (req, res) => { 

    const params= { }

    res.status(200).send('contact.pug', params);
});




app.listen(port, () =>{
        console.log(`The app is running on port ${port}`); 
    }); 



       
    To be included for database tests

    var mongoose =require('mongoose');
        
         const bodyparser = require('bodyparser');
         mangoose.connect('mongod://localhost/contactDance', {useNewUrlParser:true});
    const contactSchema = new mongoose.Schema({
        name: String
        phone: String
        address: String
        email: String
        esc: String
      });

      const Contact = mongoose.model('Kitten', contactSchema);

      const bodyparser = require(“body-parser”);

      app.post(‘/contact’, (req, res)=>{
        var myData = new Contact(req.body);
        myData.save().then(()=>{
        res.send(“This item has been saved to the database”)
        }).catch(()=>{
        res.status(400).send(“item was not saved to the databse”)
    })