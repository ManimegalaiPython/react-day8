import { useEffect, useRef, useState } from "react";

const Task11to20 = () => {
  /* ================= TASK 11–14 ================= */
  const [open11, setOpen11] = useState(false);
  const dropdownRef = useRef();

  /* Close dropdown on outside click (Task 12) */
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen11(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* ================= TASK 15 ================= */
  const [overlay15, setOverlay15] = useState(false);

  /* ================= TASK 16–20 ================= */
  const cards16 = [
    { id: 1, title: "Card One", desc: "Details of Card One" },
    { id: 2, title: "Card Two", desc: "Details of Card Two" },
    { id: 3, title: "Card Three", desc: "Details of Card Three" },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Tasks 11 – 20</h1>

      {/* ---------- TASK 11–14 ---------- */}
      <h3>11–14. Dropdown Menu</h3>

      <div ref={dropdownRef} style={{ position: "relative", width: "200px" }}>
        <button onClick={() => setOpen11(!open11)}>
          Menu {open11 ? "▲" : "▼"}
        </button>

        {open11 && (
          <ul
            style={{
              listStyle: "none",
              padding: "10px",
              border: "1px solid #ccc",
              position: "absolute",
              width: "100%",
              background: "white",
            }}
          >
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>

      <p>
        Icon State: {open11 ? "🔓 Open Icon" : "🔒 Closed Icon"}
      </p>

      <hr />

      {/* ---------- TASK 15 ---------- */}
      <h3>15. Disable Background with Overlay</h3>
      <button onClick={() => setOverlay15(true)}>Open Overlay</button>

      {overlay15 && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "white", padding: "20px" }}>
            <p>Overlay Active</p>
            <button onClick={() => setOverlay15(false)}>Close</button>
          </div>
        </div>
      )}

      <hr />

      {/* ---------- TASK 16–20 ---------- */}
      <h3>16–20. Card Selection</h3>

      <div style={{ display: "flex", gap: "10px" }}>
        {cards16.map(card => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "120px",
              cursor: "pointer",
              background:
                selectedCard?.id === card.id ? "#373C7D" : "white",
              color:
                selectedCard?.id === card.id ? "white" : "black",
            }}
          >
            {card.title}
          </div>
        ))}
      </div>

      {/* ---------- TASK 20 ---------- */}
      {selectedCard && (
        <div style={{ marginTop: "15px" }}>
          <h4>Selected Card Details</h4>
          <p>{selectedCard.desc}</p>
        </div>
      )}
    </div>
  );
};

export default Task11to20;
