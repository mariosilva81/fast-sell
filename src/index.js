require('dotenv').config()
const express = require('express')
require('express-async-errors')
const cors = require('cors')

const { errorHandler } = require('./utils')
const {
  categoryRoute,
  clientRoute,
  loginRoute,
  orderRoute,
  productRoute,
  userRoute,
} = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/category', categoryRoute)
app.use('/user', userRoute)
app.use('/login', loginRoute)
app.use('/client', clientRoute)
app.use('/product', productRoute)
app.use('/order', orderRoute)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
