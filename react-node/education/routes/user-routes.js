const express = require('express')
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
//business logic signup
router.post('/signup',(req,res)=>{
    bcrypt.hash(req.body.pwd,10).then(
        (cryptedPwd)=>{
            const userInfo = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedPwd,
                tel:req.body.tel,
                role: req.body.role
            })
            userInfo.save((err, result) => {
                if (err) {
                    console.log('error into DB', err)
                    if (err.errors.email) {
                        res.status(200).json({
                            message:'email exist '
                        });  
                    }
                   
                } else {
                    console.log('resulta after save', result)
                    res.status(200).json({
                        message: 'user added',
                        insertUser: result
                    });
                }
            });
        }
    )
});
//business logic (1): login
router.post('/login', (req, res) => {
    console.log('Here into login', req.body);
    User.findOne({ email: req.body.email }).then(
        (result) => {
            if (!result) {
                res.status(200).json({
                    message: 'Please check Email'
                })
            } else {
                let pwdResult = bcrypt.compare(req.body.pwd, result.pwd);
                console.log('pwdResult', pwdResult);
                pwdResult.then(
                    (status)=> {
                        console.log('Here status',status);
                        if (status) {
                            User.findOne({ email: req.body.email }).then(
                                (finalResult) => {
                                    let userToSend = {
                                        firstName: finalResult.firstName,
                                        lastName: finalResult.lastName,
                                        role: finalResult.role
                                    }
                                    res.status(200).json({
                                        message: 'Welcome',
                                        user: userToSend
                                    });
                                });
                        } else {
                            res.status(200).json({
                                message: 'Please check Pwd'
                            });
                        }
                    }
                )
            }
        }
    )
});
module.exports = router;
//business logic (2): login
// app.post('/api/login',(req,res)=>{
//     console.log('req',req.body)
//     User.findOne({email:req.body.email}).then(
//         (result)=>{
//             console.log('here result login',result)
//             if (!result) {
//                 res.status(200).json({
//                     message: ' please check Email'
//                 })
//             } 
//             return bcrypt.compare(req.body.pwd, result.pwd);
//         }
//     ).then(
//         (pwdResult)=>{
//             console.log('pwdResult',pwdResult);
//             if (!pwdResult) {
//                 res.status(200).json({
//                     message: ' please check pwd'
//                 });
//             }
//             User.findOne({email:req.body.email}).then(
//                 (finalResult)=>{
//                     let userToSend = {
//                         firstName:result.firstName,
//                         lastName:result.lastName,
//                         role:result.role
//                     }
//                     if (finalResult) {
//                         res.status(200).json({
//                             message:'welcome',
//                             user:userToSend
//                         })
//                     }
                    
//                 }
//             )
//         }
//     )
// }) 

