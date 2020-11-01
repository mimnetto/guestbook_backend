const express = require('express')
const cors = require('cors')
const guests = express.Router()
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
guests.get('/', (req, res) => {
  Guest.find({}, (error, foundGuests) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json(foundGuests)
  })
})

// UPDATE
guests.put('/:id', (req, res) => {
  Guest.findByIdAndUpdate(
    req.params.id,
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
  Guest.findByIdAndRemove(req.params.id, (error, deletedGuest) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json({deletedGuest, params: req.params})
  })
})

// Handle 404
guests.get('/*', (req, res) => {
  res.status(404).json({ error: 'page not found' })
})

// Guest.create(guestSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided guest data')
// })

module.exports = guests
