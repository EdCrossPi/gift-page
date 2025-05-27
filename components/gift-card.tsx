"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { paymentLinks, pixKey } from "../data/paymentLinks";

type GiftCardProps = {
  title: string;
  price: number;
  imageUrl: string;
};

// Modal via Portal
function Modal({ children }: { children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
}

export default function GiftCard({ title, price, imageUrl }: GiftCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="gift-card">
      <img src={imageUrl} alt={title} className="gift-image" />
      <h3>{title}</h3>
      <p>R$ {price.toFixed(2).replace(".", ",")}</p>
      <button
        className="presentear-btn"
        onClick={() => setShowModal(true)}
        onMouseMove={(e) => {
          const btn = e.currentTarget;
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          btn.style.setProperty("--mouse-x", `${x}px`);
          btn.style.setProperty("--mouse-y", `${y}px`);
        }}
      >
        Presentear
      </button>

      {showModal && (
        <Modal>
          <h4>Escolha o método de pagamento</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <button
              style={{ flex: 1 }}
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(pixKey);
                  alert(
                    "Chave PIX (e-mail) copiada para a área de transferência!"
                  );
                } catch {
                  alert("Não foi possível copiar a chave PIX.");
                }
                setShowModal(false);
              }}
              className="presentear-btn"
            >
              PIX
            </button>
            <button
              style={{ flex: 1 }}
              onClick={() => {
                const link = paymentLinks[price];
                if (link) {
                  window.open(link, "_blank", "noopener,noreferrer");
                } else {
                  alert("Link de pagamento não encontrado para este valor.");
                }
                setShowModal(false);
              }}
              className="presentear-btn"
            >
              Crédito
            </button>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="presentear-btn"
          >
            Cancelar
          </button>
        </Modal>
      )}
    </div>
  );
}
