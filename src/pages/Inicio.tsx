import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { stateStore } from "../CustomInterface";
import useAxioshttp from "../hooks/use-axioshttp";
import { set_saldo } from "../store/actions";
import classes from "./Inicio.module.css";

const Inicio = () => {
  const pagarClickHandler = (): void => {};
  const user = useSelector((state: stateStore) => state.user);
  const { documento, celular } = user;
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useAxioshttp();

  useEffect(() => {
    const processData = (response: any) => {
      dispatch(set_saldo(parseInt(response.saldo)));
    };
    sendRequest(
      {
        method: "POST",
        url: "transacciones",
        data: { tipo: "consultarSaldo", documento, celular },
      },
      processData
    );
  }, [documento, celular, sendRequest, dispatch]);

  if (user.token === "") history.push("/ingresar");

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error.onError) return <div>{error.message}</div>;

  return (
    <div className={classes.Inicio}>
      <h1>Bienvenido a Billetera Digital</h1>
      <Card className={classes.saldoCard}>
        <div className={classes.saldo}>
          Saldo: <span className={classes.saldoValor}>$ {user.saldo}</span>
        </div>
      </Card>
      <Card className={classes.saldoCard}>
        <Button className={classes.pagar} onClick={pagarClickHandler}>
          Pagar
        </Button>
      </Card>
    </div>
  );
};

export default Inicio;
