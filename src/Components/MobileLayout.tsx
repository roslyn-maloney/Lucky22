interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-[480px]">
      {children}
    </main>
  );
}
