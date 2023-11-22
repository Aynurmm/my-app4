import React from 'react'
import './Form.css' 


const Form = () => {
    const myFunc=(e)=>{
        alert("Mesaj Gonderildi!")
    }


   
  return (
    <div className='classInput'>
  <form action="" onSubmit={myFunc}>
<input type="text" name="" id=""  placeholder='Adinizi daxil edin' required/>
<br />
<input type="text" name="" id="" placeholder='Soyadinizi daxil edin'  required/>
<br />
<input type="number" name="" id="" placeholder='Telefon' required />
<br />
<input type="email" name="" id="" placeholder='E-mail' required/>
<br />
<textarea maxLength={50} name="" id="" ></textarea>
<br />
<button  >Gonder</button>



  </form>



    </div>
  )
  }

export default Form