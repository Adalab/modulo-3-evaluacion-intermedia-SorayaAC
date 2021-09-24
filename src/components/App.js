import '../styles/App.scss';
import { useState } from "react";
import pubs from "../data/pubs.json";

function App() {
const [data , setData] = useState(pubs);

const [newName, setNewName] = useState("");
const [newOpenWeek, setNewOpenWeek] = useState("true");
const [newOpenWeekend, setNewOpenWeekend] = useState("true");

const [option, setOption] = useState('all');

// funciones para recoger lo q escribe la usuaria en add
const handleName = (ev) => {
  setNewName(ev.currentTarget.value);
};
const handleOpenWeek = (ev) => {
  setNewOpenWeek(ev.currentTarget.checked);
};
const handleOpenWeekend = (ev) => {
  setNewOpenWeekend(ev.currentTarget.checked);
};

//función para options 

const handleOptions = (ev) => {
  setOption(ev.target.value);
}

// función manejadora del botón 
const handleClick = (ev) => {
  ev.preventDefault();

  const newClub = {
    "name": newName,
    "openOnWeekdays": newOpenWeek,
    "openOnWeekend": newOpenWeekend,
  };
  setData( [...data, newClub] );


  setNewName('');
  setNewOpenWeek('');
  setNewOpenWeekend('');
};

// función para pintar texto en html
const htmlPubsList = data.map((onePub , index) => { 
        return (
        <li key={index}>
        <p><label>#{index} </label> {onePub.name} </p>
        <p><label>Abierto entre semana:</label> {onePub.openOnWeekdays === true ? 'Sí' : 'No'}</p>
        <p><label>Abierto el fin de semana:</label> {onePub.openOnWeekend === true ? 'Sí' : 'No'} </p>
        </li>)
        
      });

  return (
    <div>
      {/* ///////header////// */}
   <header>
      <h1>Mis clubs</h1>
      <form>
      <label htmlFor="show">Mostrar</label>
      <select id="show" name="show" onChange={handleOptions}>
          <option value="all">todos</option>
          <option 
          value="onlyWeek">
          los que abren entre semana
          </option>
          <option 
          value="onlyWeekend">
          los que abren el fin de semana
          </option>
      </select>
      </form>
   </header>
   {/* ///////main////// */}
   <main>
     {/* ///////section render////// */}
      <section>
         <ul>
            {htmlPubsList}
         </ul>
      </section>
      {/* ///////section add////// */}
      <section>
        <h2> Añadir un nuevo club </h2>
         <form>
            <p> <label htmlFor="clubName">Nombre del club</label>
               <input id="clubName" 
               type="text" 
               name="clubName"
               onChange={handleName}
               value={newName} 
               />
            </p>
            <p>
               <label htmlFor="clubOpenWeek">¿Abre entre semana?</label>
               <input
                  id="clubOpenWeek"
                  type="checkbox"
                  name="clubOpenWeek"
                  onChange={handleOpenWeek}
                  value={newOpenWeek}
                  />
            </p>
            <p>
               <label  htmlFor="clubOpenWeekend">¿Abre los fines de semana?</label>
               <input
                  id="clubOpenWeekend"
                  type="checkbox"
                  name="clubOpenWeekend"
                  onChange={handleOpenWeekend}
                  value={newOpenWeekend === true ? 'Sí' : 'No'}
                  />
            </p>
            <p>
               <input type="submit" value="Añadir un nuevo club" onClick={handleClick} />
            </p>
         </form>
      </section>
   </main>
</div>
  );
}

export default App;
