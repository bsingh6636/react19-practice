import "./App.css";
import Transition from "./components/Transition";
import { USEACTION } from "./components/USEACTION";
import { ToDoList } from "./components/ToDoList";
import FetchPost from "./components/FetchPost";
import { Suspense, useState } from "react";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("ToDoList");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Transition":
        return <Transition />;
      case "USEACTION":
        return <USEACTION />;
      case "ToDoList":
        return <ToDoList />;
      case "FetchPost":
        return (
          <Suspense fallback={<h1>Loading...</h1>}>
            <FetchPost />
          </Suspense>
        );
      default:
        return <h2>Select a component to display.</h2>;
    }
  };

  return (
    <div className="App flex flex-col items-center mt-10">
      {/* Dropdown for selecting components */}
      <div className="dropdown mb-5">
        <label htmlFor="componentSelect" className="mr-2 font-medium">
          Choose Component:
        </label>
        <select
          id="componentSelect"
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="ToDoList">useOptimistic()</option>
          <option value="Transition">useTransition()</option>
          <option value="USEACTION">useActionState()</option>
          <option value="FetchPost"> use()</option>
        </select>
      </div>

      {/* Render the selected component */}
      <div className="component-container p-5 border rounded shadow-md w-3/4">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
