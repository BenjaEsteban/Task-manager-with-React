import React from 'react'
import './emptyTodo.css'
import EmptyIcon from "../assets/img/empty-icon.png"

function EmptyTodos() {
  return (
   <section className='sectionContainer'>
      <article className='articleContainer'>
        <h2 className='title'>Sin tareas!</h2>
        <p>Agrega una tarea para comenzar</p>
        <img src={EmptyIcon} alt='Empty icon'/>
      </article>
   </section>
  )
}

export { EmptyTodos }