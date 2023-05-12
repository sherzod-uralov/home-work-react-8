import React, { useState } from 'react'

const Count = () => {
    const [count,setCount] = useState(14);
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-[50px]">
        <div className="rounded-md  m-[0]-auto flex flex-col items-center h-[400px] w-[300px] bg-purple">
            <div className={`mt-5 flex-col rounded-full bg-blue w-[200px] h-[200px] flex justify-center items-center${count>20 ? ' bgs': ''}`}>
                <p className='text-center text-[28px]'>{count}°C</p>
            </div>
            <div className='mt-[70px] flex gap-2'>
                <button onClick={() => {setCount(count-1)}} className='text-[40px] rounded-full bg-green w-20 h-20'>-</button>
                <button onClick={() => {setCount(count+1)}} className='text-[30px] rounded-full bg-green w-20 h-20'>+</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Count
