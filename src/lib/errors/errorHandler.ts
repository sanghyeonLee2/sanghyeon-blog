import { isAxiosError } from 'axios';
import { MESSAGES } from '@/constants/messages';
import { showError } from '../ui/toast';

function errorHandler(error: unknown) {
  if (!isAxiosError(error)) {
    return showError(MESSAGES.ERROR.UNKNOWN);
  }

  const status = error.response?.status;
  const message = error.response?.data?.message;

  switch (status) {
    case 400:
      return showError(message || MESSAGES.ERROR.BAD_REQUEST);
    case 401:
      return showError(MESSAGES.ERROR.UNAUTHORIZED);
    case 403:
      return showError(MESSAGES.ERROR.FORBIDDEN);
    case 404:
      return showError(MESSAGES.ERROR.NOT_FOUND);
    case 500:
      return showError(MESSAGES.ERROR.SERVER);
    default:
      return showError(message || MESSAGES.ERROR.DEFAULT);
  }
}

export default errorHandler;
