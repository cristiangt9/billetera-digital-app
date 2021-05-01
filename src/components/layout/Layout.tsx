import { Link } from "react-router-dom";
import { propsNavInter } from "../../CustomInterface";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";

const Layout = (props: propsNavInter) => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <Link to="/" className={classes.logo}>
          Billetera Digital
        </Link>
        <Navigation />
      </header>
      <main className={classes.content}>{props.children}</main>
      <footer>Ningun derecho reservado 2021</footer>
    </div>
  );
};

export default Layout;
