import Form from "./form"
import Input from "./input"
import SubmitButton from "./submitButton"

export default function CreateJobListingForm({updateFlag}){
  const handleSuccess = data => {
    updateFlag(!data.error)
  }

  return <div className="min-h-screen w-full flex items-center justify-center p-4">
    <Form 
      route='/api/joblistings'
      method='POST'
      handleSuccess={handleSuccess}
      label='Create a new job listing'
    >
      <Input label='Job title' type='text' name='title' />
      <Input label='Job location' type='test' name='location' />
      <Input label='Job compensation' type='number' name='compensation' />
      <SubmitButton />
    </Form>
  </div>
}