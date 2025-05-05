import { getRandomTodo } from "../_lib/fetch";

export async function ComponentB() {
  const todo = await getRandomTodo();

  return (
    <>
      <h2>{todo.todo}</h2>
      <p>ComponentB</p>
      <pre>
        <code>{JSON.stringify(todo, null, 2)}</code>
      </pre>
    </>
  );
}
