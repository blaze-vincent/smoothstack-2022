import Form from "./form"
import Input from "./input"
import SubmitButton from "./submitButton"

export default function SignInForm({onSignIn}){
  const handleSuccess = data => {
    onSignIn(!data.error)
  }

  return <div className="min-h-screen w-full flex items-center justify-center">
    <Form 
      route='/api/auth'
      handleSuccess={handleSuccess}
      method='POST' 
      label='You must sign in to create job listings'
    >
      <Input label='Username' type='text' name='username' />
      <Input label='Password' type='password' name='password' />
      <SubmitButton />
    </Form>
  </div>
}