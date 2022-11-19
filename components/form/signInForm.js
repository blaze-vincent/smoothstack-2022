import Form from "./form"
import Input from "./input"
import SubmitButton from "./submitButton"

export default function SignInForm({onSignIn}){
  const handleSubmit = responses => {
    const body = new FormData()
    Object.entries(responses).forEach(([key, val]) => {
      body.append(key, val)
    })

    fetch('/api/auth', {
      method: 'POST',
      body
    }).then(res => {
      onSignIn(res.ok)
    })
  }

  return <div className="min-h-screen w-full flex items-center justify-center">
    <Form 
      handleSubmit={handleSubmit}
      label='You must sign in to create job listings'
    >
      <Input label='Username' type='text' name='username' />
      <Input label='Password' type='password' name='password' />
      <SubmitButton />
    </Form>
  </div>
}