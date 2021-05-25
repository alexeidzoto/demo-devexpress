import React, { useState } from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { LoginButtonAuthO } from "../../components/ButtonAuthO";

// styles
import useStyles from "./styles";

// logo
import logo from "../../assets/images/logo.png";

import Form, {
  SimpleItem,
  RequiredRule,
  ButtonItem,
  ButtonOptions
} from 'devextreme-react/form';
import Tabs from 'devextreme-react/tabs';
import { tabs } from './data';

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";
import { LoginForm } from '../../domain/types';

const initialLoginForm: LoginForm = {
  name: "Admin Flatlogic",
  email: "admin@flatlogic.com",
  password: "password",
}

function Login(props: any) {
  const classes = useStyles();

  // global
  const userDispatch = useUserDispatch();

  // local
  const [, setIsLoading] = useState<boolean>(false);
  const [, setError] = useState<boolean | undefined>(undefined);
  const [activeTabId, setActiveTabId] = useState<number>(0);

  const handleOptionChange = (e: any) => {
    if(e.fullName === 'selectedIndex') {
      setActiveTabId(e.value);
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) =>  {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    loginUser(
      userDispatch,
      email,
      password,
      props.history,
      setIsLoading,
      setError,
    )
  };
    
  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>DevExtreme with React</Typography>
      </div>
      <div className={classes.formContainer}>
      <div className={classes.form}> 
        <Tabs
            dataSource={tabs}
            selectedIndex={activeTabId}
            onOptionChanged={handleOptionChange}
        />
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Good Morning, User
              </Typography>
              <LoginButtonAuthO />
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <form onSubmit={handleSubmit}>
                <Form
                  formData={initialLoginForm}
                >
                  <SimpleItem dataField="email">
                    <RequiredRule
                      message="Email is required"
                    />
                  </SimpleItem>
                  <SimpleItem dataField="password">
                    <RequiredRule
                      message="Password is required"
                    />
                  </SimpleItem>
                  <ButtonItem 
                    horizontalAlignment="left">
                    <ButtonOptions 
                      text="Login"
                      useSubmitBehavior={true}
                    />  
                  </ButtonItem>
                </Form>
              </form>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}></Typography>
                <div className={classes.formDivider} />
              </div>
              <form onSubmit={handleSubmit}>
                <Form
                  formData={initialLoginForm}
                >
                  <SimpleItem dataField="name">
                    <RequiredRule
                      message="Name is required"
                    />
                  </SimpleItem>
                  <SimpleItem dataField="email">
                    <RequiredRule
                      message="Email is required"
                    />
                  </SimpleItem>
                  <SimpleItem dataField="password">
                    <RequiredRule
                      message="Password is required"
                    />
                  </SimpleItem>
                  <ButtonItem 
                    horizontalAlignment="center">
                    <ButtonOptions 
                      text="Create account"
                      useSubmitBehavior={true}
                    />  
                  </ButtonItem>
                </Form>
              </form>
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
        © 2014-{new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">Flatlogic</a>, LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
