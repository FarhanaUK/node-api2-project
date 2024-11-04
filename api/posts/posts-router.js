const express = require('express')
//const Posts = require('./posts-model')
const router = express.Router()



router.get('/', (req, res) => {
    res.json('foo')
})

module.exports = router