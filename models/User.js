const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    age:Number
},{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'update_at'
    }
})
module.exports = mongoose.model('User',userSchema)