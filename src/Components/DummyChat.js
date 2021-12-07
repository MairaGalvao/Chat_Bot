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
​<button class="open-button" onClick={openForm}>Start the Chat</button>

​    <button class="btn cancel" onClick={closeForm}>Close the chat</button>
<div class="container content" id = 'myForm' style={{display: 'none'}}>

    <div class="row">
        <div>
        	<div class="card">
        		<div class="card-header">Maira-Chat</div>
        		<div class="card-body height3">
        			<ul class="chat-list">
        				<li class="in">
        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
        					</div>
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5>Maira-Chat</h5>
        							<p>{msgIntro}</p>
        						</div>
        					</div>
        				</li>
        				<li class="out">
        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
        					</div>
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5>Serena</h5>
        							<p>Next level veard</p>
        						</div>
        					</div>
        				</li>
        				<li class="in">
        					
        				</li>
        			</ul>
        		</div>
        	</div>
        </div>
       
       </div>
</div>




      </>
    );
  }