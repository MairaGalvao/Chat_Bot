import { useState } from "react"
import { Formik, Field, Form } from "formik";


export default function Customer ({onSubmit, placeholder, fieldType, questionNumber}) {
    // const [answer, setAnswer] = useState('')
    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //      onSubmit(answer) 
    //     }
    //   } 
 
      return ( 
        <>
            <Formik
            initialValues={{}}
            onSubmit={(values) => {
        const jsonValues =   JSON.stringify(values, null, 1);
                console.log(jsonValues)
                onSubmit(jsonValues) 
        //   await new Promise((resolve) => setTimeout(resolve, 500));
        }}
      >
        <Form>
          <Field name={questionNumber}
           type={fieldType} 
              placeholder= {placeholder}
            //   onKeyDown={handleKeyDown}
            //   onInput={e => setAnswer(e.target.value)}
          />
          
          
 
        </Form>
      </Formik>
    </>

    )
}