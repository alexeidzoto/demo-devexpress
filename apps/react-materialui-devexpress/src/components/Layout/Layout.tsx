import React from "react";
import {
  Route,
  Switch,
  // Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages
import Dashboard from "../../pages/dashboard/Dashboard";
import Playlists from "../../pages/playlists/Playlists";
import Tracks from "../../pages/tracks/Tracks";
import Genres from "../../pages/genres/Genres";
import Artists from "../../pages/artists/Artists";
import MediaTypes from "../../pages/media-types/MediaTypes";
import Albums from "../../pages/albums/Albums";

// context
import { useLayoutState } from "../../context/LayoutContext";
import ReactHelp from "../../pages/helps/react-help/ReactHelp";
import AuthoHelp from "../../pages/helps/auth0-help/AuthoHelp";
import ChinookHelp from "../../pages/helps/chinook-help/ChinookHelp";
import SStackHelp from "../../pages/helps/sstack-help /SStackHelp";


function Layout(props: any) {
  const classes = useStyles();

  // global
  const layoutState: any = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/playlists" component={Playlists} />
              <Route path="/app/tracks" component={Tracks} />
              <Route path="/app/genres" component={Genres} />
              <Route path="/app/artists" component={Artists} />
              <Route path="/app/mediatypes" component={MediaTypes} />
              <Route path="/app/albums" component={Albums} />
              <Route path="/app/react" component={ReactHelp} />
              <Route path="/app/autho" component={AuthoHelp} />
              <Route path="/app/chinook" component={ChinookHelp} />
              <Route path="/app/servicestack" component={SStackHelp} />
            </Switch>
            <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
              <div>
                <Link
                  color={'primary'}
                  href={'https://flatlogic.com/'}
                  target={'_blank'}
                  className={classes.link}
                >
                  Flatlogic
                </Link>
                <Link
                  color={'primary'}
                  href={'https://flatlogic.com/about'}
                  target={'_blank'}
                  className={classes.link}
                >
                  About Us
                </Link>
                <Link
                  color={'primary'}
                  href={'https://flatlogic.com/blog'}
                  target={'_blank'}
                  className={classes.link}
                >
                  Blog
                </Link>
              </div>
              <div>
                <Link
                  href={'https://www.facebook.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton aria-label="facebook">
                    <Icon
                      path={FacebookIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://twitter.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton aria-label="twitter">
                    <Icon
                      path={TwitterIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://github.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton
                    aria-label="github"
                    style={{marginRight: -12}}
                  >
                    <Icon
                      path={GithubIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
              </div>
            </Box>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
