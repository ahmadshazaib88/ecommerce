import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Box, Container, Typography } from "@material-ui/core";
import { Entities, EntityForm } from "../../components/entity";
import useEntityHooks from "../../hooks/useEntityHooks";

const EntityLayout = ({ entity, api, formFields = undefined, displayFields = undefined, title = "Entity" }) => {
  const [editData, setEditData] = useState(null);
  const { getAllQuery, createMutation, updateMutation, deleteMutation } =
    useEntityHooks(entity, api);

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
      // ahmad
        <Container maxWidth="lg">          
          <Typography variant="h5" color="initial">{title}</Typography>
          <Grid container>
            {formFields &&
            <Grid item md={4}>
              <EntityForm
                fields={formFields}
                data={editData}
                onEditSubmit={updateMutation.mutate}
                onCreateSubmit={createMutation.mutate}
              />
            </Grid>
            }
            {displayFields &&
              <Grid item md={8}>
                <Entities
                  fields={displayFields}
                  query={getAllQuery}
                  onEditClick={setEditData}
                  onDeleteClick={deleteMutation.mutate}
                />
              </Grid>
            }
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EntityLayout;
