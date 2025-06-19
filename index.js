// // Description: A simple Express.js server with three routes: home, about, and contact.
const express = require('express');
const { connectMongoDb } = require('./config/database');
const userRouter = require('./routes/user');
// const {logReqRes} = require('./controllers/middlewares');

const app = express()

const hostname = '127.0.0.1';
const port = 8000;
// const { timeStamp } = require('node:console');
// Connect to MongoDB
connectMongoDb('mongodb://localhost:27017/node_test_proj').then(() => {
  console.log('Connected to MongoDB');
}
).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// // Miiddleware
app.use(express.urlencoded({ extended: false }));
// app.use(logReqRes('log.txt'));

// //Router
app.use('/api/users', userRouter);


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}
);