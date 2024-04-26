import React from "react";
import Navbar from "./layout/navbar";
import Dashboard from "./pages/Dashboard";
import RightSideComponent from "./pages/RightSideComponent";

function App() {
  return (
    <div className="bg-slate-200 flex flex-row">
      <Navbar />
      <Dashboard />
      <RightSideComponent />
    </div>
  );
}

export default App;
