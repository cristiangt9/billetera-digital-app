import LoginForm from "../components/login/LoginForm";
import useAxioshttp from "../hooks/use-axioshttp";

const Ingresar = () => {
  const { isLoading, error, sendRequest } = useAxioshttp();
  const processData = (response: any): void => {
    console.log(response);
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
