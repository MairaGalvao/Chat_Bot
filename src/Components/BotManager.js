import Bot from "../Components/Bot";
import Customer from "../Components/Customer";
import React, { useState, useEffect } from "react";
import "../BotManager.css";
import * as Yup from "yup";
import "../App.css";
import axios from "axios";

export default function BotManager() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [name, setName] = useState("");
  const [arrayAnswers, setArrayAnswers] = useState([]);
  const [displayChat, setDisplayChat] = useState(false);

  const onSubmit = (answer) => {
    const answerObj = JSON.parse(answer);
    if (currentQuestion === 0) {
      setName(answerObj.Q1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setArrayAnswers([...arrayAnswers, answerObj]);
    console.log(arrayAnswers);
  };

  function displayBot() {
    setDisplayChat(true);
  }

  function hideBot() {
    setDisplayChat(false);
  }

  function apiCall() {
    axios({
      method: "post",
      url: "https://61b2546cc8d4640017aaf373.mockapi.io/api/data/answers",
      data: {
        arrayAnswers,
      },
    });
  }

  const validationSchema = Yup.object({
    product: Yup.string()
      .required("Please select a product")
      .oneOf(arrayAnswers),
    name: Yup.string().required(),
    email: Yup.string().email().required(),

    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
  });

  const initialValues = {
    name: "",
    email: "",
    rating: "",
    date: new Date(),
    wouldRecommend: false,
    product: "",
  };
  return (
    <>
      ​
      <button class="chatbox-open" id="chat" onClick={displayBot}>
        <i class="fa fa-comment fa-2x" aria-hidden="true"></i>
      </button>
      <button class="chatbox-close" onClick={hideBot}>
        {" "}
        <i class="fa fa-close fa-2x" aria-hidden="true"></i>{" "}
      </button>
      {displayChat && (
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-md-4">
                <div class="box box-warning direct-chat direct-chat-warning">
                  <div class="box-header with-border">
                    <section class="chatbox-popup">
                      <header class="chatbox-popup__header">
                        <aside>
                          <img
                            alt="Avtar"
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          />
                        </aside>
                        <aside>
                          <h1 class="box-title">Maira Galvao</h1> Chat (Online)
                        </aside>

                        <br></br>
                      </header>
                    </section>

                    {currentQuestion >= 0 && (
                      <>
                        <Bot
                          class="direct-chat-text"
                          question={
                            "Olá, eu sou ChatMaira, tudo bem? Para começarmos, preciso saber seu nome inteiro."
                          }
                        />

                        <Customer
                          class="direct-chat-text"
                          onSubmit={onSubmit}
                          placeholder={"Nome e sobrenome"}
                          fieldType={"text"}
                          questionNumber={"Q1"}
                        />
                      </>
                    )}

                    {currentQuestion >= 1 && (
                      <>
                        <Bot
                          question={`${name}, Agora que sei seu nome, qual a cidade e estado que você mora?`}
                        />

                        <Customer
                          onSubmit={onSubmit}
                          placeholder={"Cidade e Estado"}
                          fieldType={"text"}
                          questionNumber={"Q2"}
                        />
                      </>
                    )}

                    {currentQuestion >= 2 && (
                      <>
                        <Bot
                          question={
                            "Legal, agora que sabemos sua cidade e estado. Quando foi o ano que você nasceu?"
                          }
                        />

                        <Customer
                          onSubmit={onSubmit}
                          placeholder={"00/00/0000"}
                          fieldType={"date"}
                          questionNumber={"Q3"}
                        />
                      </>
                    )}

                    {currentQuestion >= 3 && (
                      <>
                        <Bot
                          question={"Agora me fala teu email, por gentileza?"}
                        />

                        <Customer
                          onSubmit={onSubmit}
                          placeholder={"E-mail"}
                          fieldType={"email"}
                          questionNumber={"Q4"}
                        />
                      </>
                    )}

                    {currentQuestion >= 4 && (
                      <>
                        <Bot
                          question={
                            "Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos! "
                          }
                        />

                        {currentQuestion >= 4 && (
                          <div class="rating">
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                          </div>
                        )}

                        <button onClick={apiCall()}> Salvar</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
