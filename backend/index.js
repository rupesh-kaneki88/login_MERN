const express=require('express')
const app=express();
const cors=require('cors');
const Collection = require('./models/Mongo');

app.use(cors())
app.use(express.json())

app.get('/signup',cors(),(req,res)=>{

})

app.post('/signup',async(req,res)=>{{
    const {email,password}=req.body
    // const userDoc= await User.create({
    //     email,password
    // })

    const data={
        email:email,
        password:password
    }

    try{
        const check=await Collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json('notexist')
            await Collection.create(data)
        }
    }
    catch(e){
        res.json("notexist")
    }


}})

app.post('/login',async(req,res)=>{{
    const {email,password}=req.body
    
    try{
        const check=await Collection.findOne({email:email})
        if(check){
            if(password==check.password){
                res.json("exist")
            }
            else{
                res.json("invalidpass")
            }
            
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        console.log(e)
        res.json("error")
    }
}})

app.listen(8000,()=>{
    console.log("port Connected")
})