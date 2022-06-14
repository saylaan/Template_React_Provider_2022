import React from "react";
import { BrowserRouter } from "react-router-dom";
/* ------------- || Providers Imports || ------------- */
import { AuthProvider } from "./providers/AuthenticationProvider";
import { SurveyProvider } from "./providers/SurveyProvider";
/* ------------- || Containers Imports|| ------------- */
import AppLayout from "./containers/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      {/* <SocketProvider> */}
      <SurveyProvider>
        <AuthProvider>
          <AppLayout />
        </AuthProvider>
      </SurveyProvider>
      {/* </SocketProvider> */}
    </BrowserRouter>
  );
};

export default App;
