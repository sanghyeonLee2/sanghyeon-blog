import { ERROR_MESSAGES, DEFAULT_ERROR_MESSAGE } from '@/constants/messages';
import { CustomError } from '@/types/api/errors';

export function createCustomError(status: number, rawMessage?: string): CustomError {
  return {
    status,
    message: ERROR_MESSAGES[status] || DEFAULT_ERROR_MESSAGE,
    rawMessage,
  };
}
