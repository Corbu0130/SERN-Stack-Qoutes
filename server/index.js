const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const db = require("./qoutes")

const app = express()

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//ROUTES//

//new todo
app.post("/home", async (req,res) => {
    try {

        //const {description} = req.body
        const id = await db.newQoute(req.body)
        const result = await db.getQoute(id[0])
        
        res.status(201).json(result[0])
        
    } catch (err) {
        console.error(err.message)
    }
})

//get all todos
app.get("/home", async (req,res) => {
    try {
        
        const todos = await db.getQoutes()

        res.status(200).json(todos)

    } catch (err) {
        console.error(err.message)
    }
})

//get a todo
app.get("/home/:id", async (req,res) => {
    //console.log(req.params)
    try {
        
        const result = await db.getQoute(req.params.id)

        res.status(200).json(result[0])

    } catch (err) {
        console.error(err.message)
    }
})

//update todo
app.patch("/home/:id", async (req,res) => {
    try {
        
        const count = await db.updateQoute(
            req.params.id,
            req.body
        )

        if (count) {
            res.status(200).json({updated: count})
        }

    } catch (err) {
        console.error(err.message)
    }
})

//delete todo
app.delete("/home/:id", async (req,res) => {
    try {
        
        const count = await db.deleteQoute(req.params.id)
        
        if (count) {
            res.status(200).json({ success: true })
        }

    } catch (err) {
        console.error(err.message)
    }
})

const port = 5000
app.listen(port, () => {
    console.log("server has started in port "+port)
})