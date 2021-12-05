import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

export function DummyChat({
msgIntro,
msgGreeting,
msgData,
msgEmail,
msgFinal

  }) {
    useEffect(() => {

        Aos.init({});
      
    }, [Aos]);
    return (
      <>
       <div class="container">
  <img src="/w3images/bandmember.jpg" alt="Avatar"/>
  <Typography>{msgIntro}</Typography>
  {/* <Typography> Que ​satisfação {msgGreeting}</Typography>
  
  <Typography> {msgData}</Typography>
  
  <Typography> {msgEmail}</Typography>
  <Typography> {msgFinal}</Typography> */}

  

  <span class="time-right">11:00</span>
</div>


      </>
    );
  }