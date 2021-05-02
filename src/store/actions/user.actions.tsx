
export const SET_USUARIO= "[USUARIO] SET USUARIO";
export const set_usuario = (nombres: string, documento: string, celular: string, email: string) => ({
    type: SET_USUARIO,
    payload: {nombres, documento, celular, email}
});
export const SET_TOKEN= "[USUARIO] SET TOKEN";
export const set_token = (token:any) => ({
    type: SET_TOKEN,
    payload: token
});