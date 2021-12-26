const express = require('express')
const router = express.Router();
const Event = require('../models/events');
router.post('/', (req, res) => {
    console.log('event send to bach ', req.body);
    const infoEvent = new Event({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        date: req.body.date,
        teacherId: req.body.teacherId
    });
    infoEvent.save((err, result) => {
        if (err) {
            console.log('error into DB', err);
        } else {
            res.status(200).json({
                message: 'add event',
                envenIfo: result
            });

        }
    })
});
//business logic Get All event by teacher ID
router.get('/', (req, res) => {
    //console.log('here into get ', req.params.id)
    Event.find().then(
        (result) => {
            console.log('here result', result)
            if (result) {
                res.status(200).json({
                    findedEvent: result
                })
            } 
        }
    )
});
//business logic Get All event by  ID
router.get('/allEvent/:idEvent', (req, res) => {
    console.log('here into get all event', req.params.idEvent)
    Event.findOne({ _id: req.params.idEvent }).then(
        (result) => {
            console.log('here result', result)
            if (result) {
                res.status(200).json({
                    findedEvent: result
                })
            } else {
                res.status(200).json({
                    message: `not found by ID =${req.params.idEvent}`
                })
            }
        }
    )
});
//
router.delete('/:id',(req,res)=>{
    console.log('here param',req.params.id)
    Event.deleteOne({_id: req.params.id}).then(
        (result)=>{
            console.log('here result ',result)
            if (result.deletedCount == 1) {
                Event.find().then(
                    (Event)=>{
                        res.status(200).json({
                            Event:Event,
                            message: `event id:${req.params.id}is deleted successfully`
                        });
                    }
                )
            } else {
                res.status(200).json({
                    message:`Event id:${req.params.id}does not exist`
                });
            }
        }
    )
});
//
router.put('/:id', (req, res) => {
    Event.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            console.log('Result affter update', result);
            if (result.modifiedCount == 1) {
                res.status(200).json({
                    message: 'event is updated successfully'
                });

            } else {
                res.status(200).json({
                    message: 'event does not exist'
                });
            }
        }
    )
});
module.exports = router;
