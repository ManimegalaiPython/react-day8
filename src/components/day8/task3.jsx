import { useEffect, useState } from "react";

const Task21to30 = () => {
  /* ================= TASK 21 ================= */
  const [view21, setView21] = useState("card");
  const task21Items = ["Item A", "Item B", "Item C"];

  /* ================= TASK 22 ================= */
  const cards22 = ["A", "B", "C", "D"];

  /* ================= TASK 23–25 ================= */
  const allItems23 = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Veg" },
    { id: 3, name: "Banana", category: "Fruit" },
  ];
  const [category23, setCategory23] = useState("All");

  const filtered23 =
    category23 === "All"
      ? allItems23
      : allItems23.filter(i => i.category === category23);

  /* ================= TASK 26 ================= */
  const [list26, setList26] = useState([]);

  /* ================= TASK 27–28 ================= */
  const [loading27, setLoading27] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading27(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  /* ================= TASK 29 ================= */
  const [items29, setItems29] = useState([]);

  /* ================= TASK 30 ================= */
  const [show30, setShow30] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Tasks 21 – 30 </h1>

      {/* ---------- TASK 21 ---------- */}
      <h3>Task 21: Toggle Card / List View</h3>
      <button onClick={() => setView21(view21 === "card" ? "list" : "card")}>
        Toggle View
      </button>

      {view21 === "card" ? (
        <div style={{ border: "1px solid black", padding: "10px", width: "120px" }}>
          Card View
        </div>
      ) : (
        <ul>
          {task21Items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <hr />

      {/* ---------- TASK 22 ---------- */}
      <h3>Task 22: Total Cards Count</h3>
      <p>Total Cards: {cards22.length}</p>

      <hr />

      {/* ---------- TASK 23–25 ---------- */}
      <h3>Task 23–25: Filter, Active, Reset</h3>
      {["All", "Fruit", "Veg"].map(cat => (
        <button
          key={cat}
          onClick={() => setCategory23(cat)}
          style={{
            marginRight: "5px",
            background: category23 === cat ? "#373C7D" : "#ccc",
            color: "white",
          }}
        >
          {cat}
        </button>
      ))}
      <button onClick={() => setCategory23("All")}>Reset</button>

      {filtered23.map(item => (
        <p key={item.id}>
          {item.name} ({item.category})
        </p>
      ))}

      <hr />

      {/* ---------- TASK 26 ---------- */}
      <h3>Task 26: No Results Found</h3>

      <button onClick={() => setList26([])}>Make Empty</button>
      <button
        onClick={() => setList26(["Item 1", "Item 2"])}
        style={{ marginLeft: "5px" }}
      >
        Add Data
      </button>

      {list26.length === 0 ? (
        <p>No results found</p>
      ) : (
        list26.map((item, index) => <p key={index}>{item}</p>)
      )}

      <hr />

      {/* ---------- TASK 27–28 ---------- */}
      <h3>Task 27–28: Loading Placeholder</h3>
      {loading27 ? <p>Loading...</p> : <p>Content Loaded</p>}

      <hr />

      {/* ---------- TASK 29 ---------- */}
      <h3>Task 29: Add / Remove Items</h3>
      <button onClick={() => setItems29([...items29, "Item"])}>
        Add
      </button>
      <button onClick={() => setItems29(items29.slice(0, -1))}>
        Remove
      </button>

      {items29.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <hr />

      {/* ---------- TASK 30 ---------- */}
      <h3>Task 30: Animate Item</h3>
      <button onClick={() => setShow30(!show30)}>Toggle</button>

      {show30 && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "#373C7D",
            color: "white",
            animation: "fade 0.5s",
          }}
        >
          Animated Item
        </div>
      )}

      <style>
        {`
          @keyframes fade {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Task21to30;
