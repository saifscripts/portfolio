export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-[100svh] overflow-hidden">{children}</div>;
}
