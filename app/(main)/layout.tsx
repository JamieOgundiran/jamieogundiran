export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="page-shell flex-1 pb-28 pt-8 max-md:pb-20">{children}</main>
  );
}
