// Modal.tsx
import ReactDOM from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
}
