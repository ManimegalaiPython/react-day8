import { useEffect, useRef, useState } from "react";

const UiTasks_Dropdown_Modal = () => {
  /* ================= TASK 1 ================= */
  const [sidebarOpen1, setSidebarOpen1] = useState(false);

  /* ================= TASK 2 ================= */
  const [activeMenu2, setActiveMenu2] = useState("Home");

  /* ================= TASK 3–4 ================= */
  const [openDropdown, setOpenDropdown] = useState(null);

  /* ================= TASK 5 ================= */
  const [showTooltip5, setShowTooltip5] = useState(false);

  /* ================= TASK 6 ================= */
  const [message6, setMessage6] = useState("");

  /* ================= TASK 7 ================= */
  const [openSections7, setOpenSections7] = useState([]);

  const toggleSection7 = (id) => {
    setOpenSections7((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  /* ================= TASK 8–10 ================= */
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  /* Close modal on outside click (Task 9) */
  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showModal]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>UI Interaction Tasks (1–10)</h2>

      {/* ---------- TASK 1 ---------- */}
      <h3>1. Toggle Sidebar</h3>
      <button onClick={() => setSidebarOpen1(!sidebarOpen1)}>
        Toggle Sidebar
      </button>

      {sidebarOpen1 && (
        <div style={{ width: "200px", background: "#373C7D", color: "white", padding: "10px" }}>
          Sidebar Content
        </div>
      )}

      <hr />

      {/* ---------- TASK 2 ---------- */}
      <h3>2. Highlight Selected Menu</h3>
      {["Home", "About", "Contact"].map((item) => (
        <p
          key={item}
          onClick={() => setActiveMenu2(item)}
          style={{
            cursor: "pointer",
            fontWeight: activeMenu2 === item ? "bold" : "normal",
            color: activeMenu2 === item ? "#373C7D" : "black",
          }}
        >
          {item}
        </p>
      ))}

      <hr />

      {/* ---------- TASK 3–4 ---------- */}
      <h3>3–4. Dropdown Menu</h3>
      {["Menu 1", "Menu 2"].map((menu) => (
        <div key={menu} style={{ marginBottom: "5px" }}>
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === menu ? null : menu)
            }
          >
            {menu}
          </button>

          {openDropdown === menu && (
            <ul>
              <li>Option A</li>
              <li>Option B</li>
            </ul>
          )}
        </div>
      ))}

      <hr />

      {/* ---------- TASK 5 ---------- */}
      <h3>5. Tooltip on Hover</h3>
      <span
        onMouseEnter={() => setShowTooltip5(true)}
        onMouseLeave={() => setShowTooltip5(false)}
        style={{ cursor: "pointer" }}
      >
        ℹ️ Hover Me
      </span>

      {showTooltip5 && (
        <span
          style={{
            marginLeft: "10px",
            background: "black",
            color: "white",
            padding: "5px",
          }}
        >
          Tooltip Text
        </span>
      )}

      <hr />

      {/* ---------- TASK 6 ---------- */}
      <h3>6. Mouse Enter & Leave Message</h3>
      <div
        onMouseEnter={() => setMessage6("Mouse Entered")}
        onMouseLeave={() => setMessage6("Mouse Left")}
        style={{
          width: "150px",
          height: "80px",
          border: "1px solid black",
        }}
      />
      <p>{message6}</p>

      <hr />

      {/* ---------- TASK 7 ---------- */}
      <h3>7. Accordion (Multiple Open)</h3>
      {[1, 2, 3].map((num) => (
        <div key={num}>
          <button onClick={() => toggleSection7(num)}>
            Section {num}
          </button>
          {openSections7.includes(num) && (
            <p>Content of Section {num}</p>
          )}
        </div>
      ))}

      <hr />

      {/* ---------- TASK 8–10 ---------- */}
      <h3>8–10. Modal</h3>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "auto", // disables background click
          }}
        >
          <div
            ref={modalRef}
            style={{ background: "white", padding: "20px" }}
          >
            <p>Modal Content</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UiTasks_Dropdown_Modal;
