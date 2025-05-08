import { ERROR_MESSAGES, DEFAULT_ERROR_MESSAGE } from '@/constants/messages';
import { showError } from './toast';

function showErrorToast(status: number) {
  const fallback = ERROR_MESSAGES[status] || DEFAULT_ERROR_MESSAGE;
  return showError(fallback);
}

export default showErrorToast;
