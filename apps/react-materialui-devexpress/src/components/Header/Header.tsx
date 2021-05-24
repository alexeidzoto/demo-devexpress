import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Person as AccountIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers/Wrappers";
import { LogoutButtonAuthO } from "../ButtonAuthO"
import { useAuth0 } from "@auth0/auth0-react";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";

export default function Header(props: any) {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  // global
  const layoutState: any = useLayoutState();
  const layoutDispatch: any = useLayoutDispatch();
  const userDispatch: any = useUserDispatch();
  
  // local
  
  const provider: string | any = localStorage.getItem("provider");
  const [profileMenu, setProfileMenu] = useState<any>(null);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          Demo Admin
        </Typography>
        <div className={classes.grow} />
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
          {isAuthenticated && !isLoading && provider === "authO" &&(
            <Typography variant="h4" weight="medium">
              {user?.name} 
            </Typography>
          )}
          {provider === "local" &&(
            <Typography variant="h4" weight="medium">
              John Mars 
            </Typography>
          )}
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href="https://flatlogic.com"
            >
              Flalogic.com
            </Typography>
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>
          <div className={classes.profileMenuUser}>
            {
              provider === "authO" 
                ? <LogoutButtonAuthO />
                : <Typography
                className={classes.profileMenuLink}
                color="primary"
                onClick={() => signOut(userDispatch, props.history)}
              >
                Sign Out
              </Typography> 
            }
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
