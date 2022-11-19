import Form from "./form"
import Input from "./input"
import SubmitButton from "./submitButton"

export default function CreateJobListingForm({updateFlag}){
  const handleSubmit = responses => {
    const body = new FormData()
    Object.entries(responses).forEach(([key, val]) => {
      body.append(key, val)
    })

    fetch('/api/joblistings', {
      method: 'POST',
      body
    }).then(res => {
      updateFlag(res.ok)
      return res.json()
    })
  }

  return <div className="min-h-screen w-full flex items-center justify-center p-4">
    <Form 
      handleSubmit={handleSubmit}
      label='Create a new job listing'
    >
      <Input label='Job title' type='text' name='title' />
      <Input label='Job location' type='test' name='location' />
      <Input label='Job compensation' type='number' name='compensation' />
      <SubmitButton />
    </Form>
  </div>
}