"use client";

import Script from "next/script";
import GiftCard from "../components/gift-card";
import { presentes } from "../data/presentes";
import { pixKey } from "../data/paymentLinks";

export default function Home() {
  return (
    <>
      {/* Script do FontAwesome */}
      <Script
        src="https://kit.fontawesome.com/7b12bcc245.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Navbar fixa */}
      <nav className="nav-bg">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          A&E
        </label>
        <ul className="text">
          <li>
            <a href="https://wedding-eduebia.vercel.app/">Página Principal</a>
          </li>
        </ul>
      </nav>

      <div className="all-sections">
        {/* Seção hero */}
        <section className="hero">
          <div className="hero-overlay">
            <img
              src="/gift-bg.jpg"
              alt="Fundo da Seção Hero"
              className="bg-img"
            />
            <h1 style={{ color: "white" }}>
              Bem-vindos <br />à nossa lista
            </h1>
            <a
              href="#presentes"
              className="cta-button"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("presentes");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Ver Presentes
            </a>
          </div>
        </section>

        {/* Seção presentes - adicionar margin-top para navbar fixa */}

        <section id="presentes" className="cards-section">
          <div className="gift-card">
            <img
              src="/presentes/pix.jpg"
              alt="Chave Pix"
              className="gift-image"
            />
            <h3>
              Pix do noivo (porque se for da noiva, ela gasta tudo na
              &rsquo;FARM&rsquo;acia)
            </h3>

            <button
              className="presentear-btn"
              onClick={() => {
                navigator.clipboard.writeText(pixKey);
                alert("Chave Pix copiada!");
              }}
            >
              Copiar Chave Pix
            </button>
          </div>
          {presentes.map((p) => (
            <GiftCard key={p.id} {...p} />
          ))}
        </section>
      </div>
    </>
  );
}
