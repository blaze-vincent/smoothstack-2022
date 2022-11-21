import DeleteButton from "./deleteButton"
import UpdateButton from "./updateButton";
import { useState, useRef } from "react"
import FieldEditable from "../form/fieldEditable";

export default function Job({jobData, admin, updateFlag}){
  const [updateMode, setUpdateMode] = useState(false);
  const containerEl = useRef(null)
  const getFields = () => {
    const fields = Array.from(containerEl.current.querySelectorAll('input')).map(input => {
      return {
        key: input.name,
        val: input.value
      }
    })
    return fields
  }

  return <div 
    ref={containerEl}
    className="flex flex-col gap-6 p-4 bg-neutral-50 shadow-md shadow-neutral-300 text-xl w-[45rem] max-w-full"
  >
    <input type='hidden' name='_id' value={jobData._id}/>
    <FieldEditable 
      className='text-2xl text-indigo-700 font-semibold'
      updateMode={updateMode}
      startingValue={jobData.title} 
      label='Title'
    />
    <FieldEditable 
      updateMode={updateMode}
      startingValue={jobData.location} 
      label='Location'
    />
    <FieldEditable 
      updateMode={updateMode}
      startingValue={jobData.compensation} 
      label='Compensation'
      type="number"
    />

    {admin ? <UpdateButton
      getFields={getFields}
      updateMode={updateMode} 
      setUpdateMode={setUpdateMode} 
      updateFlag={updateFlag} 
    /> : null }
    {admin ? <DeleteButton jobID={jobData._id} updateFlag={updateFlag} /> : null}
  </div>
}