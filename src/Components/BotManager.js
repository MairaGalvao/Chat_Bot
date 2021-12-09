import Bot from '../Components/Bot'
import Customer from '../Components/Customer'
import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import '../App.css';
import '../BotManager.css';
import * as Yup from "yup";




export default function BotManager () {



    const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

    const validationSchema = Yup.object({
      product: Yup.string().required("Please select a product").oneOf(products),
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      title: Yup.string().required(),
      review: Yup.string().required(),
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
  

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [name, setName] = useState('')
    const [arrayAnswers, setArrayAnswers] = useState([])
const onSubmit = (answer) => {
    console.log(answer)
    if (currentQuestion === 0) {
        setName(answer)
    }
    setCurrentQuestion (currentQuestion +1)
    setArrayAnswers([...arrayAnswers, answer])
    console.log(arrayAnswers)
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

   return ( 
<>

{/* <Customer onSubmit ={onSubmit} /> */}

 ​<button class="chatbox-open" id='chat'onClick={openForm}> 
 <i class="fa fa-comment fa-2x" aria-hidden="true"></i>
</button>

<button class="chatbox-close" onClick={closeForm}> <i class="fa fa-close fa-2x" aria-hidden="true"></i> </button> 




      <div id='myForm' class= 'container 'style={{display:'none'}}> 



      <section class="chatbox-popup">
  <header class="chatbox-popup__header">
    <aside>
      {/* <i class="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true"></i>
       */}

<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>

    </aside>
    <aside >
      <h1>Maira Galvao</h1> Chat (Online)
    </aside>
    <br></br>
 
  </header>
  </section>




   {currentQuestion >= 0  && <>
   <Bot question={"Olá, eu sou ChatMaira, tudo bem? Para começarmos, preciso saber seu nome inteiro."} /> 
   <Customer  onSubmit ={onSubmit} placeholder={'Nome e sobrenome'} fieldType={'text'} questionNumber={'Q1'}/>
   </>}

{ currentQuestion >= 1 && <>
    <Bot question={`${name}, Agora que sei seu nome, qual a cidade e estado que você mora?`} /> 

<Customer  onSubmit ={onSubmit}placeholder={'Cidade e Estado'} fieldType={'text'} questionNumber={'Q2'}/>
</>}

{ currentQuestion >= 2 && <>
    <Bot question={"Legal, agora que sabemos sua cidade e estado. Quando foi o ano que você nasceu?"} /> 

<Customer  onSubmit ={onSubmit} placeholder={'00/00/0000'} fieldType={'text'} questionNumber={'Q3'}/>
</>}

{ currentQuestion >= 3 && <>
    <Bot question={"Agora me fala teu email, por gentileza?"}/> 

<Customer  onSubmit ={onSubmit} placeholder={'E-mail'} fieldType={'email'} questionNumber={'Q4'}/>
</>}

{ currentQuestion >= 4 && <>
    <Bot question={"Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos! "} /> 

 {currentQuestion >= 4 &&    <div class="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div> }

<button> Salvar</button>
</>}

</div> 
</>
   )

}

