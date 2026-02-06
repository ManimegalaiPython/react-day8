import { useState, useEffect } from "react";
import "./task2.css";

function UiTasks2() {
  // ---------- Task 11 ----------
  const [gridView, setGridView] = useState(true);
  const gridItems = ["Apple", "Banana", "Cherry", "Date"];

  // ---------- Task 12 & 13 ----------
  const [activeTab, setActiveTab] = useState("Tab1");

  // ---------- Task 14 & 15 ----------
  const [showTop, setShowTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------- Task 16–20 ----------
  const [itemInput, setItemInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (itemInput.trim() !== "") {
      setItems([...items, itemInput]);
      setItemInput("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    const newValue = prompt("Edit item:", items[index]);
    if (newValue && newValue.trim() !== "") {
      const newItems = [...items];
      newItems[index] = newValue;
      setItems(newItems);
    }
  };

  return (
    <div className="ui2-container">

      {/* Task 11 */}
      <div className="task11-card">
        <h3>Task 11: Toggle Grid/List View</h3>
        <button onClick={() => setGridView(!gridView)}>
          Switch to {gridView ? "List" : "Grid"} View
        </button>
        <div className={gridView ? "task11-grid" : "task11-list"}>
          {gridItems.map((item, idx) => (
            <div key={idx} className="task11-item">{item}</div>
          ))}
        </div>
      </div>

      {/* Task 12 & 13 */}
      <div className="task12-card">
        <h3>Task 12 & 13: Tabs</h3>
        <div className="task12-tabs">
          {["Tab1", "Tab2", "Tab3"].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? "tab-active" : "tab-btn"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="task12-content">
          {activeTab === "Tab1" && <p>Content for Tab 1</p>}
          {activeTab === "Tab2" && <p>Content for Tab 2</p>}
          {activeTab === "Tab3" && <p>Content for Tab 3</p>}
        </div>
      </div>

      {/* Task 14 & 15 */}
      <div className={`task14-card ${scrolled ? "scrolled-header" : ""}`}>
        <h3>Task 14 & 15: Back to Top & Header Scroll Style</h3>
        <p>Scroll down to see the Back to Top button and header change.</p>
        {showTop && (
          <button className="back-top" onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}>
            Back to Top
          </button>
        )}
      </div>

      {/* Task 16 */}
      <div className="task16-card">
        <h3>Task 16: Add Items to List</h3>
        <input
          type="text"
          value={itemInput}
          placeholder="Enter item..."
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* Task 17 */}
      <div className="task17-card">
        <h3>Task 17: Remove Selected Item</h3>
        <ul className="task17-list">
          {items.map((item, idx) => (
            <li key={idx}>
              {item} <button onClick={() => removeItem(idx)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Task 18 */}
      <div className="task18-card">
        <h3>Task 18: Edit an Existing Item</h3>
        <ul className="task18-list">
          {items.map((item, idx) => (
            <li key={idx}>
              {item} <button onClick={() => editItem(idx)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Task 19 */}
      <div className="task19-card">
        <h3>Task 19: Total Number of Items</h3>
        <p>Total Items: <strong>{items.length}</strong></p>
      </div>

      {/* Task 20 */}
      <div className="task20-card">
        <h3>Task 20: Show Message When List is Empty</h3>
        {items.length === 0 ? (
          <p className="empty-msg">The list is currently empty</p>
        ) : (
          <ul className="task20-list">{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
        )}
      </div>

    </div>
  );
}

export default UiTasks2;
