import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import classes from "./Inicio.module.css";

const Inicio = () => {
    const pagarClickHandler = ():void => {

    }
  return (
    <div className={classes.Inicio}>
      <h1>Bienvenido a Billetera Digital</h1>
      <Card className={classes.saldoCard}>
        <div className={classes.saldo}>
            Saldo: <span className={classes.saldoValor}>$ 1000</span>
        </div>
      </Card>
      <Card className={classes.saldoCard}>
            <Button className={classes.pagar} onClick={pagarClickHandler}>Pagar</Button>
      </Card>
    </div>
  );
};

export default Inicio;
