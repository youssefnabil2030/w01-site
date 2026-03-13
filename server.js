const express = require("express")
const app = express()

require("dotenv").config()

app.set("view engine","ejs")

app.use(express.static("public"))

app.get("/",(req,res)=>{
res.render("home",{title:"Home"})
})

app.get("/organizations",(req,res)=>{
res.render("organizations",{title:"Organizations"})
})

app.get("/projects",(req,res)=>{
res.render("projects",{title:"Projects"})
})

app.get("/categories",(req,res)=>{
res.render("categories",{title:"Categories"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log("Server running")
})