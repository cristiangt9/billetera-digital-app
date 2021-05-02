import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import SolicitudPagoForm from "../components/pago/SolicitudPagoForm";
import Card from "../components/ui/Card";
import { stateStore } from "../CustomInterface";
import classes from "./Pagar.module.css";

const Pagar = () => {
  const user = useSelector((state: stateStore) => state.user);
  const [showInputTokenConfirm, setShowInputTokenConfirm] = useState(false);
  const history = useHistory();

const SolicitudResponseHandler = () => {
    setShowInputTokenConfirm(true);
}

  if (user.token === "") history.push("/ingresar");
  
  return (
    <div className={classes.Pagar}>
      <Card className={classes.saldoCard}>
      <SolicitudPagoForm onResponse={SolicitudResponseHandler} enviado={showInputTokenConfirm} token={user.token}/>
      {showInputTokenConfirm && <p>Ingrese Token</p>}
      </Card>
    </div>
  );
};

export default Pagar;
