const express = require('express');

const dotenv = require('dotenv');

dotenv.config()

const connectDB = require('./src/config/db')

connectDB()

const PORT = process.env.PORT

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', require('./src/routes/userRoutes'))
app.use('/api/blogs', require('./src/routes/blogRoutes'))
app.use('/api/comments', require('./src/routes/commentRoutes'))

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}..`)
})