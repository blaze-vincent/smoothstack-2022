import { Schema, model, models } from 'mongoose';

const JobListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  compensation: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = models.JobListing || model('JobListing', JobListingSchema)