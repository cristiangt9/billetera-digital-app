import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import Inicio from "./pages/Inicio";
import Pagar from "./pages/Pagar";

function App() {
  return (
    <Layout>

      <Switch>
        <Route path="/" exact>
          <Inicio/>
        </Route>
        <Route path="/Pagar" exact>
          <Pagar/>
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
