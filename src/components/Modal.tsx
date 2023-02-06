import React, { useState, useRef, useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  id: string;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, closeModal, id, children }: ModalProps) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <div>
        <button>Open Modal</button>
        {isOpen && (
          <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed top-0 left-0 bottom-0 right-0 bg-white p-4"
          >
            <h2 id="modal-title">Modal Title</h2>
            <p>Modal Content</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
