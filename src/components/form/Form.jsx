import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField, Button, Paper, Typography, Grid } from "@material-ui/core";
// import DateFnsUtils from "@date-io/luxon";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const isError = (errors, fieldName) => {
  if (!errors) return false;
  return errors[fieldName]?.message ? true : false;
};
const getHelperText = (errors, fieldName) => {
  if (!errors) return null;
  return errors[fieldName]?.message;
};

const textFieldComponent = (props) => <TextField {...props} />;

const toField = (
  control,
  errors,
  { name, label, defaultValue, props, component }
) => {
  const componentToRender = component || textFieldComponent;
  const error = isError(errors, name);
  const helperText = getHelperText(errors, name);
  const render = ({ field }) =>
    componentToRender({
      label,
      error,
      helperText,
      fullWidth: true,
      ...props,
      ...field,
    });

  return (
    <Controller
      key={name}
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={render}
    />
  );
};

export default function Form({ title, fields, onSubmit, data }) {
  const { handleSubmit, control, errors, reset } = useForm();

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data]);

  return (
    <Paper>
      <Typography variant="h6" color="initial">{title}</Typography>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
        <form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
          {fields.map((f) => toField(control, errors, f))}
          <Grid container direction="row-reverse">
            <Button type="submit"variant="outlined">Submit</Button>
          </Grid>
        </form>
      {/* </MuiPickersUtilsProvider> */}
    </Paper>
  );
}
