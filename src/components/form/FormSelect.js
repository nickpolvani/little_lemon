import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select
} from "@chakra-ui/react";

import { useState } from "react";

function FormSelect({
  id,
  options,
  value,
  onChange,
  label,
  isRequired,
  isInvalid,
  errorMessage,
}) {
  const [touched, setTouched] = useState(false);

  function onBlur() {
    setTouched(true);
  }

  return (
    <FormControl isRequired={isRequired} isInvalid={touched && isInvalid}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select id={id} value={value} onChange={onChange} required={isRequired} onBlur={onBlur}>
        {options}
      </Select>
      {isInvalid && touched ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
}

export default FormSelect;