import "../styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de Presentes",
  description: "Lista de presentes de casamento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body className="invite-page nav-invite">{children}</body>
    </html>
  );
}
