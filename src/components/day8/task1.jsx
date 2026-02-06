import { useEffect, useState } from "react";

const Task1to10 = () => {
  /* ================= TASK 1 ================= */
  const [sidebarOpen1, setSidebarOpen1] = useState(false);

  /* ================= TASK 2 ================= */
  const [activeMenu2, setActiveMenu2] = useState("Home");

  /* ================= TASK 3 ================= */
  const [submenuOpen3, setSubmenuOpen3] = useState(false);

  /* ================= TASK 4 ================= */
  const [showHeader4, setShowHeader4] = useState(true);

  /* ================= TASK 5 ================= */
  const [showFooter5, setShowFooter5] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setShowFooter5(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= TASK 6–7 ================= */
  const [showNotify6, setShowNotify6] = useState(false);

  useEffect(() => {
    if (showNotify6) {
      const timer = setTimeout(() => setShowNotify6(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotify6]);

  /* ================= TASK 8 ================= */
  const [fabClicked8, setFabClicked8] = useState(false);

  /* ================= TASK 9–10 ================= */
  const [showTooltip9, setShowTooltip9] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "150vh" }}>
      <h1>Tasks 1 – 10</h1>

      {/* ---------- TASK 1 ---------- */}
      <h3>1. Collapsible Sidebar</h3>
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
      <h3>2. Active Sidebar Menu</h3>
      {["Home", "About", "Contact"].map(menu => (
        <p
          key={menu}
          onClick={() => setActiveMenu2(menu)}
          style={{
            cursor: "pointer",
            fontWeight: activeMenu2 === menu ? "bold" : "normal",
            color: activeMenu2 === menu ? "#373C7D" : "black",
          }}
        >
          {menu}
        </p>
      ))}

      <hr />

      {/* ---------- TASK 3 ---------- */}
      <h3>3. Expand / Collapse Submenu</h3>
      <button onClick={() => setSubmenuOpen3(!submenuOpen3)}>
        Toggle Submenu
      </button>

      {submenuOpen3 && (
        <ul>
          <li>Sub Item 1</li>
          <li>Sub Item 2</li>
        </ul>
      )}

      <hr />

      {/* ---------- TASK 4 ---------- */}
      <h3>4. Toggle Header Visibility</h3>
      <button onClick={() => setShowHeader4(!showHeader4)}>
        Toggle Header
      </button>

      {showHeader4 && <h4>This is Header</h4>}

      <hr />

      {/* ---------- TASK 5 ---------- */}
      <h3>5. Sticky Footer on Scroll</h3>
      {showFooter5 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "#373C7D",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Sticky Footer
        </div>
      )}

      <hr />

      {/* ---------- TASK 6–7 ---------- */}
      <h3>6–7. Notification Banner</h3>
      <button onClick={() => setShowNotify6(true)}>
        Show Notification
      </button>

      {showNotify6 && (
        <div style={{ background: "#E8EDF2", padding: "10px", marginTop: "10px" }}>
          Notification Message
        </div>
      )}

      <hr />

      {/* ---------- TASK 8 ---------- */}
      <h3>8. Floating Action Button</h3>
      <button
        onClick={() => setFabClicked8(true)}
        style={{
          position: "fixed",
          bottom: "70px",
          right: "20px",
          borderRadius: "50%",
          padding: "15px",
          background: "#373C7D",
          color: "white",
        }}
      >
        +
      </button>

      {fabClicked8 && <p>FAB Clicked</p>}

      <hr />

      {/* ---------- TASK 9–10 ---------- */}
      <h3>9–10. Tooltip on Hover</h3>
      <span
        onMouseEnter={() => setShowTooltip9(true)}
        onMouseLeave={() => setShowTooltip9(false)}
        style={{ cursor: "pointer" }}
      >
        ℹ️
      </span>

      {showTooltip9 && (
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
    </div>
  );
};

export default Task1to10;
