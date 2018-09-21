const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect( process.env.DB_HOST +'://'+ process.env.DB_USER +':27017/shopportunity',{ useNewUrlParser: true });

let products = [
    new Product({
        imagePath: 'images/chris-liverani-563711-unsplash.jpg',
        title: 'PS4 Controller',
        description: 'Remote controller for play station 4 video game console',
        price: 45
    }),
    new Product({
        imagePath: 'images/hal-gatewood-569073-unsplash.jpg',
        title: 'Billiard',
        description: 'A guys game',
        price: 450
    }),
    new Product({
        imagePath: 'images/aditya-chinchure-709014-unsplash.jpg',
        title: 'Playing Cards',
        description: 'Fun, fun, fun!!!',
        price: 5
    }),
    new Product({
        imagePath: 'images/chase-clark-509092-unsplash.jpg',
        title: 'Chess',
        description: 'Chess game board',
        price: 20
    }),
    new Product({
        imagePath: 'images/lidya-nada-744078-unsplash.jpg',
        title: 'Cup stacking',
        description: 'A fun game to play alone',
        price: 0
    }),
    new Product({
        imagePath: 'images/aaron-burden-219469-unsplash.jpg',
        title: 'Kite Fly',
        description: 'Encourage the kids to play outside',
        price: 15
    }),
];

let done = 0;

for(let i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}