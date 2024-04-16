const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vamsisaketh59:********@cluster0.fwcxvux.mongodb.net/")
const todoSchema =  mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

// mongodb+srv://vamsisaketh59:<password>@cluster0.fwcxvux.mongodb.net/