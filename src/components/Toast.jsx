import React, { useEffect } from 'react';
import classes from './Toast.module.scss';

const Toast = ({ message, type, visible, onClose }) => {

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    visible && (
      <div className={`${classes.toast} ${classes[type]}`}>
        <p>{message}</p>
      </div>
    )
  );
};

export default Toast;