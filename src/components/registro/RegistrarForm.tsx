import { useState } from "react";
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

import classes from "./RegistrarForm.module.css";

const RegistrarForm = (props: any) => {
  const [form, setForm] = useState({
    documento: "",
    celular: "",
    nombres: "",
    email: "",
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
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="nombres">Nombres</label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              onChange={changeHandler}
              value={form.nombres}
              required
            />
          </div>
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
          <div className={classes.control}>
            <label htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandler}
              value={form.email}
              required
            />
          </div>

          <div className={classes.actions}>
            <button className="btn">Registrar</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default RegistrarForm;
