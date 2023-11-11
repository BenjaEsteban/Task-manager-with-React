import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButoon";
import { TodoError } from "../TodoError";
import { EmptyTodos } from "../EmptyTodo";
import { TodoLoading } from "../TodoLoading";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoEdit } from "../TodoEdit";

function AppUI() {
  const {
    loading,
    error,
    searchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    openModalEdit,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
          </>
        )}
        {error && <TodoError />}
        {!loading && searchedTodo.length === 0 && <EmptyTodos />}

        {searchedTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      {openModalEdit && (
        <Modal>
          <TodoEdit />
        </Modal>
      )}
      
    </React.Fragment>
  );
}

export { AppUI };
