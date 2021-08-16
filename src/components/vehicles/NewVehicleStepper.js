import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Container, TextField } from '@material-ui/core';
import { Controller, useForm } from "react-hook-form";

// TODO: Not completed

const isError = (errors, fieldName) => {
    if (!errors) return false;
    return errors[fieldName]?.message ? true : false;
  };
  const getHelperText = (errors, fieldName) => {
    if (!errors) return null;
    return errors[fieldName]?.message;
  };
  
  const textFieldComponent = (props) => <TextField {...props} />;


const formFields = [
    [
        {
        name: "vin",
        label: "VIN",
        required: true
        },
        {
        name: "make",
        label: "Make",
        required: true
        },
        {
        name: "v_model",
        label: "Model",
        required: true
        },
        {
        name: "year",
        label: "Year",
        required: true
        }
    ],
    [
        {
        name: "name",
        label: "Vehicle Nickname",
        required: true
        },
        {
        name: "license",
        label: "License Plate",
        required: true
        },
        {
        name: "state_registered",
        label: "State Registered",
        required: true
        },
        {
        name: "mileage",
        label: "Current Mileage",
        required: true
        },
        {
        name: "driver_name",
        label: "Driver Name",
        required: true
        },
        {
        name: "driver_contact",
        label: "Driver Contact #",
        required: true
        },
        {
        name: "driver_license",
        label: "Driver License #",
        required: true
        },
        {
        name: "driver_license_state",
        label: "Driver License Issue State",
        required: true
        },
    ],
    [
        {
        name: "shipping_name",
        label: "Name",
        required: true    
        },
        {
        name: "shipping_company",
        label: "Company",
        required: true    
        },
        {
        name: "shipping_address",
        label: "Name Address",
        required: true    
        },
        {
        name: "shipping_phone",
        label: "Phone",
        required: true    
        },
    ],
    [
        {
        name: "cc",
        label: "Credit Card Number",
        required: true    
        }
    ]
  ];

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



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Tell us about your vehicle', 'Just a few more details about your vehicle and driver',
          'Where should we ship the device', 'How would you like to pay for the device',
          'Confirm details for your new vehicle'];
}

function getStep() {
    switch (stepIndex) {
        case 0:
          return 'Select campaign settings...';
        case 1:
          return 'What is an ad group anyways?';
        case 2:
          return 'This is the bit I really care about!';
        default:
          return 'Unknown stepIndex';
      }
}

function getStepContent(stepIndex, control, errors) {
    return (
        <>
            <Box
                sx={{
                backgroundColor: "background.paper",
                // mt: 8,
                mb: 4
                }}
            >
                <Container
                   
                >
                    <Typography variant="h5" color="initial"
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >{getSteps()[stepIndex]}</Typography>
                    <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pt:4
                    }}>
                    <Grid container spacing={1} item md={4}>
                        {formFields[stepIndex]?.map((f) => <Grid key={f.name} item xs={12}>{toField(control, errors, f)}</Grid>)}
                    </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );

}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const defaultValues = formFields.reduce((obj, item) => (obj[item.name] = item.defaultValue || "", obj), {});
  const { handleSubmit, control, errors, reset } = useForm();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
        className={classes.root}
        sx={{
            backgroundColor: "background.paper",
            minHeight: "100%",
            py: 4,
        }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === steps.length ? (
          <Box>
            {/* <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button> */}
          </Box>
        ) : (
          <Box
            sx={{
                border: 1,
                borderColor: 'divider',
                mt: 4,
                pt: 4
            }}
          >
            <Grid>
                {getStepContent(activeStep, control, errors)}
            </Grid>
            <Grid
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pb: 4
                }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}