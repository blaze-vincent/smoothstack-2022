import DeleteButton from "./deleteButton"
import UpdateButton from "./updateButton";
import { useState } from "react"
import Input from "../form/input";

export default function Job({jobData, admin, updateFlag}){
  const [updateMode, setUpdateMode] = useState(false);
  const [jobTitle, setJobTitle] = useState(jobData.title);
  const [jobLocation, setJobLocation] = useState(jobData.location);
  const [jobCompensation, setJobCompensation] = useState(jobData.compensation);

  return <div className="flex flex-col gap-6 p-4 bg-neutral-50 shadow-md shadow-neutral-300 text-xl w-[45rem] max-w-full">
    {updateMode ? <>
      <Input 
        defaultValue={jobData.title} 
        label='Title' 
        type='text' 
        key='title'
        onChange={e => {
          setJobTitle(e.target.value)
        }}
      />
      <Input 
        defaultValue={jobData.location} 
        label='Location' 
        type='text' 
        key='location'
        onChange={e => {
          setJobLocation(e.target.value)
        }}
      />
      <Input 
        defaultValue={jobData.compensation} 
        label='Compensation' 
        type='number' 
        key='compensation'
        onChange={e => {
          setJobCompensation(e.target.value)
        }}
      />
    </> : <>
      <h4
        className="text-2xl text-indigo-700"
      >{jobData.title}</h4>
      <p>{jobData.location}</p>
      <p>${jobData.compensation}</p>
    </>}

    {admin ? <UpdateButton
      jobData = {{
        _id: jobData._id,
        title: jobTitle,
        location: jobLocation,
        compensation: jobCompensation
      }}
      updateMode={updateMode} 
      setUpdateMode={setUpdateMode} 
      updateFlag={updateFlag} 
    /> : null }
    {admin ? <DeleteButton jobID={jobData._id} updateFlag={updateFlag} /> : null}
  </div>
}