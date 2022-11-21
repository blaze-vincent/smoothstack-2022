export default function Form({label, route, method = 'POST', handleSuccess, children}){
  const onSubmit = e => {
    e.preventDefault()

    const body = new FormData();
    Array.from(e.target.elements)
      .filter(element => element.name)
      .forEach(element => {
        body.append(element.name, element.value)
      })
    
    fetch(route, {
      method,
      body
    }).then(res => {
      if(res.ok){
        return res.json()
      } else {
        return { error: 'res.ok is false' }
      }
    }).then(json => {
      handleSuccess(json)
    })
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