const Nota = props => {
  const {title,text,id,deleteNote,updateNote} = props;
  return(
    <div className="nota">
    <div className="title">
      <h2>{title}</h2>
      </div>
      <p>{text}</p>

<div className="botones">
<div className="borrar">
      <button className="btn btn-danger" onClick={() => deleteNote(id)}>Borrar</button>
</div>
<div className="editar">
      <button className="btn btn-success" onClick={()=> updateNote(id)}>Editar</button>
    </div>
      </div>
      </div>
  );
  
