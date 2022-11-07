import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initialCount", () => {
    //getting the getByTestId function from the render object from RTL
    //rendering Counter component with initialCount = 0
    const { getByTestId } = render(<Counter initialCount={0} />);
    //access the element with testid 'count' and get its text content, converted to number
    const countValue = Number(getByTestId("count").textContent);
    //expect the countValue to 0
    expect(countValue).toEqual(0);
  });

  it("increments count by 1 when increment button is pressed", () => {
    //another accessor, getByRole
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    //get by role button with text inside it equal to "Increment"
    const incrementButton = getByRole("button", { name: "Increment" });
    //fire event hook from RTL - basically imitates an event firing
    //fire a click event, calling increment button as what we click
    fireEvent.click(incrementButton);
    //get the countValue, after the fireEvent
    const countValue = Number(getByTestId("count").textContent);
    //expect count to be 1
    expect(countValue).toEqual(1);
  });
});
