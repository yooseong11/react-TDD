import {render, screen} from './test-utils';
import userEvent from "@testing-library/user-event"
import App from './App'

test('주문을 성공합니다.', async () => { 
	render(<App />)

	const americaInput = await screen.findByRole("spinbutton", {
		name: "America",
	});
	
	userEvent.clear(americaInput);
  userEvent.type(americaInput, "2");
	
	const englandInput = await screen.findByRole("spinbutton", {
		name: "America",
	});
	userEvent.clear(englandInput);
  userEvent.type(englandInput, "3");
	
	const insuranceCheckbox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });
	userEvent.click(insuranceCheckbox);

	const orderButton = screen.getByRole("button", {
    name: "주문하기",
  });
	userEvent.click(orderButton);

})