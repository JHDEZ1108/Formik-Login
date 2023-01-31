import React, { ReactNode } from "react";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import { 
  FormHelperText, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select 
} from "@mui/material"

import "./FormikSelect.css";

export interface FormikSelectItem {
  label: string;
  value: string;
}

interface FormikSelectProps {
  name: string;
  label: string;
  required?: boolean;
  items: FormikSelectItem[];
}

interface MaterialUISelectFieldProps extends FieldInputProps<string> {
  label: string;
  required: boolean;
  children: ReactNode;
  errorString?: string;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
  errorString,
  children,
  onChange,
  required,
  onBlur,
  value,
  label,
  name
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel required={required}>{label}</InputLabel>
      <Select 
        name={name} 
        value={value}
        onBlur={onBlur} 
        onChange={onChange} 
        label="Position" 
      >
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect: React.FC<FormikSelectProps> = ({ name, items, label, required = false }) => {
  return (
    <div className="FormikSelect">
      <Field
        fullWidth
        name={name}
        label={label}
        required={required}
        as={MaterialUISelectField}
        errorString={<ErrorMessage name={name} />}
      >
        {items.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

export default FormikSelect;