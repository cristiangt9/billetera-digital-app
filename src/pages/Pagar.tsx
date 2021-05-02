import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ConfirmarPagoForm from "../components/pago/ConfirmarPago";
import SolicitudPagoForm from "../components/pago/SolicitudPagoForm";
import { stateStore } from "../CustomInterface";
import { hide_modal, show_modal } from "../store/actions";
import classes from "./Pagar.module.css";

const Pagar = () => {
  const user = useSelector((state: stateStore) => state.user);
  const [showInputTokenConfirm, setShowInputTokenConfirm] = useState(false);
  const [isSendedTokenConfirm, setIsSendedTokenConfirm] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(hide_modal());
    history.push("/inicio");
  };

  const solicitudResponseHandler = () => {
    setShowInputTokenConfirm(true);
  };

  const contentModal = (response: any) => (
    <>
      <h1>{response.title}</h1>
      <p>{response.message}</p>
      <button onClick={closeModalHandler}>Cerrar</button>
    </>
  );

  const confirmacionResponseHandler = (response: any) => {
    setIsSendedTokenConfirm(true);
    // mostrar el modal de confirmacion
    dispatch(show_modal(contentModal(response), closeModalHandler, "Cerrar"));
  };

  if (user.token === "") history.push("/ingresar");

  return (
    <div className={classes.Pagar}>
      <h1>Pagar</h1>
      <SolicitudPagoForm
        onResponse={solicitudResponseHandler}
        enviado={showInputTokenConfirm}
        token={user.token}
      />
      {showInputTokenConfirm && (
        <ConfirmarPagoForm
          onResponse={confirmacionResponseHandler}
          token={user.token}
          enviado={isSendedTokenConfirm}
        />
      )}
    </div>
  );
};

export default Pagar;
