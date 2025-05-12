import type { CustomError } from '@/types/api/errors';
import { File, ExternalFile } from './../types/domain/post';

export function isCustomError(error: unknown): error is CustomError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as { status?: unknown }).status === 'number'
  );
}

export function isCritical(error: unknown): boolean {
  if (!isCustomError(error)) return true;

  const status = error.status;
  return status === 500 || status === 403;
}

export function getCoverUrl(coverFile: (File | ExternalFile)[]): string | null {
  if (coverFile.length === 0) {
    return null;
  }
  const firstCoverFile = coverFile.at(0);
  if (firstCoverFile?.type === 'external') {
    return (firstCoverFile as ExternalFile).external.url;
  }
  if (firstCoverFile?.type === 'file') {
    return (firstCoverFile as File).file.url;
  }

  return null;
}
