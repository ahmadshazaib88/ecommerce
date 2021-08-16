import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Grid
} from '@material-ui/core';

// TODO: Not completed yet

const VehicleDetailTab = ({ data, rows }) => (
  <Box
    sx={{
      // backgroundColor: 'background.default',
      minHeight: '100%',
      minWidth: '100%',
      pb: 3
    }}
  >
    <Grid
      alignItems="left"
      container
      justifyContent="space-evenly"
      sx={{ p: 3 }}
    >
      {data?.map((d) => (
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          sx={{
            borderRight: (theme) => ({
              // md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              md: `1px solid ${theme.palette.divider}`,
              // md: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }),
            p: 1,
            textAlign: 'left'
          }}
        >
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="overline"
          >
            {d.label}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            {d.value}
          </Typography>

        </Grid>
      ))}
    </Grid>
  </Box>
);

export default VehicleDetailTab;
