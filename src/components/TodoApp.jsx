import React, { useState } from "react";

const TodoApp = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

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
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const isDone = (id) => {
    const newList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
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
          <h2 className="text-xl font-semibold mb-4">Todo List</h2>
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
    </div>
  );
};

export default TodoApp;
