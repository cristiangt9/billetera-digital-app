import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { stateStore } from "../../CustomInterface";
import { remove_usuario } from "../../store/actions";
import classes from "./Navigation.module.css";

const Navigation = () => {
const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(remove_usuario());
  }
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
          <span className={classes.usuario}>{user.nombres}:</span>{" "}
          <button onClick={logoutClickHandler}>salir</button>{" "}
        </li>
      </ul>
    );
  }
  return <nav className={classes.nav}>{content}</nav>;
};

export default Navigation;
