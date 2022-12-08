
import express from 'express'
const app = express()
const port = 3000
app.use(express.json())
import filesroutes from './routes/files.routes.js'

app.use(filesroutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
