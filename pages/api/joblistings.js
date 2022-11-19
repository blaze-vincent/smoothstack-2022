import nextConnect from "../../middleware/nextConnect";
import requireAuthentication from "../../middleware/requireAuthentication";
import multer from "multer";
import JobListing from '../../db/models/jobListing'

const upload = multer()
export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = nextConnect()
.get(async (req, res) => {
  const jobListings = await JobListing.find({})

  if(!jobListings){
    return res.status(404).json({error: 'There are no job listings yet!'})
  }

  return res.status(200).json({jobListings})
})
.post(upload.none(), requireAuthentication, async (req, res) => {
  const {
    title, location, compensation
  } = req.body

  if(!title || !location || !compensation){
    return res.status(400).json({error: 'Title, location, and compensation are all required fields.'})
  }

  const jobListing = await JobListing.create({title, location, compensation})

  res.status(200).json(jobListing)
})
.delete(upload.none(), requireAuthentication, async (req, res) => {
  const { jobID } = req.body;
  const jobListing = await JobListing.findOneAndDelete({_id: jobID})

  if(!jobListing){
    return res.status(404).json({error: 'Cannot find specified job listing'})
  }
  return res.status(200).json({jobListing})
})
.put(upload.none(), requireAuthentication, async (req, res) => {
  const { _id, title, location, compensation } = req.body;

  const jobListing = await JobListing.findOneAndUpdate({_id}, {
    title, location, compensation
  })

  if(!jobListing){
    return res.status(404).json({error: 'Cannot find specified job listing'})
  }
  return res.status(204).json({jobListing})
})

export default handler;