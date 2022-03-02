const path = require('path')
const express = require('express')
const app = express()//đối tượng này đại diện cho ứng dụng website của bạn
const port = 3000//run web ở cổng ...
const handlebars = require('express-handlebars')

app.use(express.static(path.join(__dirname, 'public')))
//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

app.get('/', (req, res) => { // sử dụng => là arrow function
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.get('/search', (req, res) =>{
  res.render('search');
} )
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
