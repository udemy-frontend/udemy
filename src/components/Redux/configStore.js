import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers/RootReducers";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;
const configureStore = () => {
  const middlewares = [];
  const enhencers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducers, composeEnhancers(...enhencers));
  return store;
};
export default configureStore;
