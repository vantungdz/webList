const express = require('express');
const user = require('./routers/user');
const db = require('./config/index')
const app = express();

//connection to DB

db.connect((PORT)=>{
    app.listen(PORT,() =>{
        console.log('PORT' , PORT)
    })
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Connection successfuly");
});
app.use("/api/v1/fetchList", user);
