import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { MyComponent } from './App';

test("MyComponent", () => {

  const submitHandler = jest.fn();

  render(<MyComponent onSubmit={submitHandler} />);

  const submitButton = screen.getByRole("button", {
    name: /submit/i
  });

  userEvent.click(submitButton);

  expect(submitHandler).not.toHaveBeenCalled();

});
