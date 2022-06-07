import { render, screen } from "../../../test-utils"
import Type from "../Type"
import userEvent from "@testing-library/user-event"
import { OrderContextProvider } from "../../../contexts/OrderContext";

test('상품 가격이 변했을 때 상품 총 가격을 업데이트 합니다.', async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("총 가격:", { exact: false });
  // exact: ture가 defalut 
	// 상품 총 가격 뒤에 어떤 텍스트가 더 있어도 인식되도록
	expect(productsTotal).toHaveTextContent("0");

	// 아메리카 여행 상품 한 개 올리기
	const americaInput = await screen.findByRole("spinbutton",{
		name: "America",
	});

	userEvent.clear(americaInput);
	userEvent.type(americaInput, "1");
	expect(productsTotal).toHaveTextContent("1000");

});


test("Update option's total when options change", async () => { 
	render(<Type orderType="options" />)

	const optionsTotal = screen.getByText("옵션 총 가격:", {exact: false})
	expect(optionsTotal).toHaveTextContent("0");
	
	const insuranceCheckbox = await screen.findByRole("checkbox",{
		name: "Insurance",
	})

	userEvent.click(insuranceCheckbox);
	expect(optionsTotal).toHaveTextContent("500");

	const dinnerCheckbox = await screen.findByRole("checkbox", {
    name: "Dinner",
  });
	
	userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("1000");

	userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("500");
})