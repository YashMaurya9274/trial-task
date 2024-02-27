import { Provider } from "react-redux";
import { store } from "./store";
import RootRouter from "./components/RootRouter";

const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};

export default App;
