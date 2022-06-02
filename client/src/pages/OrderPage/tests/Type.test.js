import { render, screen } from "@testing-library/react"
import { server } from "../../../mocks/server";
import Type from "../Type"
import {rest} from 'msw'

test('서버에서 상품 이미지를 가져옵니다', async () => {
  render(<Type orderType="products" />);

  // 이미지 찾기
  const productImage = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  expect(productImage).toHaveLength(2);

  const altTest = productImage.map((element) => element.alt);
  expect(altTest).toEqual(["America product", "England product"]);
})

test("fetch option information from server", async () => {
	render(<Type orderType="options" />);

	const optionCheckboxes = await screen.findAllByRole("checkbox");
	expect(optionCheckboxes).toHaveLength(2);
});

test('when fetching product datas, face an error', async () => { 
	server.resetHandlers(
		rest.get('http://localhost:5000/products', (req, res, ctx) => 
			res(ctx.status(500))
			)
		);

		render(<Type orderType="products" />);

		const errorBanner = await screen.findByTestId("error-banner");
		expect(errorBanner).toHaveTextContent("에러가 발생했습니다.")
	})

