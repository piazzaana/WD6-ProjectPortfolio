const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order');

/* GET home page. */
router.get('/', function(req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find(function (err, docs) {
        let productChunks = [];
        let chunkSize = 3;
        for(let i = 0; i < docs.length; i += chunkSize){
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('index', { title: 'Shopportunity', products: productChunks, successMsg: successMsg, noMessage: !successMsg });
    });
});

router.get('/add-to-cart/:id', function (req, res, next) {
    let productId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if(err){
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});

router.get('/shopping-cart', function (req, res, next) {
    if(!req.session.cart) {
        return res.render('shopping-cart', {products:null});
    }
    let cart = new Cart(req.session.cart);
    res.render('shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', function (req,res,next) {
    if(!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    let cart = new Cart(req.session.cart);
    res.render('checkout', {total: cart.totalPrice});
});

router.post('/checkout', isLoggedIn, function (req, res, next) {
    if(!req.session.cart){
        return res.redirect('/shopping-cart');
    }
    let cart = new Cart(req.session.cart);
    let stripe = require("stripe")("sk_test_Nm4ul2p0g79wCgLhUB5xBZoD");

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test charge",
    }, function(err, charge) {
        console.log("inside the create charges function");
        if (err){
            console.log(err);
        }
        console.log('CHARGE ', charge);
        let order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function (err, result) {
            req.session.cart = null;
            res.redirect('/');
        });
    });
    console.log(req.body);
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    req.session.oldURL = req.url;
    res.redirect('/users/signin');
}