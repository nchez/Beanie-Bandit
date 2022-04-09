const express = require('express') // import express
const app = express() // create an express instance
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile('./public/index.html')
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Auth app running on ${PORT}`)
})
