const express = require('express')
//const Posts = require('./posts-model')
const router = express.Router()



router.get('/', (req, res) => {
    res.json('foo')
})

router.get('/:id', (req, res) => {
    res.json('foo')
})

router.post('/', (req, res) => {
    res.json('foo')
})

router.delete('/:id', (req, res) => {
    res.json('foo')
})
router.put('/:id', (req, res) => {
    res.json('foo')
})

router.get('/:id:message', (req, res) => {
    res.json('foo')
})

module.exports = router