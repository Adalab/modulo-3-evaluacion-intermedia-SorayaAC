import '../styles/App.scss';
import { useState } from "react";
import pubs from "../data/pubs.json";

function App() {
const [data , setData] = useState(pubs);

const htmlPubsList = data.map((onePub , index) => { 
  if (onePub.openOnWeekdays === true){
           onePub.openOnWeekdays = 'Sí'
         }else{
          onePub.openOnWeekdays = 'No'
         }
         if (onePub.openOnWeekend === true){
          onePub.openOnWeekend = 'Sí'
        }else{
         onePub.openOnWeekend = 'No'
        }
         
         
        return (
        <li key={index}>
        <p><label>#{index} </label> {onePub.name} </p>
        <p><label>Abierto entre semana:</label> {onePub.openOnWeekdays}</p>
        <p><label>Abierto el fin de semana:</label> {onePub.openOnWeekend} </p>
        </li>)
        
      });

  return (
    <div>
       <header>
       <h1>Mis clubs</h1>
       </header>
     <main>
       <ul>
       {htmlPubsList}
       </ul>
     </main>
    </div>
  );
}

export default App;
