import React from "react";
<<<<<<< HEAD
// import Headers from "./features/Header/Headers";
import { Provider } from "react-redux";
import configureStore from "./components/Redux/configStore";
import Home from "./components/core/Home";
=======
import Headers from "./features/Header/Headers";
import { Provider } from "react-redux";
import configureStore from "./components/Redux/configStore";

>>>>>>> f0198d3cefea50c8b23d56cec43b025fa5f123e9
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <Home />
=======
      <Headers />
>>>>>>> f0198d3cefea50c8b23d56cec43b025fa5f123e9
    </Provider>
  );
}

export default App;
