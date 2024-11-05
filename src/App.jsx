
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle, setprinciple] = useState("")
  const [rate, setrate] = useState("")
  const [year, setyear] = useState("")

  const [isprinciple , setIsprinciple] = useState(true)
  const [israte , setIsrate] = useState(true)
  const [isyear , setIsyear] = useState(true)
  const [Interest , setInterest] = useState(0)
  

  const Validate = (e)=>{
    const{name ,value}= e.target
    console.log(name);
    console.log(value);
    

    if(!!value.match('^[0-9]*$')){
      if(name=='principle'){
        setprinciple(value)
        setIsprinciple(true)
      }
      else if ( name =='rate'){
        setrate(value)
        setIsrate(true)
      }
      else{
        setyear(value)
        setIsyear(true)
      }
    }
    else{
      if(name=='principle'){
        setprinciple(value)
        setIsprinciple(false)
      }
      else if ( name =='rate'){
        setrate(value)
        setIsrate(false)
      }
      else{
        setyear(value)
        setIsyear(false)
      }
    }
    
  }

  const handlereset = ()=>{
    setprinciple("")
    setrate("")
    setyear("")
    setIsprinciple(true)
    setIsrate(true)
    setIsyear(true)
    setInterest(0)
  }

  const calculate = ()=>{
    setInterest((principle*rate*year)/100)
  }



  return (
    <>
      <div className='bg-dark d-flex justify-content-center align-items-center' style={{height:'100vh', width:'100%'}}>
        <div className='bg-light p-5 rounded-2 ' style={{width:'500px'}}>
          <h1>Simple Interest App</h1>
          <p>calculate ur simple interest easily</p>
         <div className='bg-secondary p-3 mt-4 d-flex justify-content-center align-items-center rounded flex-column ' style={{height:'150px'}}>
          <h1>₹ {Interest}</h1>
          <p>Total simple interset</p>
         </div>

         <div className='my-3'>
         <TextField id="outlined-basic" className='w-100' label=" ₹ principle amount"  variant="outlined" onChange={(e)=>Validate(e)} name='principle' value={principle}/>
          { isprinciple==false && <p className='text-danger'>*Invalid input</p>}
         </div>
         <div className='mb-3'> 
          <TextField id="filled-basic"  className='w-100' label="Rate of interset (%)" variant="filled" onChange={(e)=>Validate(e)}name='rate' value={rate} />
          { israte==false && <p className='text-danger'>*Invalid input</p>}
          </div>
          <div className='mb-3'>
          <TextField id="standard-basic" className='w-100'  label="year (yr)" variant="standard" onChange={(e)=>Validate(e)}name='yr' value={year} />
          { isyear==false && <p className='text-danger'>*Invalid input</p>}
          </div>
          <div className='mb-3 d-flex justify-content-between'>
          <Button disabled={isprinciple && israte && isyear ? false:true} variant="contained" style={{width:'190px'}} className='p-4'  color="success" onClick={calculate}>Calculate</Button>
          <Button variant="outlined" style={{width:'190px'}} className='p-4' onClick={handlereset}>Reset</Button>
          </div>

        </div>
        
      </div>
     
    </>
  )
}

export default App
