import React, { useState } from "react";
import "./App.css";
import {
  calculateAverageAge,
  findOldestPerson,
  findYoungestPerson,
} from "./ageCalculator";


function App() {
  const [averageAge, setAverageAge] = useState(null); //this is set to null to store results of calculations
  const [oldestPerson, setOldestPerson] = useState(null);
  const [youngestPerson, setYoungestPerson] = useState(null);

  const people = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Carol", age: 30 },
    { name: "Dave", age: 35 },
  ];

  // Functions to handle button clicks and display results
  const handleAverageAge = () => {
    setAverageAge(calculateAverageAge(people));
  };

  const handleOldestPerson = () => {
    setOldestPerson(findOldestPerson(people));
  };

  const handleYoungestPerson = () => {
    setYoungestPerson(findYoungestPerson(people));
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>

      <table
        border="1"
        style={{ margin: "20px auto", textAlign: "center", width: "50%" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          onClick={handleAverageAge}
          style={{ margin: "10px", padding: "10px" }}
        >
          Calculate Average Age
        </button>
        <button
          onClick={handleOldestPerson}
          style={{ margin: "10px", padding: "10px" }}
        >
          Find Oldest Person
        </button>
        <button
          onClick={handleYoungestPerson}
          style={{ margin: "10px", padding: "10px" }}
        >
          Find Youngest Person
        </button>
      </div>

      {averageAge !== null && (
        <p>
          Average Age: <strong>{averageAge}</strong>
        </p>
      )}
      {oldestPerson && (
        <p>
          Oldest Person:{" "}
          <strong>
            {oldestPerson.name} ({oldestPerson.age} years old)
          </strong>
        </p>
      )}
      {youngestPerson && (
        <p>
          Youngest Person:{" "}
          <strong>
            {youngestPerson.name} ({youngestPerson.age} years old)
          </strong>
        </p>
      )}
    </div>
  );
}

export default App;
