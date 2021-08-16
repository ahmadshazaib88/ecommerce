import { Helmet } from 'react-helmet-async';
import {
  HomeClients,
  HomeHero,
  HomeOverview,
  HomeRoles,
  HomeFeatures,
  HomeTestimonials
} from '../components/home';
import { Grid, Box, Container, Typography, Button } from "@material-ui/core";

// TODO: Not completed yet

const data=[
  {
    label: "Distance",
    value: "1150 miles"
  },
  {
    label: "Travel Time",
    value: "26.2 hours"
  },
  {
    label: "Idle Time",
    value: "6.1 hours"
  }
]

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.paper",
          minHeight: "100%",
          py: { md: 8 },
        }}
      >
        <Container maxWidth="lg">   
        <Grid
        alignItems="left"
        // container
        // justifyContent="space-evenly"
        sx={{p:3}}
        >
        <Typography noWrap variant="h5" color="primary" sx={{pb:2}}>{"Driving".toUpperCase()}</Typography>
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
                      // md: `1px solid ${theme.palette.divider}`,
                      // md: 'none',
                      // xs: `1px solid ${theme.palette.divider}`
                    }),
                    // p: 1,
                    textAlign: 'left'
                  }}
                >
                  <Grid
                    container
                    // justifyContent="space-evenly"
                  >
                    <Typography
                      color="textSecondary"
                      
                      // variant="overline"
                    >
                      {d.label}
                    </Typography>
                    <Typography
                      color="textPrimary"
                      sx={{ pl: 2 }}
                      // variant="h6"
                    >
                      {d.value}
                    </Typography>
                  </Grid>
                </Grid>
        ))}
        </Grid>
        </Container>



      </Box>
    </>
  );
};

export default Home;
