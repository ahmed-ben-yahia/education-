const express = require('express')
const router = express.Router();
const Question = require('../models/question');

router.post("/",(req,res)=>{
    console.log(' req.body',req.body);
    const infoQuestion = new Question({
        email: req.body.email,
        message: req.body.message
    });
    infoQuestion.save((err, result) => {
        if (err) {
            console.log('error into DB', err);
        } else {
            res.status(200).json({
                message: 'add message',
                questionInfo: result
                
            });

        }
    })
});
router.get('/',(req,res)=>{
    Question.find().then(
        (result) => {
            console.log('here message', result)
            if (result) {
                res.status(200).json({
                    findedQuestion: result
                    
                })
            } 
        }
    )

})
module.exports = router;