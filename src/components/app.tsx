import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { client } from "../store";
import { IS_AUTH, GET_REFRESH_TOKEN } from "../queries";
import { 
  HomePage,
  CollectionPage,
  LoginPage,
  RegistrationPage,
  ConfirmPage,
  ConfirmSuccessPage,
  ResetPassword,
  NewPasswordPage,
  ProfilePage
} from "../pages";
import { Header } from "./header/header";

interface AuthData {
  isAuth: boolean;
}

const NonAuthPaths = () => (
  <>
    <Route exact path="/login" component={LoginPage}/>
    <Route exact path="/registration" component={RegistrationPage}/>
    <Route exact path="/reset-password" component={ResetPassword}/>
    <Route exact path="/resetPassword/:token" component={NewPasswordPage}/>
  </>
);

const AuthPaths = () => (
  <>
    <Route exact path="/profile/:id" component={ProfilePage}/>
  </>
)

const App: React.FC = () => {
  const { data } = useQuery<AuthData>(IS_AUTH);

  const [setRefreshToken] = useMutation(GET_REFRESH_TOKEN);
  useEffect( () => {
    setRefreshToken().then(() => {
      client.writeQuery({
        query: IS_AUTH,
        data: {
          isAuth: true
        }
      });
    }).catch(() => {
      client.writeQuery({
        query: IS_AUTH,
        data: {
          isAuth: false
        }
      });
    });
  }, []);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collections/:id" component={CollectionPage}/>
        <Route exact path="/confirm" component={ConfirmPage}/>
        <Route exact path="/confirm/:token" component={ConfirmSuccessPage}/>
        {
          !data?.isAuth
            ? <NonAuthPaths/>
            : <AuthPaths/>
        }
        <Redirect to="/"/> {/* сделать 404 */}
      </Switch>
    </Router>
  );
};

export default App;
