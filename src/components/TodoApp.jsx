import React, { useState } from "react";

const TodoApp = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [removedTodos, setRemovedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      completed: false,
    };

    setList([newTodo, ...list]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const todoToRemove = list.find((todo) => todo.id === id);
    setRemovedTodos([todoToRemove, ...removedTodos]);
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const isDone = (id) => {
    const newList = list.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        if (updatedTodo.completed) {
          setCompletedTodos([updatedTodo, ...completedTodos]);
        } else {
          setCompletedTodos(
            completedTodos.filter((completedTodo) => completedTodo.id !== id)
          );
        }
        return updatedTodo;
      }
      return todo;
    });
    setList(newList);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-center text-green-600 font-extrabold text-2xl">
        Get Things Done
      </h1>
      <input
        className="border border-lime-900 border-solid cursor-text hover:bg-green-200 p-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border rounded-lg bg-green-900 text-white w-16"
        onClick={() => addTodo(input)}
      >
        Add
      </button>

      {list.length > 0 && (
        <div className="container mx-auto grid justify-items-center">
          <h2 className="text-xl font-bold mb-4 text-purple-800">Todo List</h2>
          <table className="table-auto min-w-64 bg-white">
            <thead className="border-black border-t">
              <tr className="border-black border-r border-l">
                <th className="px-4 py-2 border-b-2 border-black">SL.NO</th>
                <th className="px-4 py-2 border-b-2 border-black">ToDo</th>
                <th className="px-4 py-2 border-b-2 border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((todo, index) => (
                <tr
                  key={todo.id}
                  className="border-black border-r border-l border-t"
                >
                  <td className="px-4 py-2 border-b border-black">
                    {index + 1}
                  </td>
                  <td
                    className="px-4 py-2 border-b border-black"
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.todo}
                  </td>
                  <td className="px-4 py-2 border-b border-black">
                    <div>
                      <button
                        className="bg-red-700 text-lg text-white p-2 rounded mr-2"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="bg-green-700 text-lg text-white p-2 rounded"
                        onClick={() => isDone(todo.id)}
                      >
                        Done
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-3 grid gap-2 p-4">
        <h1 className="text-2xl text-indigo-700 text-center font-bold">
          Todo Info Table
        </h1>

        <table className="table-auto min-w-64 bg-white">
          <thead className="border-black border-t border-b">
            <tr>
              <th className="font-semibold px-4 border-r border-black border-l">
                Removed Todos
              </th>
              <th className="font-semibold border-r border-black">
                Completed Todos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-black border-l border-r">
                {removedTodos.length > 0 ? (
                  <ul className="list-disc p-2">
                    {removedTodos.map((todo) => (
                      <li key={todo.id}>{todo.todo}</li>
                    ))}
                  </ul>
                ) : (
                  "No removed todos"
                )}
              </td>
              <td className="px-4 py-2 border-b border-black border-l border-r">
                {completedTodos.length > 0 ? (
                  <ul className="list-disc p-2">
                    {completedTodos.map((todo) => (
                      <li key={todo.id}>{todo.todo}</li>
                    ))}
                  </ul>
                ) : (
                  "No completed todos"
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-xl font-bold font-serif text-lime-700">
          Total Todos:{" "}
          <span className="text-red-700 text-2xl">{list.length}</span>
        </h2>
      </div>
    </div>
  );
};

export default TodoApp;
