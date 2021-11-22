const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(port, () => {
    console.log(`Express is listening on localhost:${port}`)
})