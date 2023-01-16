const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "name":"Artes marciais tradicionais - Viet Vo Dao"
    },
    {
      "id":"2",
      "name":"Defesa Pessoal Karate Contact"
    },
    {
      "id":"3",
      "name":"Artes Marciais Históricas Europeias"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})