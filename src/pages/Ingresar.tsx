import { useDispatch } from "react-redux";
import LoginForm from "../components/login/LoginForm";
import useAxioshttp from "../hooks/use-axioshttp";
import { set_token } from "../store/actions";

const Ingresar = () => {
  const { isLoading, error, sendRequest } = useAxioshttp();
  const dispatch = useDispatch();
  const processData = (response: any): void => {
    console.log(response);
    dispatch(set_token(response.token));
  }
  const handlerLogin = (form:any) => {
    sendRequest({
      method: "POST",
      url: "users/login",
      data: form,
    }, processData);
  }

  
  return (
    <div>
      <LoginForm isLoading={isLoading} onLogin={handlerLogin} error={error}/>
    </div>
  );
};

export default Ingresar;
