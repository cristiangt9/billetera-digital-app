import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/pagar">Pago</NavLink>
          </li>
          <li>Cristian: <button>salir</button> </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
