const express = require('express');
const router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function (err, docs) {
      let productChunks =[];
      let chunkSize = 3;
      for(let i = 0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('index', { title: 'Shopportunity', products: productChunks });
  });
});

module.exports = router;
