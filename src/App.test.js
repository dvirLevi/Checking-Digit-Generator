import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Checking Digit Generator for Israeli Id/i);
  expect(linkElement).toBeInTheDocument();
});

test("change values via the fireEvent.change method", () => {
  const handleChange = jest.fn();
  const { container } = render(<input type="text" onChange={handleChange} />);
  const input = container.firstChild;
  fireEvent.change(input, { target: { value: "a" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("a");
});
