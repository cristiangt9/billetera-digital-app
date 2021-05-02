
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

export const SET_SALDO_NOMBRES= "[USUARIO] SET SALDO, NOMBRES";
export const set_saldo_nombres = (saldo: number, nombres: string ) => ({
    type: SET_SALDO_NOMBRES,
    payload: {saldo, nombres}
});

export const SET_DOCUMENTO_CELULAR= "[USUARIO] SET DOCUMENTO CELULAR";
export const set_documento_celular = (documento: string, celular: string) => ({
    type: SET_DOCUMENTO_CELULAR,
    payload: {documento, celular}
});

export const REMOVE_USUARIO= "[USUARIO] REMOVE USUARIO";
export const remove_usuario = () => ({
    type: REMOVE_USUARIO,
});