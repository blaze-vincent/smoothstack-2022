import { useState } from "react"
export default function DeleteButton({updateFlag, jobID}){
  const onClick = () => {
    const body = new FormData()
    body.append('jobID', jobID)
    fetch('/api/joblistings', {
      method: 'DELETE',
      body
    }).then(res => {
      updateFlag(res.ok)
    })
  }

  return <button
    className="bg-red-500 p-2 rounded"
    onClick={onClick}
  >
    Delete
  </button>
}