import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

export function DummyChat(
  {
  msgIntro,
  msgGreeting,
  msgData,
  msgEmail,
  msgFinal
  }
  
  ) {

    const [userInput, setUserInput] = useState('')
    const [submit, setSubmit] = useState(false)
 
 
    function handleClick() {
      setSubmit(true)

    }
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setSubmit(true)

      }
    }

    return (      
      <>


<button class="open-button" onClick={openForm}>Chat</button>

<div class='form-container'> 
<div class="chat-popup" id="myForm">
  {/* <form  class="form-container"> */}
    <h1>ChatMaira</h1>

    <input 
    placeholder="Nome e sobrenome"  
    onKeyDown={handleKeyDown} 

    onInput={e => setUserInput(e.target.value)} />


 <button onClick={handleClick} > 
 <i class="fa fa-play" style={{fontSsize:"24px"}}></i>
 </button>

    <div><span><b>{msgIntro}</b></span></div>
    {/* <textarea placeholder="Nome e sobrenome" name="msg" required></textarea> */}
    
    {submit && <div> Que satisfacao! </div>}
  
      {submit &&<div> {userInput} </div>}

      {submit && <div>{msgGreeting}</div> }


      <input 
    placeholder="Cidade e Estado"  
    onKeyDown={handleKeyDown} 

    onInput={e => setUserInput(e.target.value)} />


 <button onClick={handleClick} > 
 <i class="fa fa-play" style={{fontSsize:"24px"}}></i>
 </button>

    <button class="btn">Send</button>
    <button class="btn cancel" onClick={closeForm}>Close</button>
  {/* </form> */}


</div>

</div>



      </>
    );
  }