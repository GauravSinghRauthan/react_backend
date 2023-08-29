const mongoose = require('mongoose')

const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.BD_URL)
        console.log("sever connected to database")
    }catch(err){
        console.log(err.message)
    }
}

module.exports = dbConnect;