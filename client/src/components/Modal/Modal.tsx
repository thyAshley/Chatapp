import React from 'react';

import './Modal.scss';

const Modal: React.FC<{ children: any; click: () => void }> = ({
  children,
  click,
}) => {
  const findByKey = (name: string) => {
    return children.filter((child: { key: string }) => child.key === name);
  };
  const closeModal = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    if ((e.target as HTMLInputElement).classList.contains('modal-close')) {
      click();
    }
  };
  return (
    <div className="modal-mask ">
      <div className="modal-wrapper modal-close" onClick={closeModal}>
        <div className="modal-container">
          <div className="modal-header">{findByKey('header')}</div>
          <div className="modal-body">{findByKey('body')}</div>
          <div className="modal-footer">
            <button className="btn-modal modal-close" onClick={closeModal}>
              CLOSE
            </button>
            {findByKey('footer')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
