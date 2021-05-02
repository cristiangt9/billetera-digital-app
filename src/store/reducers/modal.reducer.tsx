import { modalInterface } from "../../CustomInterface";
import * as Actions from "../actions";
const initialState: modalInterface = {
  show: false,
  contenido: "",
  onClose: ()=>{},
  labelOnClose: ""
};

const reducerModal = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case Actions.SHOW_MODAL:
      return {
        ...state,
        show: true,
        contenido: payload.contenido,
        onClose: payload.onClose,
        labelOnClose: payload.labelOnClose,
      };
    case Actions.HIDE_MODAL:
      return {...initialState};
    default:
      return state;
  }
};

export default reducerModal;
