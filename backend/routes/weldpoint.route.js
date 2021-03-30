const express = require('express')
const weldPointRoute = express.Router()
const WeldPoint = require('../models/WeldPoint')

//add 
weldPointRoute.route('/addWeldPoint').post((req, res, next) => {
    WeldPoint.create(req.body, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.json(data)
        }
    })
});

//get
weldPointRoute.route('/getWeldPoints').get((req, res) => {
    WeldPoint.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//get by Id
weldPointRoute.route('/getWeldPoint/:id').get((req, res) => {
    WeldPoint.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//update
weldPointRoute.route('/updateWeldPoint/:id').put((req, res, next) => {
    WeldPoint.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

//delete
weldPointRoute.route('/deleteWeldPoint/:id').delete((req, res, next) => {
    WeldPoint.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = weldPointRoute;