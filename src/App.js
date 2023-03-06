import React, { useState } from "react";
import "./App.css";
import Main from "./views/Main";
import { LoginPage } from "./components/LoginPage";
import { commonStyles } from "./Styles/CommonStyles";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div style={commonStyles.mainPage}>
      <button
        onClick={() => {
          setIsAuth(!isAuth);
        }}
        type="button"
        class="btn btn-primary mt-4 mb-4"
      >
        Logout/Login
      </button>
      <Provider store={store}>
        <Router>
          <Switch>
            {isAuth ? (
              <Route path="/" component={Main} />
            ) : (
              <Route path="/" component={LoginPage} />
            )}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
