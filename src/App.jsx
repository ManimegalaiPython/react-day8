import React from "react";

import SidebarTasks from "./components/day8/task1";     // Tasks 1–10
import Tasks11To20 from "./components/day8/task2";     // Tasks 11–20
import Tasks21To30 from "./components/day8/task3";     // Tasks 21–30
import Tasks31To40 from "./components/day8/task4";     // Tasks 31–40
import Tasks41To50 from "./components/day8/task5";     // Tasks 41–50

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        React UI Interaction Tasks (Day 8)
      </h1>

      <SidebarTasks />
      <Tasks11To20 />
      <Tasks21To30 />
      <Tasks31To40 />
      <Tasks41To50 />
    </div>
  );
}

export default App;


// import UiTasks_Dropdown_Modal from "./components/day7/task1";
// import UiTasks2 from "./components/day7/task2";
// import UiTasks3 from "./components/day7/task3";
// import UiTasks4 from "./components/day7/task4";
// import UiTasks5 from "./components/day7/task5";




// function App() {
//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>
//         React UI Interaction Tasks
//       </h2>
//       <UiTasks_Dropdown_Modal />
//       <UiTasks2 />
//       <UiTasks3 />
//       <UiTasks4 />
//       <UiTasks5 />

//     </div>
//   );
// }

// export default App;




