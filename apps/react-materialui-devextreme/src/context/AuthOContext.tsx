import React from "react";
// import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
// import { useUserDispatch } from "./UserContext";


export const Auth0ProviderWithHistory = ({ children }: any) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  // const userDispatch = useUserDispatch();
  // const history = useHistory();

  // const onRedirectCallback = (appState: any) => {
    // localStorage.setItem('id_token', "1");
    // userDispatch({ type: 'LOGIN_SUCCESS' })
    // history.push('/app/dashboard')
  // };

  return (
    <Auth0Provider
      domain={`${domain}`}
      clientId={`${clientId}`}
      redirectUri={window.location.origin}
      // onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
