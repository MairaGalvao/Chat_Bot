import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star";
   const starClassUnactive = "rating__star far fa-star";
   const starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
   });
}

function printRatingResult(result, num = 0) {
  //  result.textContent = `${num}/5`;
}

executeRating(ratingStars, ratingResult);

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
 
 function chat2() {
   console.log('alo')
   document.getElementById("chat2").style.display = "block";
 }

 function chat3() {
  console.log('alo')
  document.getElementById("chat3").style.display = "block";
}

function chat4() {
  console.log('alo')
  document.getElementById("chat4").style.display = "block";
}


function displayStars() {
  console.log('alo')
  document.getElementById("rating").style.display = "block";
}

    // function handleClick() {
    //   setSubmit(true)

    // }
    const handleKeyDown1 = (event) => {
      if (event.key === 'Enter') {
        setSubmit(true)
        chat2()


      }
    }


    const handleKeyDown2 = (event) => {
      if (event.key === 'Enter') {
        setSubmit(true)
        chat3()


      }
    }

    const handleKeyDown3 = (event) => {
      if (event.key === 'Enter') {
        setSubmit(true)



      }
    }


    const handleKeyDown4 = (event) => {
      if (event.key === 'Enter') {
        setSubmit(true)



      }
    }


    const ratingStars = (event) => {
      if (event.key === 'Enter') {
        setSubmit(true)
        displayStars()

      }
    }

    return (      
      <>
{/* ​<button class="btn cancel" onClick={openForm}>Start the Chat</button>
<button class="btn cancel" onClick={closeForm}>Close the chat</button> */}

<div class="container content" id = 'myForm' style={{display:'block'}} >
    <div class="row" >
        <div>
          
        	<div class="card" id='boxName'>
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

​    <input 
    placeholder="Nome e sobrenome"  
    onKeyDown={handleKeyDown1}

    onInput={e => setUserInput(e.target.value)} />

    
</div>
</div> 


        				</li>
        				<li class="in">
        					
        				</li>
        			</ul>

              <div class="card-body height3" id='chat2'  style={{display:'none'}}>
        			<ul class="chat-list" >
        				<li class="in">
        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
        					</div>

                  <li class="out">
        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
        					</div>
 
                  </li>
<div class="chat-body">
        						<div class="chat-message">

​    <input 
    placeholder="Nome e sobrenome"  
    onKeyDown={handleKeyDown1}

    onInput={e => setUserInput(e.target.value)} />

    
</div>
</div> 
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5>Maira-Chat</h5>
                      ​    {submit && <p> Que satisfacao! </p>}     {submit &&<p> {userInput} </p>}{submit && <p>{msgGreeting}</p> }

        						</div>
        					</div>

        				</li>



        				</li>
                </ul>

                <div class="card-body height3" id='chat3'style={{display:'none'}}>
        			<ul class="chat-list">
        				<li class="in">
        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
        					</div>
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5>Maira-Chat</h5>
                      ​      {userInput && <p>{msgData}</p> }
        						</div>
        					</div>
        				</li>
        				<li class="out">
        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
        					</div>
                  ​      <input
    placeholder="Cidade e Estado"  
    onKeyDown={handleKeyDown3}
  
    onInput={e => setUserInput(e.target.value)} />
                  </li>
                  </ul> 



                  <div class="card-body height3" id='chat4'style={{display:'none'}}>
        			<ul class="chat-list">
        				<li class="in">
        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
        					</div>

            
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5>Maira-Chat</h5>
                      ​      {userInput && <p>{msgData}</p> }
    

        						</div>
        					</div>

        				</li>
        				<li class="out">
        					<div class="chat-img">
                    
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
        					
                  </div>

                  <div class="chat-body">
        						<div class="chat-message">
 


    
</div>
</div>

​                 ​      <input
    placeholder="Cidade e Estado"  
    onKeyDown={handleKeyDown3}
  
    onInput={e => setUserInput(e.target.value)} />

                  </li>
                  </ul> 
                  <div class="card-body height3" style={{display:'none'}}>
        			<ul class="chat-list">
        				<li class="in">


        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
        					</div>
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5>Maira-Chat</h5>
                      ​      {userInput && <p>{msgEmail}</p> }

        						</div>
        					</div>

               
        				</li>
                </ul>
               
               
                </div> 







                  

</div> 
</div> 




  
        		</div>
        	</div>
        </div>
       
       </div>
       



       <div class="rating">
          <span class="rating__result"></span> 
         <i class="rating__star fa fa-star"></i>
         <i class="rating__star fa fa-star"></i>
         <i class="rating__star fa fa-star"></i>
         <i class="rating__star fa fa-star"></i>
         <i class="rating__star fa fa-star"></i>
      </div>








</div>

​    <button class="btn">Salvar</button>
</div>





      </>
    );
  }