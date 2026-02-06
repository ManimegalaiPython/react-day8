import { useState, useEffect } from "react";
import "./task5.css";

function UiTasks5() {
  // ---------- Task 41 & 42: Render cards from array of objects ----------
  const initialCards = [
    { id: 1, title: "Card One", description: "This is card one." },
    { id: 2, title: "Card Two", description: "This is card two." },
    { id: 3, title: "Card Three", description: "This is card three." },
  ];

  const [cards, setCards] = useState(initialCards);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const Card = ({ card, onDelete, onSelect, isSelected }) => (
    <li
      className={`card-item ${isSelected ? "selected-card" : ""}`}
      onClick={() => onSelect(card.id)}
    >
      <div>
        <h4>{card.title}</h4>
        <p>{card.description}</p>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onDelete(card.id); }}>
        Delete
      </button>
    </li>
  );

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      const newCards = cards.filter(c => c.id !== id);
      setCards(newCards);
    }
  };

  const handleSelect = (id) => {
    setSelectedCardId(id);
  };

  // ---------- Task 46–49: Local Storage ----------
  const [storageData, setStorageData] = useState(() => {
    const stored = localStorage.getItem("myData");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(storageData));
  }, [storageData]);

  const addStorageItem = () => {
    const newItem = `Item ${storageData.length + 1}`;
    setStorageData([...storageData, newItem]);
  };

  const clearStorage = () => {
    setStorageData([]);
    localStorage.removeItem("myData");
  };

  // ---------- Task 50: List + Search + Filter ----------
  const initialList = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];
  const [searchText, setSearchText] = useState("");
  const [filterLetter, setFilterLetter] = useState("");

  const filteredList = initialList.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase()) &&
    (filterLetter ? item.toLowerCase().startsWith(filterLetter.toLowerCase()) : true)
  );

  return (
    <div className="ui5-container">

      {/* Task 41–45: Cards with delete & select */}
      <div className="task-card">
        <h3>Task 41–45: Render & Manage Cards</h3>
        <ul className="card-list">
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              onDelete={handleDelete}
              onSelect={handleSelect}
              isSelected={card.id === selectedCardId}
            />
          ))}
        </ul>
        {cards.length === 0 && <p>No cards available.</p>}
      </div>

      {/* Task 46–49: Local Storage */}
      <div className="task-card">
        <h3>Task 46–49: Local Storage</h3>
        <p>Stored Data:</p>
        <ul>
          {storageData.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
        <button onClick={addStorageItem}>Add Item</button>
        <button onClick={clearStorage}>Clear Storage</button>
      </div>

      {/* Task 50: List + Search + Filter */}
      <div className="task-card">
        <h3>Task 50: List + Search + Filter</h3>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by first letter..."
          value={filterLetter}
          onChange={e => setFilterLetter(e.target.value)}
        />
        <ul>
          {filteredList.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p>Filtered Count: <strong>{filteredList.length}</strong></p>
      </div>

    </div>
  );
}

export default UiTasks5;
