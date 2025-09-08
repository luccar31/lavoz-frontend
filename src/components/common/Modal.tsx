"use client";

import {ReactNode, useEffect, useState} from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-landing-background/80 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-landing-surface border border-landing-surface/50 p-8 max-w-2xl w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal lo cierre
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-landing-text-secondary hover:text-landing-text-primary">
          <X size={24} />
          <span className="sr-only">Cerrar modal</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}