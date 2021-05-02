export interface propsNavInter {
  children: any;
}

export interface userInterface {
  nombres?: string;
  documento: string;
  celular: string;
  email?: string;
  saldo: number;
  token: string;
}

export interface stateStore {
  user: userInterface;
  modal: modalInterface
}

export interface modalInterface {
  show: boolean;
  contenido: any;
  onClose: any;
  labelOnClose: string;
}