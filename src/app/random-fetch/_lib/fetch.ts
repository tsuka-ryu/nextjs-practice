export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export async function getRandomTodo() {
  // リクエストごとにランダムなTodoを返すAPI
  const res = await fetch("https://dummyjson.com/todos/random");
  return (await res.json()) as Todo;
}
