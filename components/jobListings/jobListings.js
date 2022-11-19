import Job from "./job"

export default function JobListings({jobs, admin=false, updateFlag}){
  return <div className="flex flex-col items-center min-h-screen w-full justify-center gap-4 p-4">
    <h3
      className="text-3xl font-bold"
    >JOB LISTINGS</h3>
    { jobs.length ? jobs.map((job, key) => {
      return <Job 
        key={key} 
        jobData={job} 
        admin={admin}
        updateFlag={updateFlag}
      />
    }) : <p className="text-xl">
      There are currently no jobs posted! {
        admin ? 'Create one using the form above.' : 'Try again another time.'
      }
    </p>}
  </div>
}