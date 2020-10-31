const express = require('express')
const cors = require('cors')
// TODO: rename express Router to your resource
const guests = express.Router()
// TODO: rename your Model to your resource
// TODO: make sure you are requiring the correct file
const Guest = require('../models/guest.js')
const guestSeed = require("../models/seed.js");

// CREATE
guests.post('/', (req, res) => {
  Guest.create(req.body, (error, createdGuest) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).send(createdGuest)
  })
})

// READ
// TODO: rename router to your resource
guests.get('/', (req, res) => {
  // TODO: Update Contact to your resource
  Guest.find({}, (error, foundGuests) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json(foundGuests)
  })
})

// UPDATE
// TODO: rename router to your resource
guests.put('/:id', (req, res) => {
  // TODO: Update Guest to your resource
  Guest.findByIdAndUpdate(
    req.params._id,
    req.body,
    { new: true },
    (err, updatedGuest) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedGuest)
    }
  )
})

// DELETE
guests.delete('/:id', (req, res) => {
<<<<<<< HEAD
  Guest.findByIdAndRemove(req.params.id, (error, deletedGuest) => {
=======
  // TODO: Update Contact to your resource
  Guest.findByIdAndRemove(req.params._id, (error, deletedGuest) => {
>>>>>>> e9185238a60717fb4c2feffb517655f7cace53ae
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json({deletedGuest, params: req.params})
  })
})

// Handle 404
// TODO: rename router to your resource
guests.get('/*', (req, res) => {
  res.status(404).json({ error: 'page not found' })
})

// Guest.create(guestSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided guest data')
// })

module.exports = guests
