import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import PencilAltIcon from "../../icons/PencilAlt";
import TrashIcon from "../../icons/Trash";

const toLabel = (s) => {
  const spaced = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};

const EntityDetail = ({ data, fields, onEdit, onDelete }) => {
  const fieldsInternal = fields || Object.keys(data).map(k => ({
    name: k
  }));

  return (
    <Grid item key={data.id} md={6} xs={12}>
      <Card>
        <CardContent
          sx={{
            justifyContent: "space-between",
          }}
        >
          {data["name"] && <Typography color="textPrimary" variant="subtitle1">{data["name"]?.toString()}</Typography>}
          {fieldsInternal.map((f) => {
            if (!f.name.startsWith("_") && f.name !== ("name")) {
              return (
                <div key={`${data._id}${f.name}`}>
                  <Typography
                    color="textPrimary"
                    variant="subtitle2"
                    component="span"
                  >
                    {f?.label || toLabel(f.name)}:{" "}
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body1"
                    component="span"
                  >
                    {data[f.name]?.toString()}
                  </Typography>
                </div>
              );
            }
          })}
        </CardContent>
        {(onEdit || onDelete) && <Divider />}
        <CardActions align="right">
          {onEdit && (
            <Button
              color="primary"
              fullWidth
              startIcon={<PencilAltIcon fontSize="small" />}
              variant="text"
              onClick={() => onEdit(data)}
            >
              Edit
            </Button>
          )}
          {onDelete && (
            <Button
              color="secondary"
              fullWidth
              startIcon={<TrashIcon fontSize="small" />}
              variant="text"
              onClick={() => onDelete(data)}
            >
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default EntityDetail;
