export type ModalOnClose = () => void;

export interface ModalProps {
  title: string;
  onClose: ModalOnClose;
  className?: string;
}
