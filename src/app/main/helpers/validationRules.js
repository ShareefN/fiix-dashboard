import { addValidationRule } from "formsy-react";

const required = addValidationRule("required", (values, value) => {
  return String(value).trim() !== "";
});

const moreThan = addValidationRule(
  "moreThan",
  (values, value, validationValue) => {
    return value > validationValue;
  }
);

const customValidationRules = { required, moreThan };

export default customValidationRules;
