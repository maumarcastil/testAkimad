import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootRouter from "./Routers";

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
