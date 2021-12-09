import { Formik, Field, Form } from "formik";

export default function Customer({
  onSubmit,
  placeholder,
  fieldType,
  questionNumber,
}) {
  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          const jsonValues = JSON.stringify(values, null, 1);
          console.log(jsonValues);
          onSubmit(jsonValues);
        }}
      >
        <Form>
          <Field
            name={questionNumber}
            type={fieldType}
            placeholder={placeholder}
          />
        </Form>
      </Formik>
    </>
  );
}
