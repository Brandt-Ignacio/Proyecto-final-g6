// App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nota from './Nota';
const App = () => {

  const [notes, setNotes] = useState([]);
const deleteNote = id =>{
  axios.delete("http://localhost:4000/api/notes/" + id)
  .then(res =>{

  const notasActualizadas = notes.filter(note => id !==
  note._id);
  console.log(notasActualizadas);
  setNotes(notasActualizadas)
})
.catch(err=> console.log(err));
};
const updateNote = id => {
  console.log(id);
  const tituloActualizado = prompt("ingrese nuevo titulo");
    const textoActualizado = prompt("ingrese nuevo texto");
    const datos = {
      title: tituloActualizado,
      text:textoActualizado
    };
    axios.put("http://localhost:4000/api/notes/"+id,datos)
    .then(res=>{
      const notasActualizadas = notes.map(note =>(
      note._id === id? res.data : note
    ));
  setNotes(notasActualizadas);
})
.catch(err=> console.log(err));
};
  useEffect(() => {
    console.log('Vamos a buscar todas las notas')

    axios.get('http://localhost:4000/api/notes')
      .then(res => {
        console.log(res.data);
        setNotes(res.data);
      });
  }, [])

const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Enviando formulario...');
    console.log(title, text);
    const note = { title, text };
    axios.post('http://localhost:4000/api/notes', note)
    .then(res => {
      console.log(res.data);
      setNotes([res.data, ...notes]);
      setTitle("");
      setText("");
    })
    .catch(err => console.log(err));

  };



  return (
    <div className="app">
    <header> <h1> Mi app </h1></header>
    <nav> <h2>Brandt</h2> <h2>Condori</h2> <h2> Zelada </h2> </nav>
      <div className="agregarNota">
        <form onSubmit={handleSubmit}>
          <label>Titulo</label>
          <br/>
          <input
            onChange={e => setTitle(e.target.value)}
            value={title}
            type="text"
          />
          <br>
          </br>
            <label>Texto</label>
          <textarea
          rows="6"
          cols="40"
          spellCheck={false}
            onChange={e => setText(e.target.value)}
            value={text}
            ></textarea>
          <br/>
          <input type="submit" className='btn btn-primary' value="Guardar" />
        </form>
      </div>
   <div className="e">
        <h1>Lista de notas</h1>

    <div className="notas">

        {notes.map(note => {
          return <Nota
          key={note._id}
    title={note.title}
          deleteNote={deleteNote}
          updateNote={updateNote}
id={note._id}
          text={note.text}
           />
        })}
      </div>
</div>
 <footer>
  <h1>Grupo 6</h1>
</footer>

    </div>
  );
};

export default App;
