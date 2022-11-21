import SignInForm from "../components/form/signInForm";
import CreateJobListingForm from "../components/form/createJobListingForm";
import Hero from "../components/hero/hero";
import { useEffect, useState } from "react";
import JobListings from "../components/jobListings/jobListings";

export default function Internal(){
  const [signedIn, setSignedIn] = useState(false)
  const [jobs, setJobs] = useState([])
  const [jobsNeedUpdated, setJobsNeedUpdated] = useState(true)

  useEffect(() => {
    fetch('/api/auth', {
      method: 'POST',
      body: new FormData()
    }).then(res => {
      setSignedIn(res.ok)
    })
  }, [])

  useEffect(() => {
    if(jobsNeedUpdated){
      fetch('/api/joblistings').then(res => {
        return res.json()
      }).then(res => {
        setJobs(res.jobListings)
      })
    }
    setJobsNeedUpdated(false)
  }, [jobsNeedUpdated])

  return <div>
    <Hero 
      backgroundMedia={{
        type: 'image',
        src: '/ideasman.jpg'
      }}
      h1Content='SMOOTHSTACK INTRANET'
      h2Content='Create, update, and delete job listings'
    />
    {signedIn ? <div>
      <CreateJobListingForm updateFlag={setJobsNeedUpdated} /> 
      <hr className="mx-8"/>
      <JobListings 
          jobs={jobs} 
          updateFlag={setJobsNeedUpdated}
          admin={true}
      />
    </div>: <SignInForm onSignIn={setSignedIn} />}
  </div>
}