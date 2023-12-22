import { SetStateAction, useState } from 'react'

export const DropDown = (props: any) => {
  const { options, setValue } = props
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div style={{ width: '300px', marginLeft: '10px' }}>
      <div>Coin</div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="" disabled>
          Select an option...
        </option>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption && <p>Selected option: {selectedOption}</p>}
    </div>
  )
}
