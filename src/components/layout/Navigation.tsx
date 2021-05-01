import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/" exact>Inicio</NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/pagar" exact>Pago</NavLink>
        </li>
        <li>
          <span className={classes.usuario}>Cristian Gozalez:</span> <button>salir</button>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
