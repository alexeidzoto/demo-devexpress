import React from "react";
import {
  Typography,
  Grid,
  Container,
  Link,
} from "@material-ui/core";

// logo
import logo from "../../../assets/images/autho/logo.png";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../../components/PageTitle/PageTitle";

export default function AuthoHelp() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <>
      <PageTitle title="Auth0"/>
      <Link href="https://auth0.com/" rel="noopener noreferrer" onClick={preventDefault}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
      </Link>
      <section>
        <Typography variant="h2" className={classes.title}>
        Using Auth0, developers can connect any application written in any language or stack, and define the external identity providers, as well as integrations, that they want to use. This short Auth0 product demo gives an overview of this process, touching upon Auth0’s unmatched extensibility and its applicability to B2B, B2C, and B2E use cases.
        </Typography>
      </section>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                Sign up and create an Auth0 tenant
                </Typography>
                <Typography variant="h6">
                  {'A tenant is a logically isolated group of users who share common access requirements with specific privileges.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                Connect any application 
                </Typography>
                <Typography variant="h6">
                  {'(written in any language or on any stack) to your Auth0 tenant and define the identity providers you want to use (how you want your users to log in).'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                App's technology
                </Typography>
                <Typography variant="h6">
                  {"Based on your app's technology, choose one of our SDKs (or call our APIs), and hook it up to your app. Now each time a user tries to authenticate, Auth0 will verify their identity and send the required information back to your app. You can also register a custom API and configure the tokens, role-based access control (RBAC), and other access settings and permissions."}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                Configure
                </Typography>
                <Typography variant="h6">
                  {"Configure how your Auth0 tenants, apps, and APIs work together to optimize how you authenticate and authorize your users."}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
