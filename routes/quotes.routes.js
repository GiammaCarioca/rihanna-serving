const express = require('express')

const quotesController = require('../controllers/quotesController')

const router = express.Router()

router.get('/', quotesController.getRandomQuote)

router.get('/all', quotesController.getAllQuotes)

router.get('/search/:term', quotesController.searchQuotes)

module.exports = router
