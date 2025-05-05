import { forceCacheAction } from "../_lib/actions";
import { Todo } from "../page";

export function TodoPagePresentation({ todo }: { todo: Todo }) {
  return (
    <>
      <h2>{todo.todo}</h2>
      <pre>
        <code>{JSON.stringify(todo, null, 2)}</code>
      </pre>
      <button onClick={forceCacheAction}>revalidate</button>
    </>
  );
}
