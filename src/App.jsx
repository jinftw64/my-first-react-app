import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Smith", age: 100 });
  const fullName = `${person.firstName} ${person.lastName}`;

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const handleFirstName = (e) => {
    const newPerson = { ...person, firstName: e.target.value };
    setPerson(newPerson);
  }

  const handleLastName = (e) => {
    const newPerson = { ...person, lastName: e.target.value };
    setPerson(newPerson);
  }

  return (
    <>
      <label>First name:</label>
      <input type='test' id='fname' name='fname'
        onChange={handleFirstName}
      />
      <label>Last name:</label>
      <input type='test' id='lname' name='lname'
        onChange={handleLastName}
      />
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default App
