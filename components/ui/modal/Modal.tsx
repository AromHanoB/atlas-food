import { useEffect } from "react";

import styles from "./Modal.module.css";
import type { ModalProps } from "./Modal.types";

export function Modal({
  isOpen,
  title,
  children,
  footer,
  onClose,
}: ModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <h2>{title}</h2>

          <button
            className={styles.close}
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <main className={styles.body}>
          {children}
        </main>

        {footer && (
          <footer className={styles.footer}>
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}