import { withFormsy } from "formsy-react";
import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import moment from "moment";

function DatePicker(props) {
  function changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    //this.props.setValue(moment(event).format('L'));//moment();
    props.setValue(
      event === null ? null : moment(event).format("YYYY-MM-DD")
    );
  }

  // An error message is returned only if the component is invalid
  const errorMessage = props.getErrorMessage();
  return (
    <React.Fragment>
      <KeyboardDatePicker
        name={props.name}
        onChange={changeValue}
        label={props.label}
        className={props.className || null}
        inputVariant="outlined"
        placeholder="Day/Month/Year"
        InputProps={props.InputProps || null}
        InputAdornmentProps={props.InputAdornmentProps || null}
        {...(errorMessage ? { error: true } : {})}
        {...(errorMessage ? { helperText: errorMessage } : {})}
        format={props.format || "DD/MM/YYYY"}
        value={props.getValue() || null}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </React.Fragment>
  );
}

export default React.memo(withFormsy(DatePicker));
