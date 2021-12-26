
const express = require('express');
const path = require('path');

// creat express application
const app = express();
app.use('/images', express.static(path.join('images')))

//import body-parser module
const bodyParser = require('body-parser');
//configure body-parser to parse req body
app.use(bodyParser.urlencoded({ extended: true }));
// configure body-parser to send JSON respose
app.use(bodyParser.json());
const mongoose = require('mongoose');
//conect App to MONGO DB 
mongoose.connect('mongodb://localhost:27017/educationReactCorpDB');
//Security Configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//



//Define Routes
const courseRoutes = require('./routes/course-routes');
const eventRoutes = require('./routes/events-routers');
const userRoutes = require('./routes/user-routes');
const weatherRoutes = require('./routes/weather-routes');
const QuestionRoutes = require('./routes/question-routes')
//Configure Routes
app.use('/api/courses',courseRoutes);
app.use('/api/events',eventRoutes);
app.use('/api/users',userRoutes);
app.use('/api/weather',weatherRoutes);
app.use('/api/question',QuestionRoutes);
//Exports APP
module.exports = app;