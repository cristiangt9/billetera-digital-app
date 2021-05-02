import { userInterface } from "../../CustomInterface";
import * as Actions from "../actions";
const initialState: userInterface = {
  nombres: "",
  documento: "",
  celular: "",
  email: "",
  saldo: 0,
  token: "",
};

const reducerUser = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case Actions.SET_USUARIO:
      return {
        ...state,
        nombres: payload.nombres,
        documento: payload.documento,
        celular: payload.celular,
        email: payload.email,
      };
    case Actions.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case Actions.SET_DOCUMENTO_CELULAR:
      return {
        ...state,
        documento: payload.documento,
        celular: payload.celular,
      };
    case Actions.SET_SALDO:
      return {
        ...state,
        saldo: payload,
      };
    default:
      return state;
  }
};

export default reducerUser;
