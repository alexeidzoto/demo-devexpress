import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import { useUserDispatch } from "../../context/UserContext";

// styles
import useStyles from "./styles";

// Auth0 button image
import auth0 from "../../assets/images/auth0.svg";

export const LoginButtonAuthO = () => {
  const {loginWithPopup} = useAuth0();
  const classes = useStyles();
  
  const userDispatch: any = useUserDispatch();

  const login = () => {
    localStorage.setItem("provider", "authO");
    localStorage.setItem("id_token", "1");
    loginWithPopup();
    userDispatch({ type: 'LOGIN_SUCCESS' });
  }

  return(
    <Button size="large" className={classes.buttonAuthO} onClick={() => login()}>
      <img src={auth0} loading="lazy" alt="Sign in with Auth0" width="30" height="30" className={classes.authOIcon} /> 
        &nbsp;Sign in with Auth0
    </Button>
  )
}