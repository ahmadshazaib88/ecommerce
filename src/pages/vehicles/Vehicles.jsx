import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Box, Container, Typography, Button } from "@material-ui/core";
import { vehicles } from "../../api"
import { Entities } from "../../components/entity";
import { Link as RouterLink } from 'react-router-dom';
import useEntityHooks from "../../hooks/useEntityHooks";
import AddIcon from '@material-ui/icons/Add';
import useAuth from "../../hooks/useAuth";
import VehicleTable from '../../components/vehicles/VehicleTable';
import VehicleDetailTable from '../../components/vehicles/VehicleDetailTable'

// TODO: Not completed yet

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

const formFields = [
  {
    name: "name",
    label: "Vehicle Nickname",
  },
  {
    name: "make",
    label: "Make",
  },
  {
    name: "v_model",
    label: "Model",
  },
  {
    name: "year",
    label: "Year",
  },
  {
    name: "vin",
    label: "VIN",
  },
  {
    name: "license",
    label: "License Plate",
  },
  {
    name: "state_registered",
    label: "State Registered",
  },
  {
    name: "mileage",
    label: "Current Mileage",
  },
  {
    name: "driver_name",
    label: "Driver Name",
  },
  {
    name: "driver_contact",
    label: "Driver Contact #",
  },
  {
    name: "driver_license",
    label: "Driver License #",
  },
  {
    name: "driver_license_state",
    label: "Driver License Issue State",
  },
];

const Vehicles = () => {
  const title = "Vehicles"
  const { user } = useAuth();
  const [editData, setEditData] = useState(null);
  const { getAllQuery, createMutation, updateMutation, deleteMutation } =
    useEntityHooks("vehicles", vehicles);

  const { data } = getAllQuery();
  const [activeSelection, setActiveSelection] = useState({});

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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              m:0,
              p:0,
              mb: 2,
            }}
          >
            <Typography noWrap variant="h5" color="initial">{title}</Typography>
            <Button 
                color="primary"
                component={RouterLink}
                to="/vehicles/new"
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  ml:2.5
                }}
              >
                New Vehicle
            </Button>
          </Box>
          <Grid
            sx={{
              backgroundColor: "background.default",
              minHeight: "100%",
            }}
            container>
            <Grid item md={4}>
              {/* <Entities
                fields={displayFields}
                query={getAllQuery}
                onEditClick={setEditData}
                onDeleteClick={deleteMutation.mutate}
              /> */}
              {/* <WidgetPreviewer
                element={<Table9 />}
                name="Basic table"
              /> */}
              <VehicleTable
                fields={displayFields}
                data={data}
                onSelect={setActiveSelection}
                activeSelection={activeSelection}
                // onEditClick={setEditData}
                onDeleteClick={deleteMutation.mutate}
              />
            </Grid>
            <Grid item md={8}>
              <VehicleDetailTable
                data={activeSelection}
                detailsRows={formFields}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Vehicles;
