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
    <>
      <html lang="pt-br">
        <head />
        <body className="invite-page nav-invite">{children}</body>
        <link rel="icon" href="/wedding-rings.png" type="image/x-icon" />
      </html>
      <footer>
        <h2>Feito pelo noivo 🤎</h2> <br />
        <div className="text">
          Foto por:{" "}
          <a href="https://www.instagram.com/orafaelmaiaa/" className="text">
            @orafaelmaiaa
          </a>
        </div>
      </footer>
    </>
  );
}
