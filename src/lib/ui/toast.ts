import { toast } from 'react-toastify';

export const showSuccess = (msg: string): void => {
  toast.success(msg, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const showError = (msg: string): void => {
  toast.error(msg, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
