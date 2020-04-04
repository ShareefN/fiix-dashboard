import { withFormsy } from "formsy-react";
import React from "react";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import moment from "moment";

function DateTimePickers(props) {
  function changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    props.setValue(moment(event).toISOString()); //moment();
  }

  // An error message is returned only if the component is invalid
  const errorMessage = props.getErrorMessage();
  return (
    <React.Fragment>
      <KeyboardDateTimePicker
        name={props.name}
        onChange={changeValue}
        label={props.label}
        className={props.className || null}
        inputVariant="outlined"
        placeholder="Day/Month/Year - HH:MM A"
        {...(errorMessage ? { error: true } : {})}
        {...(errorMessage ? { helperText: errorMessage } : {})}
        format={props.format || "DD/MM/YYYY - hh:mm a"}
        value={props.getValue() || null}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </React.Fragment>
  );
}

export default React.memo(withFormsy(DateTimePickers));
