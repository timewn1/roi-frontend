import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.min.css";
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Router from "./router";
import i18n from "./translation";
import ContextProvider from './contexts/index';
import "./App.css";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ContextProvider>
        <ReactNotifications />
        <Router />
      </ContextProvider>
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
