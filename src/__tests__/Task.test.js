import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";
import { CATEGORIES, TASKS } from "../data";

test("displays the task text", () => {
  const task = { text: "text!", category: "category!" };
  render(<Task task={task} />);
  expect(screen.getByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const task = { text: "text!", category: "category!" };
  render(<Task task={task} />);
  expect(screen.getByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const taskText = "Buy rice";
  const task = screen.getByText(taskText);
  const deleteButton = task.parentElement.querySelector("button");
  fireEvent.click(deleteButton);
  expect(screen.queryByText(taskText)).not.toBeInTheDocument();
});
