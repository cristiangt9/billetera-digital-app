export const SHOW_MODAL = "[MODAL] SHOW MODAL";
export const show_modal = (
  contenido: any,
  onClose: any,
  labelOnCLose: string
) => ({
  type: SHOW_MODAL,
  payload: { contenido, onClose, labelOnCLose },
});

export const HIDE_MODAL = "[MODAL] HIDE MODAL";
export const hide_modal = () => ({
  type: HIDE_MODAL,
});
