import React from "react";
import { ErrorMessage, Field } from "formik";
import { TextField } from "@mui/material";

import "./FormikField.css";

interface FormikFieldProps {
  name: string;
  type?: string;
  label: string;
  required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({ name, label, type = "text", required = false}) => {
  return (
    <div className="FormikField">
      <Field
        helperText={<ErrorMessage name={name} />}
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        type={type}
        fullWidth
      />
    </div>
  );
};

export default FormikField;