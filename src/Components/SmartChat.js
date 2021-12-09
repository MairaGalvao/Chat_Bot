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