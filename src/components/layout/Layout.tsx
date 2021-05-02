
import { Link } from "react-router-dom";
import { propsNavInter } from "../../CustomInterface";
import Modal from "../ui/Modal";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";

const Layout = (props: propsNavInter) => {
  const today = new Date();
  return (
    <>
      <Modal/>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            Billetera Digital
          </Link>
        </div>
        <Navigation />
      </header>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>Ningún derecho reservado {today.getFullYear()}</footer>
    </>
  );
};

export default Layout;
