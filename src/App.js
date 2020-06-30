import React from "react";
// import Headers from "./features/Header/Headers";
import { Provider } from "react-redux";
import configureStore from "./components/Redux/configStore";
import Home from "./components/core/Home";
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
