import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { stateStore } from "../../CustomInterface";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const user = useSelector((state: stateStore) => state.user);
  let content = (
    <ul>
      <li>
        <NavLink activeClassName={classes.active} to="/registrar" exact>
          Registrar
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/ingresar" exact>
          Ingresar
        </NavLink>
      </li>
    </ul>
  );
  if (user.token !== "") {
    content = (
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/inicio" exact>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/pagar" exact>
            Pago
          </NavLink>
        </li>
        <li>
          <span className={classes.usuario}>Cristian Gozalez:</span>{" "}
          <button>salir</button>{" "}
        </li>
      </ul>
    );
  }
  return <nav className={classes.nav}>{content}</nav>;
};

export default Navigation;
