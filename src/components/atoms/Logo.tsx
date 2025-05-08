// components/atoms/Logo.tsx
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={ROUTES.HOME} className="text-xl font-bold text-primary">
      Sanghyeon
    </Link>
  );
}
