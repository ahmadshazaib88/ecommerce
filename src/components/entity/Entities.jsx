import { useState } from "react";
import { Box, Grid, Pagination } from "@material-ui/core";
import EntityDetail from "./EntityDetail";

const Entities = ({ query, fields = undefined, onEditClick = undefined, onDeleteClick = undefined }) => {
  const [page, setPage] = useState(1);
  const { data } = query({ page });

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          justifyContent: "center",
          minHeight: "100%",
          p: 3,
        }}
      >
        <Grid container spacing={2}>
          {data?.docs?.map((d) => (
            <EntityDetail key={d?._id} data={d} fields={fields} onEdit={onEditClick} onDelete={onDeleteClick} />
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination count={data?.lastPage} page={page} onChange={(e, v) => setPage(v)}/>
      </Box>
    </>
  );
};

export default Entities;
