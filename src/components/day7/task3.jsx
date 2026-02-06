import { useState } from "react";
import "./task3.css";

function UiTasks3() {
  // ---------- Task 21: Filter list items ----------
  const initialList = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
  const [filterText, setFilterText] = useState("");

  const filteredList = initialList.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  // ---------- Task 22 & 23: Sort list & toggle order ----------
  const [sortedList, setSortedList] = useState([...initialList]);
  const [isAscending, setIsAscending] = useState(true);

  const handleSortToggle = () => {
    const newOrder = !isAscending;
    setIsAscending(newOrder);
    const newList = [...sortedList].sort((a, b) =>
      newOrder ? a.localeCompare(b) : b.localeCompare(a)
    );
    setSortedList(newList);
  };

  // ---------- Task 24: Count filtered items ----------
  const filteredCount = filteredList.length;

  // ---------- Task 25: Reset list ----------
  const handleReset = () => {
    setFilterText("");
    setSortedList([...initialList]);
    setIsAscending(true);
  };

  // ---------- Task 26-30: Checkbox list ----------
  const [checkboxList] = useState(["Option 1", "Option 2", "Option 3", "Option 4"]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    setSelectedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const handleSelectAll = () => setSelectedItems([...checkboxList]);
  const handleClearAll = () => setSelectedItems([]);

  return (
    <div className="ui3-container">

      {/* Task 21 */}
      <div className="task-card">
        <h3>Task 21: Filter List</h3>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <ul>
          {filteredList.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      {/* Task 22 & 23 */}
      <div className="task-card">
        <h3>Task 22 & 23: Sort List & Toggle Order</h3>
        <button onClick={handleSortToggle}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
        <ul>
          {sortedList.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      {/* Task 24 */}
      <div className="task-card">
        <h3>Task 24: Count Filtered Items</h3>
        <p>Filtered Count: <strong>{filteredCount}</strong></p>
      </div>

      {/* Task 25 */}
      <div className="task-card">
        <h3>Task 25: Reset List</h3><br></br>
         <h6>It will reset previous task</h6>
       <button onClick={handleReset}>Reset List</button>
      </div>

      {/* Task 26-30 */}
      <div className="task-card">
        <h3>Task 26-30: Checkbox List</h3>
        <ul>
          {checkboxList.map(item => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />{" "}
                {item}
              </label>
            </li>
          ))}
        </ul>
        <p>Selected Count: <strong>{selectedItems.length}</strong></p>
        <button onClick={handleSelectAll}>Select All</button>
        <button onClick={handleClearAll}>Clear All</button>
        <button disabled={selectedItems.length === 0}>Action Button</button>
      </div>

    </div>
  );
}

export default UiTasks3;
