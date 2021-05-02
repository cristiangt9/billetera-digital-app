import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { stateStore } from "../CustomInterface";
import classes from "./Pagar.module.css";

const Pagar = () => {
  const user = useSelector((state: stateStore) => state.user);
  const history = useHistory();
  if (user.token === "") history.push("/ingresar");
  return <div className={classes.Pagar}>Pagar Page</div>;
};

export default Pagar;
