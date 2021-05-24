import React from "react";
import {
  Typography,
  Grid,
  Container,
} from "@material-ui/core";

// logo
import logo from "../../../assets/images/chinook/logo.png";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../../components/PageTitle/PageTitle";

export default function ChinookHelp () {
  const classes = useStyles();

  return (
    <>
      <PageTitle title="Chinook"/>
      <img src={logo} alt="logo" className={classes.logotypeImage} />
      <section>
        <Typography variant="h2" className={classes.title}>
        The Chinook sample database for a digital media store can be used to explore and learn Service Stack.
        </Typography>
      </section>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                  Catalog
                </Typography>
                <Typography variant="h6">
                  {'Media-related data was created using real data from an Apple iTunes library.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                  Customers
                </Typography>
                <Typography variant="h6">
                  {'Customer and employee information was created using fictitious names and addresses that can be located on Google maps, and other well formatted data (phone, fax, email, etc.)'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                  Sales
                </Typography>
                <Typography variant="h6">
                  {'Sales information was auto generated using random data for a four year period.'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
