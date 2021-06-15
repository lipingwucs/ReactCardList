import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);   //intial status, load all data
  return(
    <main>
      <section>
        <h3> {people.length} birthdays today</h3>
        <List people = {people} />
    
        <button onClick = {() =>setPeople([])}> Clear All </button>
        <button onClick = {() =>setPeople([data])}> Load All </button>
      </section>
    </main>
  );
}

export default App;
