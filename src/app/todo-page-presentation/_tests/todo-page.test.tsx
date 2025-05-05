import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { server } from "../_mocks/node";
import { http, HttpResponse } from "msw";
import Page from "../page";
import { TodoPagePresentation } from "../_components/todo-page-presentation";

const dummyTodo = {
  id: 127,
  todo: "Prepare a dish from a foreign culture",
  completed: false,
  userId: 7,
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("todos/random APIよりデータ取得成功時", () => {
  test("TodoPresentationalにAPIより取得した値が渡される", async () => {
    // mswの設定
    server.use(
      http.get("https://dummyjson.com/todos/random", () => {
        return HttpResponse.json(dummyTodo);
      })
    );

    const page = await Page();

    expect(page.type).toBe(TodoPagePresentation);
    expect(page.props.todo).toEqual(dummyTodo);
  });
});
