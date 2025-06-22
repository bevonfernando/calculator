import React, { useState } from 'react'

function Calculator() {

const[input,setInput]=useState('');

const handleClick=(value)=>{
    setInput(input+value)
}
const handleEqual=()=>{
    try{
       setInput(eval(input));

    }
    catch{
            setInput('Error')
    }
}

const handleZero=()=>{
  setInput('')
}



  return (
    <div className='bg-red-900 h-screen flex items-center justify-center'>

      <div className='  flex items-center flex-col justify-center bg-zinc-500   gap-4'>

     <div className='flex m-3 gap-3 items-center justify-center'>
            <input className='h-10 bg-zinc-800 text-white p-4' type="text" value={input} />
             <button onClick={handleZero} className='flex items-center bg-red-800 p-4 h-10  text-2xl font-bold '>CE</button>
        </div>
        <div className='flex gap-2'>
        <button onClick={()=>handleClick('7')} className='bg-white h-14 w-14'>7</button>
        <button onClick={()=>handleClick('8')} className='bg-white h-14 w-14'>8</button>
        <button onClick={()=>handleClick('9')} className='bg-white h-14 w-14'>9</button>
        <button onClick={()=>handleClick('+')} className='bg-yellow-500  text-2xl font-bold h-14 w-14'>+</button>
       
        
       
        </div>

        <div className='flex gap-2'>
        <button onClick={()=>handleClick('4')} className='bg-white h-14 w-14'>4</button>
        <button onClick={()=>handleClick('5')} className='bg-white h-14 w-14'>5</button>
        <button onClick={()=>handleClick('6')} className='bg-white h-14 w-14'>6</button>     
        <button onClick={()=>handleClick('-')} className='bg-red-500  text-2xl font-bold h-14 w-14'>-</button>
        </div> 

        <div  className='flex gap-2'>
        <button onClick={()=>handleClick('1')} className='bg-white h-14 w-14'>1</button>
        <button onClick={()=>handleClick('2')} className='bg-white h-14 w-14'>2</button>
        <button onClick={()=>handleClick('3')} className='bg-white h-14 w-14'>3</button>
        <button onClick={()=>handleClick('*')} className='bg-orange-500  text-2xl font-bold h-14 w-14'>*</button>
        

        </div> 

        <div  className='flex gap-2 mb-5 '>
        
        <button onClick={()=>handleClick('.')} className='bg-white h-14 w-14 '>.</button>
        <button onClick={()=>handleClick('0')} className='bg-white h-14 w-14'>0</button>
        <button onClick={handleEqual} className='bg-blue-500  text-2xl font-bold h-14 w-14'>=</button>
        <button onClick={()=>handleClick('/')} className='bg-green-500 text-2xl font-bold h-14 w-14'>/</button>
       


        </div>

        
        

        </div> 
       

    </div>

   
    
  );
}

export default Calculator