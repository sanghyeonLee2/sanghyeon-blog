'use client';

import useGetGiscus from '@/hooks/useGetGiscus';

export default function Giscus() {
  const giscusRef = useGetGiscus();
  return (
    <section ref={giscusRef} className="px-content min-h-[28.125rem] transition-all duration-300" />
  );
}
