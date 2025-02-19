const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defining Mongoose Schema
const unspscSchema = new Schema({
  segment: String,
  segmentTitle: String,
  family: String,
  familyTitle: String,
  class: String,
  classTitle: String,
  key: String,
  commodity: String,
  commodityTitle: String,
  definition: String,
  synonym: String
});

// Create mongoose model
module.exports = mongoose.model("UNSPSCCode", unspscSchema);
