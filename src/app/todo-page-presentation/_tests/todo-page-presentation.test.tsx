import React from "react";

import { expect, test } from "vitest";
import { TodoPagePresentation } from "../_components/todo-page-presentation";
import { render, screen } from "@testing-library/react";

const dummyTodo = {
  id: 127,
  todo: "Prepare a dish from a foreign culture",
  completed: false,
  userId: 7,
};

test("`todo`として渡された値がタイトルとして表示される", () => {
  render(<TodoPagePresentation todo={dummyTodo} />);

  expect(
    screen.getByRole("heading", { name: dummyTodo.todo })
  ).toBeInTheDocument();
});
