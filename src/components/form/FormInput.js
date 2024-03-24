import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useState } from "react";

function FormInput({id, type, value, onChange, label, placeholder, isRequired, isInvalid, errorMessage}) {
  const [touched, setTouched] = useState(false);

  function onBlur() {
    setTouched(true);
  }

  return (
    <FormControl isRequired={isRequired} isInvalid={touched && isInvalid}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={isRequired}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {isInvalid && touched ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null}
    </FormControl>
  );
}

export default FormInput;
