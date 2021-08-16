import { Controller, useForm } from "react-hook-form";
import { Box, Button, Divider, Grid, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const isError = (errors, fieldName) => {
  if (!errors) return false;
  return errors[fieldName]?.message ? true : false;
};
const getHelperText = (errors, fieldName) => {
  if (!errors) return null;
  return errors[fieldName]?.message;
};

const textFieldComponent = (props) => <TextField {...props} />;

// TODO: Make this a generic function
const toField = (
  control,
  errors,
  { name, label, required, defaultValue, props, component }
) => {
  const componentToRender = component || textFieldComponent;
  const error = isError(errors, name);
  const helperText = getHelperText(errors, name);
  const render = ({ field }) =>
    componentToRender({
      label,
      required,
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


const EntityForm = ({ fields, data, onEditSubmit, onCreateSubmit, navigateOnSubmit = undefined }) => {
  const defaultValues = fields.reduce((obj, item) => (obj[item.name] = item.defaultValue || "", obj), {});
  const { handleSubmit, control, errors, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data]);

  const onSubmit = (formData) => {
    data ? onEditSubmit({ ...data, ...formData }) : onCreateSubmit(formData);
    reset(defaultValues);
    navigateOnSubmit ? navigate(navigateOnSubmit) : undefined;
  }

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        minHeight: "100%",
        p: 3,
      }}
    >
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Grid container spacing={1}>
          {fields.map((f) =>
            <Grid
              key={f.name}
              item
              xs={12}
            >
              {toField(control, errors, f)}
            </Grid>)}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Divider sx={{ pt: 2 }} />
          <Button color="primary" type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EntityForm;
