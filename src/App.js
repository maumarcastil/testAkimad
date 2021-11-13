import "./App.css";
import RootRouter from "./Routers";
import { BrowserRouter } from "react-router-dom";

/* Redux */
import { Provider } from "react-redux";
import store from "./reducers/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
