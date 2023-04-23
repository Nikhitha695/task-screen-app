const exp = require('express');
const mongo = require('mongoose')
const cors = require('cors')
const routes = require('./routes/TaskScreen')
require('dotenv').config()
const app = exp();
const port = process.env.port || 5000

app.use(exp.json())
app.use(cors())

mongo.connect(process.env.MONGODB_URL)
.then(()=>console.log(`connected to MongoDB`))
.catch((err)=>console.log(err))

app.use(routes)

app.listen(port,()=>console.log(`Server listening on port : ${port}`));