const express =require('express')
const {createTodo} = require("./types");
const {todo} = require("./db");
const cors =  require("cors");
const app = express()

app.use(express.json());
app.use(cors{(
    origin: "https://localhost:5173"
)});


app.post("/todo", async function(req,res){
    const createPayload= req.body;
    const parsedPayload = createTodo.safePase(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return;
    }
     await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})


app.get("/todos", async function(req, res){
    const todos = await todo.find({ });
        res.json({
            todos
        })
   
    

})

app.put("/completed",  async function(req, res){
   const UpdatePayload = req.body;
   const parsedPayload= UpdatePayload.safePase(UpdatePayload);
   if(!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
    return;
   }
   await todo.update({
    _id: req.body._id
   },{
    completed: true
   })
   res.json({
    msg: " Todo marked as completed"
   })
})


app.listen(3000);


