const express=require("express")
const app=express();
require("dotenv").config()
const bodyParser=require("body-parser")
const nodemailer=require("nodemailer")
const cors=require("cors")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.post("/send_mail",cors(),async(req,res)=>{
let {text}=req.body
const transport=nodemailer.createTransport({

    
    host:process.env.MAIL_HOST,
    port:process.env.MAIL_PORT,
    auth:{
        user:process.env.MAIL_USER,
       pass:process.env.MAIL_PASS
       
    }

})
await transport.sendMail({
    from:process.env.MAIL_FROM,
    to:"srijansingh1325singh@gmail.com",
    subject:"Testing Mail",
    html:`<div className="email" style="border:ipx solid black;
    padding:20px;
    font-family:sans-serif;
    line-height:2;
    font-size:20px;
   " >
        <h2>Here is your email</h2>
        <p>${text}</p>
        <p>All the Best srijan</p>
    </div>
    `
})

})



app.listen(
    (process.env.PORT || 4000, () => {
        console.log("Server is listening on port 4000")
    })
)