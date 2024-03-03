const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/trial')


.then(()=>{
    console.log("MongoDB connected")
})

.catch((e)=>{
    console.log('Connection Failed',e)
})

const NewSchema=new mongoose.Schema({
    email:{type:String, required:true, min:4, unique:true},
    password:{type:String, required:true}
})

const Collection=mongoose.model('collection',NewSchema)

module.exports=Collection