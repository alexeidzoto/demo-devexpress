import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  withStyles } from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  Bookmark as BookmarkIcon,
  LiveHelp as LiveHelpIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from 'classnames';

import SidebarLink from './components/SidebarLink/SidebarLink';
// import Dot from './components/Dot';

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <DashboardIcon /> },
  { id: 1, type: "divider" },
  { id: 2, type: "title", label: "Chinook Catalog" },
  { id: 3, label: "Playlists", link: "/app/playlists", icon: <BookmarkIcon /> },
  { id: 4, label: "Genres", link: "/app/genres", icon: <BookmarkIcon /> },
  { id: 5, label: "Artists", link: "/app/artists", icon: <BookmarkIcon /> },
  { id: 6, label: "Media types", link: "/app/mediatypes", icon: <BookmarkIcon /> },
  { id: 7, label: "Albums", link: "/app/albums", icon: <BookmarkIcon /> },
  { id: 8, label: "Tracks", link: "/app/tracks", icon: <BookmarkIcon /> },
  { id: 9, type: "divider" },
  { id: 10, type: "title", label: "HELP" },
  { id: 11, label: "Service Stack", link: "/app/servicestack", icon: <LiveHelpIcon /> },
  { id: 12, label: "Chinook", link: "/app/chinook", icon: <LiveHelpIcon /> },
  { id: 13, label: "React", link: "/app/react", icon: <LiveHelpIcon /> },
  { id: 14, label: "Auth0", link: "/app/autho", icon: <LiveHelpIcon /> },
  { id: 15, label: "Flatlogic", link: "https://flatlogic.com/templates", icon: <LiveHelpIcon /> },
];

const SidebarView = ({ classes, theme, toggleSidebar, isSidebarOpened, isPermanent, location }: any) => {
  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.mobileBackButton}>
        <IconButton
          onClick={toggleSidebar}
        >
          <ArrowBackIcon classes={{ root: classNames(classes.headerIcon, classes.headerIconCollapse) }} />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => <SidebarLink key={link.id} location={location} isSidebarOpened={isSidebarOpened} {...link} />)}
      </List>
    </Drawer>
  );
}

const drawerWidth = 240;

const styles: any = (theme: any) => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    top: theme.spacing.unit * 8,
    [theme.breakpoints.down("sm")]: {
      top: 0,
    }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 40,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  mobileBackButton: {
    marginTop: theme.spacing.unit * .5,
    marginLeft: theme.spacing.unit * 3,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing.unit * .625,
    },
    [theme.breakpoints.up("md")]: {
      display: 'none',
    }
  }
});

export default withStyles(styles, { withTheme: true })(SidebarView);
