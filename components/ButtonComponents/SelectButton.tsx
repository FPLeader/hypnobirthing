import React from 'react'

export default function SelectButton() {
    return (
        <div className='w-full flex flex-col'>
            <label className="block mb-2 text-sm font-sm text-dark">Category</label>
            <select id="countries" className="w-full bg-gray-50 border border-deviders text-dark text-sm rounded-lg block w-full p-2.5 h-[46px]">
                <option defaultValue=''>Select an option</option>
                <option value="US">Teachers</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    )
}
