import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./components/SelectLang/selectLang";

// import createSagaMiddleware from "redux-saga";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      {/* <Provider store={store}> */}
      <Routes />
      {/* </Provider> */}
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
