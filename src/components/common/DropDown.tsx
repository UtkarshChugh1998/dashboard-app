import { SetStateAction, useState } from 'react'

export const DropDown = (props: any) => {
  const { options, setSelectedOption, selectedOption } = props

  const handleOptionChange = (e: any) => {
    const index = e.target.selectedIndex - 1
    setSelectedOption(options[index])
  }

  return (
    <div style={{ width: '300px', marginLeft: '10px' }}>
      <div>Coin</div>
      <select value={selectedOption.value} onChange={handleOptionChange}>
        <option value="" disabled>
          Select an option...
        </option>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption && <p>Selected option: {selectedOption.label}</p>}
    </div>
  )
}
