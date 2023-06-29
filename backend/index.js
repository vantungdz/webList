const express = require('express');
const user = require('./routers/user');
const db = require('./config/index')
const app = express();
const cors = require('cors')
const morgan = require('morgan')

//connection to DB



db.connect((PORT)=>{
    app.listen(PORT,() =>{
        console.log('PORT' , PORT)
    })
});

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Connection successfuly");
});
app.use("/api/v1/fetchList", user);
