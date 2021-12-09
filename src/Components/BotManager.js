import Bot from "../Components/Bot";
import Customer from "../Components/Customer";
import React, { useState, useEffect } from "react";
import "../BotManager.css";
import * as Yup from "yup";
import '../App.css';

export default function BotManager() {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];
  const validationSchema = Yup.object({
    product: Yup.string().required("Please select a product").oneOf(products),
    name: Yup.string().required(),
    email: Yup.string().email().required(),

    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
  });

  const initialValues = {
    name: "",
    email: "",
    review: "",
    rating: "",
    date: new Date(),
    wouldRecommend: false,
    product: "",
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [name, setName] = useState("");
  const [arrayAnswers, setArrayAnswers] = useState([]);
  const onSubmit = (answer) => {
    console.log(answer);
    if (currentQuestion === 0) {
      setName(answer);
    }
    setCurrentQuestion(currentQuestion + 1);
    setArrayAnswers([...arrayAnswers, answer]);
    console.log(arrayAnswers);
  };

  function openForm() {
    document.getElementById("page-content").style.display = "block";
  }
  function closeForm() {
    document.getElementById("page-content").style.display = "none";
  }

  return (
    <>
      {/* <Customer onSubmit ={onSubmit} /> */}​
      <button class="chatbox-open" id="chat" onClick={openForm}>
        <i class="fa fa-comment fa-2x" aria-hidden="true"></i>
      </button>
      <button class="chatbox-close" onClick={closeForm}>
        {" "}
        <i class="fa fa-close fa-2x" aria-hidden="true"></i>{" "}
      </button>

      <div class="page-content page-container" id="page-content" style={{ display: "none" }}>
<div class="padding">
    <div class="row container d-flex justify-content-center">
        <div class="col-md-4">
        <div class="box box-warning direct-chat direct-chat-warning">
                <div class="box-header with-border">
        
        <section class="chatbox-popup">
          <header class="chatbox-popup__header">
            <aside>
              {/* <i class="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true"></i>
               */}

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
          <div class="box-body">
          <div class="direct-chat-messages">
          <div class="direct-chat-msg">
          <div class="direct-chat-info clearfix"> <span class="direct-chat-name pull-left">ChatMaira</span> <span class="direct-chat-timestamp pull-right"></span> </div> <img class="direct-chat-img" src="https://img.icons8.com/office/36/000000/person-female.png" alt="message user image"/>

            <Bot  class="direct-chat-text"
              question={
                "Olá, eu sou ChatMaira, tudo bem? Para começarmos, preciso saber seu nome inteiro."
              }
            />
                                    <div class="direct-chat-msg right">
                                    <div class="direct-chat-info clearfix"> <span class="direct-chat-name pull-right">{name}</span> <span class="direct-chat-timestamp pull-left"></span> </div> <img class="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image"/>

            <Customer class="direct-chat-text"
              onSubmit={onSubmit}
              placeholder={"Nome e sobrenome"}
              fieldType={"text"}
              questionNumber={"Q1"}
            />
                 </div>
                 </div>
                 </div>
            </div>

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
              fieldType={"text"}
              questionNumber={"Q3"}
            />
          </>
        )}

        {currentQuestion >= 3 && (
          <>
            <Bot question={"Agora me fala teu email, por gentileza?"} />

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

            <button> Salvar</button>
          </>
        )}
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
 


    </>
  );
}
