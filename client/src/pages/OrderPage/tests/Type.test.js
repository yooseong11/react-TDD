import { render, screen } from "@testing-library/react"
import Type from "../Type"

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
	