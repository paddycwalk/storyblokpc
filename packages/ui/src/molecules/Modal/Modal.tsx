'use client';

// import { useState } from 'react';
// import { Button } from '../../atoms';
import styles from './Modal.module.scss';

export interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  title?: string;
}

export const Modal = ({ children, open = false, title }: ModalProps) => {
  // const [open, setOpen] = useState<boolean>();

  return (
    <>
      <dialog open={open} className={styles.Modal}>
        <form method="dialog">
          <div className={styles.Modal_top}>{title}</div>
          {children}
          <div className={styles.Modal_bottom}></div>
        </form>
      </dialog>
    </>
  );
};
