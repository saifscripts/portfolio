import Navbar from '@/components/main/navbar';
import Background from '@/components/shared/background';
import React from 'react';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Background />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
