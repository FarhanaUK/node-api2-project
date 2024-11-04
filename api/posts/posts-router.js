const express = require('express')
const Post = require('./posts-model')
const router = express.Router()



router.get('/', (req, res) => {
    Post.find()
    .then(found => {
        res.json(found)
    })
    .catch(err => {
        res.status(500).json({
            message: "The posts information could not be retrieved",
            err: err.message,
            stack: err.stack,
        })
    })
})

router.get('/:id', (req, res) => {
     const id = req.params.id
    Post.findById(id)
   
    .then(post => {
        if(post){
          res.json(post)  
        }else{
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        }
        
    })
    .catch(err => {
        res.status(500).json({
            message: "The post with the specified ID does not exist",
            err: err.message,
            stack: err.stack,
        })
    }
    )
})

router.post('/', (req, res) => {
    
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