import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "./utils/theme";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AppContextProvider from "./context/state";
import ErrorBoundary from "./components/ErrorBoundary";
import GeneralLoading from "./components/GeneralLoading";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <AppContextProvider>
          <ErrorBoundary>
            <Suspense fallback={<GeneralLoading />}>
              <App />
            </Suspense>
          </ErrorBoundary>
        </AppContextProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
