import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import * as ReactQuery from "react-query";

const queryClient = new ReactQuery.QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactQuery.QueryClientProvider client={queryClient}>
      <App />
    </ReactQuery.QueryClientProvider>
  </React.StrictMode>
);
