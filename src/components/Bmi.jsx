import React, { useRef, useState } from 'react'

const Bmi = () => {
  const inputMass = useRef(null)
  const inputHeight = useRef(null)
  const [answer,setAnswer] = useState('');
  const Bmies = (e) => {
    e.preventDefault()
    const mass = Number(inputMass.current.value);
    const height = Number(inputHeight.current.value);
    const bodyMassa = ((mass / ((height*height)/100)).toFixed(4))
    setAnswer(bodyMassa.slice(2,4)+'.' + bodyMassa.slice(4,6))
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Body Massa Index
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={Bmies} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Mass
          </label>
          <div className="mt-2">
            <input
            ref={inputMass}
              id="email"
              name="email"
              type="text"
              autoComplete="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
             height
            </label>
          </div>
          <div className="mt-2">
            <input 
            ref={inputHeight}
              id="password"
              name="password"
              type="text"
              autoComplete="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            click
          </button>
        </div>
      </form>
      <p className='text-center pt-5 text-[20px] font-sans text-green'>{answer}</p>
    </div>
  </div>
  )
}

export default Bmi
