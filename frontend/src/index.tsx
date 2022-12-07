import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CustomTheme from "./components/layout/CustomTheme";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={CustomTheme}>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
