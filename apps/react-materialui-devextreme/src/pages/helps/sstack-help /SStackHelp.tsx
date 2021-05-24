import React from "react";
import {
  Typography,
  Grid,
  Container,
  Link,
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import StorageIcon from '@material-ui/icons/Storage';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ComputerIcon from '@material-ui/icons/Computer';
import AppsIcon from '@material-ui/icons/Apps';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

// logo
import logo from "../../../assets/images/servicestack/logo-ss-large.png";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../../components/PageTitle/PageTitle";

export default function SStackHelp () {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <>
      <PageTitle title="Service Stack"/>
      <Link href="https://servicestack.net/" rel="noopener noreferrer" onClick={preventDefault}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
      </Link>
      <section>
        <Typography variant="h2" className={classes.title}>
        Maximize Productivity
        </Typography>
        <Typography variant="h6">
          {"Rapidly develop powerful System APIs for Web, Mobile & Desktop Apps with amazing productivity features that's intuitive and Easy-to-use!"}
        </Typography>
      </section>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <SearchIcon />
                <Typography variant="h5" className={classes.title}>
                  AutoQuery
                </Typography>
                <Typography variant="h6">
                  {'Effortless, declarative high-performance Query & CRUD APIs'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <StorageIcon />
                <Typography variant="h5" className={classes.title}>
                  AutoGen
                </Typography>
                <Typography variant="h6">
                  {'Instantly Servicify your existing RDBMS with AutoQuery APIs'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <SettingsIcon />
                <Typography variant="h5" className={classes.title}>
                  Add ServiceStack Reference
                </Typography>
                <Typography variant="h6">
                  {'Web, Mobile, Desktop Typed Clients'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <AssignmentIcon />
                <Typography variant="h6" className={classes.title}>
                  Project Templates
                </Typography>
                <Typography variant="h5">
                  {'Get your project started quickly.'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <ComputerIcon />
                <Typography variant="h5" className={classes.title}>
                  ServiceStack Studio
                </Typography>
                <Typography variant="h6">
                  {'Manage users, permissions, validation and more.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <AppsIcon />
                <Typography variant="h5" className={classes.title}>
                  Instant Client Apps
                </Typography>
                <Typography variant="h6">
                  {'Generate native client apps in seconds.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <PhoneAndroidIcon />
                <Typography variant="h5" className={classes.title}>
                  Mobile Clients
                </Typography>
                <Typography variant="h6">
                  {'Client libraries for all popular languages'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <SyncAltIcon />
                <Typography variant="h5" className={classes.title}>
                  gRPC Support
                </Typography>
                <Typography variant="h6">
                  {'Add gRPC support quickly and easily'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
