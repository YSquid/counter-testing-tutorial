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
  it("decrements count by 1 when decrement button is pressed", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    //get by role button with text inside it equal to "Decrement"
    const decrementButton = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementButton);
    //get the countValue, after the fireEvent
    const countValue = Number(getByTestId("count").textContent);
    //expect count to be -1
    expect(countValue).toEqual(-1);
  })
  
  it('sets count to 0 when restart button is pressed', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
    const restartButton = getByRole('button', {name: 'Restart'});
    fireEvent.click(restartButton)
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0)
  })

  it('sets count to (count * -1) when switch signs button is pressed', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
    const switchSignsButton = getByRole('button', {name: 'Switch Signs'});
    fireEvent.click(switchSignsButton)
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-1)
  })

});
