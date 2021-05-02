import { user } from "../../CustomInterface";
import { SET_USUARIO, SET_TOKEN } from "../actions/user.actions";

const initialState: user = {
  nombres: "",
  documento: "",
  celular: "",
  email: "",
  saldo: 0,
  token: "string",
};

const reducerUser = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_USUARIO:
      return {
        ...state,
        nombres: payload.nombres,
        documento: payload.documento,
        celular: payload.celular,
        email: payload.email,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    default:
      return state;
  }
};

export default reducerUser;
