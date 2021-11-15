const Nota = props => {
  const { title, text } = props;
  return (
    <div className="nota">
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{id}<p>
      <button onclick={() => deleteNote(id)}>Borrar</button>
      <button onClick={()=> updateNote(id)}>Editar</button>
    </div>
  );
};

export default Nota;
