import Hero from "../components/hero/hero";
import JobListings from "../components/jobListings/jobListings";
import JobListing from '../db/models/jobListing'
import jsonify from '../utils/jsonify'

export async function getServerSideProps() {
  const jobs = await JobListing.find({})

  return {
    props: {
      jobs: jsonify(jobs)
    }, // will be passed to the page component as props
  }
}

export default function Jobs({jobs}){
  return <div>
    <Hero 
      backgroundMedia={{
        type: 'image',
        src: '/peopleWorking.jpg'
      }}
      h1Content='ACTIVE JOB LISTINGS'
      h2Content='View all currently-active job listings'
    />
    <div>
      {jobs ? <JobListings jobs={jobs} /> : 'There are no jobs at the moment!' }
    </div>
  </div>
}