const express = require('express')
const app = express()
const port = 5000
app.use(express.json({}))
app.get('/',function (req, res) {
  res.send("Hello World")
})
app.get('/postData', (req, res) => {
  const data=req.body;
  req.json({message: "Hello ${name}", status :200});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})