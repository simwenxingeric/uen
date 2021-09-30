const express = require('express')
const views = require('./controller/views.js')

const app = express()

const port = 3000 || process.env.port
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

views(app)

app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})


