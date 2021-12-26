const express = require('express')
const multer = require('multer');
const MIME_TYPE = {
 'image/png': 'png',
 'image/jpeg': 'jpg',
 'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
    error = null;
    }
    cb(null, 'images')
    },
    filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
   extension;
    cb(null, imgName);
    }
   });




   
const Course = require('../models/course');

const router = express.Router();
router.post("/",multer({ storage: storage }).single('img'), (req, res) => {
    console.log('add course with successful ', req.body)
    let url = req.protocol + "://" + req.get('host');
    const courseInfo = new Course({
        teacher: req.body.teacher,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        img: url +  "/images/" + req.file.filename
    })
    courseInfo.save((err, result) => {
        if (err) {
            console.log('error into DB', err)
        } else {
            console.log('resulta after save', result)
            res.status(200).json({
                message: 'course added'
            });
        }
    });
});
//business logic to post user into DB 

//business logic Get All courses 
router.get('/', (req, res) => {
    console.log('here into get all courses');
    //Find all documents from courses
    Course.find((err, docs) => {
        console.log('here', docs)
        if (err) {
            console.log('error with DB');
        } else {
            // Res :Array if Objects
            res.status(200).json({
                courses: docs
            });
        }
    });
});
//
router.get('/:id', (req, res) => {
    console.log('here into get course by ID', req.params.id)
    Course.findOne({ _id: req.params.id }).then(
        (result) => {
            console.log('here resulta after find by id', result);
            if (result) {
                res.status(200).json({
                    findedCourses: result
                });
            } else {
                res.status(200).json({
                    message: `not found by ID =${req.params.id}`
                });
            }
        }
    )
});
//
router.delete('/:id', (req, res) => {
    Course.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('here resulta after find by id', result);
            if (result.deletedCount == 1) {
                Course.find().then(
                    (courses) => {
                        res.status(200).json({
                            courses: courses,
                            message: `Course id:${req.params.id}is deleted successfully`
                        });
                    }
                )

            } else {
                res.status(200).json({
                    message: `Course id:${req.params.id}does not exist`
                });
            }
        }
    )

});
//
router.put('/:id', (req, res) => {
    Course.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            console.log('Result affter update', result);
            if (result.modifiedCount == 1) {
                res.status(200).json({
                    message: 'course is updated successfully'
                });

            } else {
                res.status(200).json({
                    message: 'course does not exist'
                });
            }
        }
    )
});
module.exports = router;