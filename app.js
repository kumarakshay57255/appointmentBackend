const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const cors = require('cors')
const userRoutes = require('./routes/user');
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/user',userRoutes)

sequelize.sync().then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})
  

  
  app.listen(4000);