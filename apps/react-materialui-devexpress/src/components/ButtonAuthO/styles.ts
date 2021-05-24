import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default makeStyles((theme: Theme) => ({
  buttonAuthO: {
    marginTop: theme.spacing(6),
    // boxShadow: theme.customShadows.widget,
    backgroundColor: "white",
    width: "100%",
    textTransform: "none",
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  authOIcon: {
    width: 30,
    marginRight: theme.spacing(2),
  },
}));
