import { useState } from "react";
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

import classes from "./LoginForm.module.css";

const LoginForm = (props: any) => {
  const [form, setForm] = useState({
    documento: "",
    celular: "",
  });

  function submitFormHandler(event: any) {
    event.preventDefault();

    // validate here

    props.onLogin(form);
  }

  const changeHandler = (event: any) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };
  if (props.error.onError)
    return <section className="centered">{props.error.message}</section>;
    
  return (
    <>
      <Card className={classes.loginCard}>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="documento">Documento</label>
            <input
              type="text"
              id="documento"
              name="documento"
              onChange={changeHandler}
              value={form.documento}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="celular">Celular</label>
            <input
              type="text"
              id="celular"
              name="celular"
              onChange={changeHandler}
              value={form.celular}
              required
            />
          </div>

          <div className={classes.actions}>
            <button className="btn">Ingresar</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default LoginForm;
