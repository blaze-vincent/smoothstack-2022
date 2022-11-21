import { useState } from "react"
import Input from "./input";

export default function FieldEditable({
    startingValue, 
    updateMode, 
    type='text', 
    label='label missing', 
    className
  }){

  const [value, setValue] = useState(startingValue);
  
  return <div className={className}>
    {updateMode ? <Input 
        defaultValue={value} 
        label={label} 
        type={type}
        name={label.toLowerCase()}
        onChange={e => {
          setValue(e.target.value)
        }}
      /> : <p>
        {value}
      </p>}
  </div>

}