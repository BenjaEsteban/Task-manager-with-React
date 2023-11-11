import React from "react"
import { TodoContext } from '../TodoContext'
import './todoEdit.css'

function TodoEdit() {
    const {
        editTodo,
        setOpenModalEdit,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        editTodo(newTodoValue)
        setOpenModalEdit(false)
    }

    const onCanceled = () => {
        setOpenModalEdit(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Editar Tarea
            </label>
            <textarea
                placeholder="Escribe aquí"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--canceled"
                    onClick={onCanceled}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">Editar</button>
            </div>
        </form>
    )
}

export { TodoEdit }