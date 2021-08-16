import {
  Box,
  Container,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';

const Footer = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      pb: 6,
      pt: {
        md: 15,
        xs: 6
      }
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={3}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            order: {
              md: 1,
              xs: 4
            }
          }}
          xs={12}
        >
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="caption"
          >
            © {new Date().getFullYear()} Pekker LLC
          </Typography>
        </Grid>
      </Grid>
      <Divider
        sx={{
          borderColor: (theme) => alpha(theme.palette.primary.contrastText, 0.12),
          my: 6
        }}
      />
    </Container>
  </Box>
);

export default Footer;
