import React from "react"
import { useLocalStorage } from "./useLocalStorage"

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V2', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const [openModalEdit, setOpenModalEdit] = React.useState(false)

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length

    const searchedTodo = todos.filter((todo) => {
        return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    })

    const addTodo = (text) => {
        const id = newTodoID(todos)
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false,
            id,
        })
        saveTodos(newTodos)
    }

    const completeTodo = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        )
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const editTodo = (id, newText) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        )
        newTodos[todoIndex].text = newText
        saveTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const newTodoID = (todoList) => {
        if (todoList.length === 0) {return 1}
        const idList = todoList.map(todo => todo.id)
        const idMax = Math.max(...idList)
        return idMax + 1
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            editTodo,
            openModalEdit,
            setOpenModalEdit
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }