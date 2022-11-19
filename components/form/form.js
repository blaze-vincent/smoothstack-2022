export default function Form({label, handleSubmit, children}){
  const onSubmit = e => {
    e.preventDefault()
    const responses = {}
    Array.from(e.target.elements)
      .filter(element => element.name)
      .forEach(element => {
        responses[element.name] = element.value
      })
    handleSubmit(responses)
  }

  return <div className="flex flex-col items-start w-[30rem] gap-4">
    <h3 className="font-bold text-3xl">
      {label}
    </h3>
    <form 
      className="flex flex-col gap-6 items-center w-full text-xl shadow-neutral-300 shadow-md bg-neutral-50 p-4 pt-8"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  </div>
}