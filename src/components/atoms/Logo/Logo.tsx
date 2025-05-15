import { SITE_METADATA } from '@/constants/metaData';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={ROUTES.HOME} className="hover:opacity-80">
      <h1 className="text-2xl font-bold tracking-[0.05em]">{SITE_METADATA.SITE_NAME}</h1>
    </Link>
  );
}
