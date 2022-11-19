import { useState } from 'react'

export default function Input({defaultValue = null, label, type, name, onChange = e => {}}){
  const [selected, setSelected] = useState(defaultValue);
  const [inputProvided, setInputProvided] = useState(false);
  const detectInput = e => {
    onChange(e)
    setInputProvided(!!e.target.value)
  }

  return <div
    className='relative h-max w-full'
  >
    <label
      htmlFor={name}
      className='absolute w-full h-full flex flex-col justify-center items-start pl-2 pointer-events-none transition-transform'
      style={{
        transform: `translateY(${selected || inputProvided ? '-2.25rem' : '0%'})`,
      }}
    >{label}</label>
    <input
      defaultValue={defaultValue || ''}
      className="border-solid border-neutral-900 border p-2 w-full"
      type={type} 
      name={name}
      onChange={detectInput}
      onFocus={() => {setSelected(true)}}
      onBlur={() => {setSelected(false)}}
    />
  </div>
}