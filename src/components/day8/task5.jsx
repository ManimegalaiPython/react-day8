import { useState, useEffect } from "react";

const Task41to50 = () => {
  /* ================= TASK 41–43 ================= */
  const [activeTab, setActiveTab] = useState("Home");

  /* ================= TASK 44–45 ================= */
  const [step, setStep] = useState(1);

  /* ================= TASK 46–47 ================= */
  const [showPopup, setShowPopup] = useState(false);

  /* ================= TASK 48–49 ================= */
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ================= TASK 50 ================= */
  const resetUI = () => {
    setActiveTab("Home");
    setStep(1);
    setShowPopup(false);
    setLoading(false);
    setSuccess(false);
  };

  /* ================= SIDEBAR ================= */
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Tasks 41 – 50</h1>

      {/* ---------- TASK 41–43 ---------- */}
      <h3>41–43. Tabs with Active Underline & Content</h3>
      <div>
        {["Home", "Profile", "Settings"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              marginRight: "10px",
              borderBottom:
                activeTab === tab ? "3px solid #373C7D" : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <p>
        {activeTab === "Home" && "Home Content"}
        {activeTab === "Profile" && "Profile Content"}
        {activeTab === "Settings" && "Settings Content"}
      </p>

      <hr />

      {/* ---------- TASK 44–45 ---------- */}
      <h3>44–45. Step Indicator</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {[1, 2, 3].map(num => (
          <div
            key={num}
            style={{
              padding: "10px",
              borderRadius: "50%",
              background: step >= num ? "#373C7D" : "#ccc",
              color: "white",
            }}
          >
            {num}
          </div>
        ))}
      </div>

      <button onClick={() => setStep(step + 1)} disabled={step === 3}>
        Next Step
      </button>

      <hr />

      {/* ---------- TASK 46–47 ---------- */}
      <h3>46–47. Confirmation Popup</h3>
      <button onClick={() => setShowPopup(true)}>Delete</button>

      {showPopup && (
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <p>Are you sure?</p>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      )}

      <hr />

      {/* ---------- TASK 48–49 ---------- */}
      <h3>48–49. Spinner → Success</h3>
      <button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setSuccess(true);
          }, 2000);
        }}
      >
        Submit
      </button>

      {loading && <p>Loading...</p>}
      {success && <p style={{ color: "green" }}>Success!</p>}

      <hr />

      {/* ---------- TASK 50 ---------- */}
      <h3>50. Reset UI</h3>
      <button onClick={resetUI}>Reset All</button>

      <hr />

      {/* ---------- COLLAPSIBLE SIDEBAR ---------- */}
      <h3>Collapsible Sidebar</h3>
      <button onClick={() => setOpenSidebar(!openSidebar)}>
        Toggle Sidebar
      </button>

      {openSidebar && (
        <div
          style={{
            width: "200px",
            height: "100px",
            background: "#373C7D",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Sidebar Content
        </div>
      )}
    </div>
  );
};

export default Task41to50;
