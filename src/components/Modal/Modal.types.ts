export type ModalOnClose = () => void;

export interface ModalProps {
  isOpen: boolean;
  onClose: ModalOnClose;
}
