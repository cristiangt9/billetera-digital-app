import RegistrarForm from "../components/registro/RegistrarForm";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useAxioshttp from "../hooks/use-axioshttp";
import { set_token, set_usuario } from "../store/actions";

const Registrar = () => {
  const { isLoading, error, sendRequest } = useAxioshttp();
  const history = useHistory();
  const dispatch = useDispatch();
  const processData = (response: any): void => {
    dispatch(set_token(response.data.token));
    history.push("/inicio");
  };
  const handlerLogin = (form: any) => {
    dispatch(
      set_usuario(form.nombres, form.documento, form.celular, form.email)
    );
    sendRequest(
      {
        method: "POST",
        url: "users",
        data: form,
      },
      processData
    );
  };
  return (
    <div>
      <h1>Registrar</h1>
      <RegistrarForm
        isLoading={isLoading}
        onLogin={handlerLogin}
        error={error}
      />
    </div>
  );
};

export default Registrar;
