/* ---------- Imports -----------*/
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import "./App.css"
import FormikSelect, { FormikSelectItem } from "../FormikSelect";
import FormikField from "../FormikField";
import { Button, Typography, Box, useMediaQuery } from "@mui/material";
import swal from 'sweetalert'

/* ---------- Interface -----------*/
interface FormValues{
  name: string;
  position: string;
}

/* ---------- Inital Values -----------*/
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
/* ---------- Fake emails -----------*/
const emailAddresses = [
  'test@gmail.com',
  'test2@outlook.com',
  'test3@yahoo.com'
];
/* ---------- Regex validation -----------*/
const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialRegex = /(?=.*[!@#$%^&/~`*])/;

const App: React.FC = () =>{
  const handleSubmit = (values: FormValues): void => {
    swal("All done!", "Successful sign up!", "success");
  };

/* ---------- Form validation Schemas -----------*/
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short to be a name!')
      .required('You need to add a name!'),
    email: Yup.string()
      .lowercase()
      .email('Must be a valid email!')
      .notOneOf(emailAddresses, 'Email already taken!')
      .required('Required!'),
    position: Yup.string()
      .required('You need to add a position!'),
    password: Yup.string()
      .matches(lowercaseRegex, 'Password must include lowercase letter!')
      .matches(uppercaseRegex, 'Password must include uppercase letter!')
      .matches(numericRegex, 'Password must include digit!')
      .matches(specialRegex, "Password must include special character!")
      .min(6, "Password must be at least 6 characters!")
      .required('Required!'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must be the same!')
    .required('Required!'),
  });
  
  const isNonMobileScreens = useMediaQuery("(min-width: 400px)");
  
  return(
    <Box 
      className="App"
      width={isNonMobileScreens ? "50%" : "93%"}
      borderRadius="1.5rem"
      m="3rem auto"
      p="2rem"
    >
      <Typography
        variant="h4"
      >
        Welcome to Effort Stack!
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{color:"#313251", fontStyle: "oblique", mb:"2rem"}}
      >
        Let's get started
      </Typography>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({dirty, isValid}) =>{
          return(
            <Form>
              <FormikField 
                required
                name="name" 
                label="Name" 
              />
              <FormikField 
                required
                name="lastname" 
                label="Last Name" 
              />
              <FormikField 
                required 
                name="email" 
                label="Email" 
              />
              <FormikField 
                required 
                type="password"
                name="password" 
                label="Password" 
              />
              <FormikField
                required
                type="password"
                name="passwordConfirm"
                label="Confirm Password"
              />
              <FormikSelect
                required
                name="position"
                label="Position"
                items={positionItems}
              />
              <Button
                disabled={!dirty || !isValid}
                fullWidth
                type= "submit"
                variant= "contained"
                sx={{
                  backgroundColor: "#c5a102",
                  color: "#151d2f",
                  fontWeight: "bold",
                  fontSize: "15px",
                  "&:hover": { backgroundColor: "#f5d9a5"},
                }}
              >
                REGISTER
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default App;