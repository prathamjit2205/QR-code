import React, { useState } from 'react'

const Card = () => {
const [input,setInput]= useState("")
const[qr,setQr]=useState()
const[isloading,setIsLoading]=useState(false)

const getQRcode = async (e)=>{

    e.preventDefault()
    try {
        setIsLoading(true)
     const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
     setQr(res.url)
     console.log(res)
    } catch (error) {
    console.log(error)  
    }
    finally{
        setIsLoading(false)
    }

}

  return (
    <div>
      <form className='form'  onSubmit={getQRcode}>
      
      <h1>QR-Code-Generator</h1>
      <input type="text" className='input' value={input}  onChange={(e)=> setInput(e.target.value)} placeholder='Enter URL Here...'/>

      {isloading && <div className='loading'>
        <span></span>Loading...
      </div>}

      {!isloading && (qr ? <img className='qrcode' src={qr} alt='qrcode'  />:
       <div className='loading'>
         Generate Amazing QR Code

        
       </div>
       
      )}


      <input type="submit" className='input2' value="Generate QR Code" />
      <a  href='#' download={qr} > </a>
      </form>


    

    </div>
  )
}

export default Card
