const path = require('path')
const morgan = require('morgan')
const express = require('express')
const handlebars = require('express-handlebars').engine;
const app = express()
const port = 5000

app.use(morgan('combined'))

app.engine('handlebars' , handlebars())
app.set('view engine' , 'handlebars')
// app.set('views' , path.join(__dirname , 'resource/views'))

console.log(__dirname)

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})