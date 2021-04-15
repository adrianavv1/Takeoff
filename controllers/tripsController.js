const db = require('../models');
const Trip = db.Trip;

module.exports = {
  findAll: async function (req, res) {
    let trips = await Trip.find({ user: req.body.userId });
    res.json(trips);
  },
  findById: async function (req, res) {
    let trip = await Trip.findById(req.params.id);
    res.json(trip);
  },
  create: async function (req, res) {
    let newTrip = new Trip(req.body);
    let savedTrip = await newTrip.save();
    res.json(savedTrip);
  },
  update: async function (req, res) {
    let trip = await Trip.findById(req.params.id);
    let update = req.body;
    await trip.updateOne(update);
    res.json(trip);
  },
}
