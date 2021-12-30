const express = require('express')
const app = express()
const port = 80

app.use(express.urlencoded({extended: true}))
app.use(express.static('img'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("ha ha https://youtu.be/j1RjqonnU7M?t=121")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
