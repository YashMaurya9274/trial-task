import { Provider } from "react-redux";
import { store } from "./store";
import RootRouter from "./components/RootRouter";
import GoogleTest from "./components/GoogleTest";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    // <Provider store={store}>
    //   <RootRouter />
    // </Provider>
    <GoogleOAuthProvider clientId="6662108012-d113mllf48u6fg3dmqfmldv69itbmsf9.apps.googleusercontent.com">
      <GoogleTest />
    </GoogleOAuthProvider>
  );
};

export default App;
