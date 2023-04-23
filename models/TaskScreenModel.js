const mongo = require('mongoose');
const taskSchema = new mongo.Schema({
    text:{
        type: String,
        require: true
    }
})
module.exports = mongo.model('Task',taskSchema);