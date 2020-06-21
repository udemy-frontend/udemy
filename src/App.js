import React from "react";
import Headers from "./features/Header/Headers";
import { Provider } from "react-redux";
import configureStore from "./components/Redux/configStore";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Headers />
    </Provider>
  );
}

export default App;
