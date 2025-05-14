import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={ROUTES.HOME} className="hover:opacity-80">
      <h1 className="text-3xl font-mono font-bold italic tracking-[0.05em]">SH.LOG</h1>
    </Link>
  );
}
