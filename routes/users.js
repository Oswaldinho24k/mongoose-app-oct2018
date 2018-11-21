const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/new', (req, res)=>{
    User.create({name:'Oswaldinho', age:15, email:'oswaldo@ironhack.org'})
        .then(r=>{
            console.log(r)
            res.redirect('/users')
        }).catch(e=>{
            res.send(e)
        })
})

router.get('/users', (req, res)=>{
    User.find()
        .then(users=>{
            res.render('users', {users})
        }).catch(e=>console.log(e))
})

module.exports = router