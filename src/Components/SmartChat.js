import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { DummyChat } from "./DummyChat";

import Aos from "aos";
import "aos/dist/aos.css";

export default function SmartArticles() {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>

      <DummyChat
          msgIntro={"Olá, eu sou ChatMaira, tudo bem? Para começarmos, preciso saber seu nome inteiro."}
          msgGreeting={"Agora que sei seu nome, qual a cidade e estado que você mora?"}
          msgData={"Legal, agora que sabemos sua cidade e estado. Quando foi o ano que você nasceu?"}
          msgEmail={"Agora me fala teu email, por gentileza?"}
          msgFinal={"Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos! "}
        />




    </>
  );
}





<div class="page-content page-container" id="page-content">
<div class="padding">
    <div class="row container d-flex justify-content-center">
        <div class="col-md-4">
            <div class="box box-warning direct-chat direct-chat-warning">
                <div class="box-header with-border">
                    <h3 class="box-title">Chat Messages</h3>
                    <div class="box-tools pull-right"> <span data-toggle="tooltip" title="" class="badge bg-yellow" data-original-title="3 New Messages">20</span> <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i> </button> <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="" data-widget="chat-pane-toggle" data-original-title="Contacts"> <i class="fa fa-comments"></i></button> <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i> </button> </div>
                </div>

                
                <div class="box-body">
                    <div class="direct-chat-messages">
                        <div class="direct-chat-msg">
                            <div class="direct-chat-info clearfix"> <span class="direct-chat-name pull-left">Timona Siera</span> <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span> </div> <img class="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image"/>
                            <div class="direct-chat-text"> For what reason would it be advisable for me to think about business content? </div>
                        </div>
                        <div class="direct-chat-msg right">
                            <div class="direct-chat-info clearfix"> <span class="direct-chat-name pull-right">Sarah Bullock</span> <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span> </div> <img class="direct-chat-img" src="https://img.icons8.com/office/36/000000/person-female.png" alt="message user image"/>
                            <div class="direct-chat-text"> Thank you for your believe in our supports </div>
                        </div>
       
                    </div>
                </div>
                <div class="box-footer">
                    <form action="#" method="post">
                        <div class="input-group"> <input type="text" name="message" placeholder="Type Message ..." class="form-control"/> <span class="input-group-btn"> <button type="button" class="btn btn-warning btn-flat">Send</button> </span> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>



















