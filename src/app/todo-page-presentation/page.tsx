import { TodoPagePresentation } from "./_components/todo-page-presentation";

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export default async function Page() {
  const res = await fetch("https://dummyjson.com/todos/random", {
    next: {
      revalidate: 0,
    },
  });
  const todo = (await res.json()) as Todo;

  return <TodoPagePresentation todo={todo} />;
}
