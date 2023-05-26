import './TodoSearch.css'

function TodoSearch(){
    return (
      <input className='TodoSearch' placeholder="Cortar verduras"
      onChange={(event) => {
        console.log(event.target.value)
      }}/>
    );
  }

export { TodoSearch };