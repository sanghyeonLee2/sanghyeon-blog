import { File, ExternalFile } from './../types/domain/post';

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
