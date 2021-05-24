import React from "react";
import {
  Typography,
  Grid,
  Container,
  Link,
} from "@material-ui/core";

// logo
import logo from "../../../assets/images/react/logo.png";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../../components/PageTitle/PageTitle";

export default function ReactHelp () {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <>
      <PageTitle title="React"/>
      <Link href="https://reactjs.org/" rel="noopener noreferrer" onClick={preventDefault}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
      </Link>
      <section>
        <Typography variant="h2" className={classes.title}>
        A JavaScript library for building user interfaces
        </Typography>
      </section>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                 Declarative
                </Typography>
                <Typography variant="h6">
                  {'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                  Component-Based
                </Typography>
                <Typography variant="h6">
                  {'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography variant="h4" className={classes.title}>
                  Learn Once, Write Anywhere
                </Typography>
                <Typography variant="h6">
                  {'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
