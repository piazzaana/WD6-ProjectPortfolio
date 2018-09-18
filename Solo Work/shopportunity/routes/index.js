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

router.post('/checkout', function (req, res, next) {
    console.log(req.body);
    if(!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    let cart = new Cart(req.session.cart);

    var stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test charge"
    }, function(err, charge) {
        if(err){
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        console.log(charge);
        req.flash('success','Successfully paid');
        req.cart = null;
        res.redirect('/');
    });

});

module.exports = router;