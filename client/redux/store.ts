import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function initializeStore(state) {
  const store = createStore(
    reducers,
    // Object.assign({},{

    // })
    // ,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
