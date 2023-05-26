import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return (
      <h1 className='TodoCounter'>
        Has completado {completed} de {total} Todos
      </h1>
    );
  }

export { TodoCounter };