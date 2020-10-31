const express = require('express')
// TODO: rename express Router to your resource
const guests = express.Router()
// TODO: rename your Model to your resource
// TODO: make sure you are requiring the correct file
const Guest = require('../models/guest.js')
const guestSeed = require("../models/seed.js");

// TODO: rename each router to your resource for each route and rename each model for all 5 routes

// CREATE
// TODO: rename router to your resource
guests.post('/', (req, res) => {
  // TODO: Update Contact to your resource
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
// TODO: rename router to your resource
guests.delete('/:id', (req, res) => {
  // TODO: Update Contact to your resource
  Guest.findByIdAndRemove(req.params._id, (error, deletedGuest) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json(deletedGuest)
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
