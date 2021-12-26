const express = require('express')
const router = express.Router();
const axios = require('axios');
router.post('/',(req,res)=>{
    const city = req.body.city
    console.log('here into wather',)
    const apiKey = "ee08fdfc8274c9baa1877fa181ca85d1";
    const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey + "&units=metric";    
    axios 
    .get(apiUrl)
    .then((response) => {
        res.status(200).json({
                tepMin :response.data.main.temp_min,
                tepMax :response.data.main.temp_max,
                windSSpeed :response.data.wind.speed,
                icon:response.data.weather[0].icon
        })
      console.log('Here response', response.data);   
})

});
module.exports = router;