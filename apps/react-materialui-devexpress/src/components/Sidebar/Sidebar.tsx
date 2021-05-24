import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  Bookmark as BookmarkIcon,
  LiveHelp as LiveHelpIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
// import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

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

function Sidebar({ location }: any) {
  const classes: any = useStyles();
  const theme: any = useTheme();

  // global
  const { isSidebarOpened }: any = useLayoutState();
  const layoutDispatch: any = useLayoutDispatch();

  // local
  const [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
