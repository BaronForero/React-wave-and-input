import { useState } from 'react';
import './App.css';


function App() {

let [vorname, setVorname] = useState("")
let [nachname, setNachname] = useState("")
let [email, setEmail] = useState("")

const change1 = (event) =>{
  setVorname(event.target.value)
}
const change2 = event =>{
  setNachname(event.target.value)
}

const change3 = event =>{
  setEmail(event.target.value)
}

  return (

    <div className="App">
      <input type="text" placeholder='Vorname' onChange={change1} value={vorname} />
      <input type="text" placeholder='Nachname'onChange={change2} value={nachname} />
      <input type="text" placeholder='E-mail'onChange={change3} value={email}/>
      <div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
      </div>
      <div> 
      <p>First name:  {vorname}</p>
      <p>Last name:  {nachname}</p>
      <p>E-mail:  {email}</p>
      </div>
      
    </div>
  );
}

export default App;
