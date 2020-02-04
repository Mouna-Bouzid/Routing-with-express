const express=require('express')
const hbs=require('handlebars')
const app=express()



let date = new Date().getHours()

app.listen(3000, (err)=>{
    if (err){console.log("ERROR")}
    else {
        console.log('server is running on localhost:3000')
    }
})
app.use(express.static(__dirname+'/views'))

app.get('/',function (req,res){
    if(date>17 && date<8){
    res.sendFile(__dirname+"/views/outOfServices.html")
    }
    else {res.sendFile(__dirname+'/views/home.html')}
})

