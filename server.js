const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
require('dotenv').config();
const socket = require('socket.io');
const app = express();
const server = require('http').createServer(app);
// const io = socket(server);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        server.listen(port, () => console.log(`App listen at port ${port} and mongoose is connected`));
    })
    .catch((err) => console.log(err));

// middleware
app.use(express.json());
// app.use(bodyParser.json());

app.use('/api/auth/', require('./routes/authRoutes'))
// socket

// io.on('connection', (socket) => {
//     console.log('We have a new connection')
// })

