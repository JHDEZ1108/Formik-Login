import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import "./App.css"

import FormikSelect, { FormikSelectItem } from "../FormikSelect";
import FormikField from "../FormikField";
import { Button } from "@mui/material";

interface FormValues{
  name: string;
  position: string;
}

const initialValues: FormValues = {
  name: '',
  position: ''
}

const positionItems: FormikSelectItem[] = [
  {
    label: "Front End Developer",
    value: "front-end"
  },
  {
    label: "Back End Developer",
    value: "back-end"
  },
  {
    label: "Dev Ops Engineer",
    value: "dev-ops"
  },
  {
    label: "Designer",
    value: "designer"
  }
];

const App: React.FC = () =>{
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };

  /* Validation schemas */
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short to be a name!')
      .required('You need to add a name!'),
    position: Yup.string()
      .required('You need to add a position!')
  });
  
  return(
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({dirty, isValid}) =>{
          return(
            <Form>
              <FormikField name="name" label="Name" required/>
              <FormikSelect
                required
                name="position"
                label="Position"
                items={positionItems}
              />
              
              <Button
                disabled={!dirty || !isValid}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;