const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnbInfo', { useNewUrlParser: true });

let dbSchema = mongoose.Schema({
    id: Number,
    city: String,
    title: String,
    hostImage: String,
    roomInfo: String,
    numberOfGuests: Number,
    numberOfBedrooms: Number,
    NumberOfBeds: Number,
    NumberOfBaths: Number,
    isSuperhost: Boolean,
    isGreatLocation: Boolean,
    isSparklingClean: Boolean,
    isGreatCheckIn: Boolean,
    isSelfCheckIn: Boolean,
    description: String,
    amenities: Object,
    sleepingArrangements: Object,
});

let db = mongoose.model('Listing', dbSchema);


module.exports = db;
