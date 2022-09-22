const express = require('express')
const app = express()
const port = 3000

//telling express where all aour static files located
app.use(express.static(__dirname + '/public/'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})