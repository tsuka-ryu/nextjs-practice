import ClientComponent from "./_components/client-component";
import { TodoPagePresentation } from "./_components/todo-page-presentation";

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export default async function Page() {
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "force-cache",
  });
  const todo = (await res.json()) as Todo;

  return (
    <>
      <ClientComponent>
        <TodoPagePresentation todo={todo} />
      </ClientComponent>
    </>
  );
}
