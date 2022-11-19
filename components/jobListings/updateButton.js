export default function UpdateButton({jobData, updateMode, setUpdateMode, updateFlag}){
  const onClick = () => {
    const body = new FormData()
    Object.entries(jobData).forEach(([key, val]) => {
      body.append(key, val)
    })
    if(updateMode){
      fetch('/api/joblistings', {
        method: 'PUT',
        body
      }).then(res => {
        setUpdateMode(!res.ok)
        updateFlag(res.ok)
      })
    } else {
      setUpdateMode(true)
    }
  }
  
  return <button
    className="bg-indigo-700 p-2 text-neutral-50 text-xl rounded"
    onClick={onClick}
  >
    {updateMode ? 'Submit' : 'Edit'}
  </button>
}