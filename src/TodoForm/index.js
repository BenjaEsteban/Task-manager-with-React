import React from "react"

function TodoForm(){
    return (
        <form>
            <label>
                Escribe tu nuevo TODO
            </label>
            <textarea placeholder="Placeholder"/>
            <button
                className="TodoForm-button TodoForm-button--canceled"></button>
            
            <button
                className="TodoForm-button TodoForm-button--add"></button>
        </form>
    )
}