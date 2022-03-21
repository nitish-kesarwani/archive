import { BrowserRouter as Router } from "react-router-dom";
import AuthRoute from "./routers/AuthRoute";
import { GlobalStyle } from "./globalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AuthRoute />
    </Router>
  );
};

export default App;
