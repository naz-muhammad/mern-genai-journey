import React from "react";
import Card from "./components/card/Card";
import jobs from "./data/jobs";
import "./App.css";

function App() {
  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;