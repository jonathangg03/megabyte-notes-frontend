import { useState } from 'react'

const useField = (inputProps) => {
  const [value, setValue] = useState(inputProps.value || '')

  const onChange = ({ target }) => {
    setValue(target.value)
  }

  return {
    ...inputProps,
    value,
    onChange
  }
}

export default useField
