import { ChangeEvent, FormEvent, useState } from "react";

interface TTodo {
  title: string;
  description: string;
}

function App() {
  const [todo, setTodo] = useState<TTodo>({
    title: "",
    description: "",
  });
  const [allTodo, setAllTodo] = useState<TTodo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAllTodo((prev) => [...prev, todo]);
  };
  return (
    <>
      <div>
        <form onSubmit={handleClick}>
          <label>Enter your title </label>
          <input
            placeholder="Enter your title"
            name="title"
            onChange={handleChange}
            value={todo.title}
          ></input>
          <label>Enter your description</label>
          <input
            placeholder="Enter your description"
            onChange={handleChange}
            name="description"
            value={todo.description}
          ></input>
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div>
        <div>
          {allTodo.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
