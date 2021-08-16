import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Box, Container, Typography } from "@material-ui/core";
import { vehicles } from "../../api"
import { EntityForm } from "../../components/entity";
import useEntityHooks from "../../hooks/useEntityHooks";
import useAuth from "../../hooks/useAuth";
import NewVehicleStepper from "../../components/vehicles/NewVehicleStepper"

// Not completed yet

const formFields = [
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
  },
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
];

const displayFields = [
  {
    name: "name",
  },
  {
    name: "make",
  },
  {
    name: "v_model",
    label: "Model",
  },
  {
    name: "year",
  },
  {
    name: "device",
  }
];

const NewVehicle = () => {
  const title = "Add Vehicle"
  const { user } = useAuth();
  const [editData, setEditData] = useState(null);
  const { getAllQuery, createMutation, updateMutation, deleteMutation } =
  useEntityHooks("vehicles", vehicles);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.paper",
          minHeight: "100%",
          py: { md: 8 },
        }}
      >
        <Container maxWidth="lg">          
          <Typography variant="h5" color="initial">{title}</Typography>
          <Grid container>
            <Grid item md={4}>
              <EntityForm
                fields={formFields}
                data={editData}
                onEditSubmit={updateMutation.mutate}
                onCreateSubmit={createMutation.mutate}
                navigateOnSubmit="/vehicles"
              />
            </Grid>
            {/* <NewVehicleStepper/> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NewVehicle;
