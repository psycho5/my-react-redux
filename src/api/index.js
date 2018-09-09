import { v4 } from "node-uuid";

const fakeDataBase = {
  todos: [
    {
      id: v4(),
      text: "One",
      completed: true
    },
    {
      id: v4(),
      text: "Two",
      completed: true
    },
    {
      id: v4(),
      text: "Three",
      completed: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error("Boom!");
    }
    switch (filter) {
      case "all":
        return fakeDataBase.todos;
      case "active":
        return fakeDataBase.todos.filter(t => !t.completed);
      case "completed":
        return fakeDataBase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
