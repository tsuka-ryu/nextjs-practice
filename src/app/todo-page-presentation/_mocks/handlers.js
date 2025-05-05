// _mocks/handlers.js
import { http, HttpResponse } from "msw";

const dummyTodo = {
  id: 127,
  todo: "Prepare a dish from a foreign culture",
  completed: false,
  userId: 7,
};

export const handlers = [
  http.get("https://dummyjson.com/todos/random", () =>
    HttpResponse.json(dummyTodo)
  ),
];
