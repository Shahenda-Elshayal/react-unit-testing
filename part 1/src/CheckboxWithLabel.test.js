/* eslint-disable jest/valid-title */

import { render, screen } from "@testing-library/react";
import CheckboxWithLabel from "./CheckboxWithLabel";
import userEvent from "@testing-library/user-event";

// suite
describe("Test CheckboxWithLabel component", () => {
  test("Test Initial render of CheckboxWithLabel component", () => {
    render(<CheckboxWithLabel labelOff="OFF" labelOn="ON" />);
    let lableElement=screen.getByText(/OFF/i)
    expect(lableElement).toBeInTheDocument()
  });
  test("Test render of CheckboxWithLabel component after user event", () => {
    render(<CheckboxWithLabel labelOff="OFF" labelOn="ON" />);
    userEvent.click(screen.getByLabelText(/OFF/i))
    // userEvent.click(screen.getByLabelText(/ON/i))
    let lableElement=screen.getByText(/ON/i)
    expect(lableElement).toBeInTheDocument()
 
  });
});
