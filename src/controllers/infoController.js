/*
* 1. create function for GET, POST, PUT and DELETE methods
* 2. export functions
*/

const Info = require('../models/info');


exports.createNewInfo = function (req, res) {
    Info.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newInfo) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ message: "new info created", newInfo})
        }
    })
}


exports.fetchInfo = function (req, res) {
    Info.find({}, (err, info) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ info })
        }
    })
}


exports.fetchSingleInfo = function (req, res) {
    Info.findById(req.params.id, (err, info) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!info) {
            return res.status(404).json({ message: "information not found"})
        } else {
            return res.status(200).json({ info })
        }
    })
}


exports.updateSingleInfo = function (req,res) {
    Info.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, info) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!info) {
            return res.status(404).json({ message: "information not updated"})
        } else {
            info.save((err, savedInfo) => {
                if (err) {
                    return res.status(400).json({ message: err})
                } else {
                    return res.status(200).json({ message: "information updated successfully"})
                }
            })
        }
    })
}


exports.deleteSingleInfo = function (req, res) {
    Info.findByIdAndDelete(req.params.id, (err, info) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!info) {
            return res.status(404).json({ message: "information not found"})
        } else {
            return res.status(200).json({ message: "information deleted successfully"})
        }
    })
}