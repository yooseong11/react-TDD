import React from "react";
import { render, screen } from "../../../test-utils";
import { server } from "../../../mocks/server";
import Type from "../Type";
import { rest } from "msw";

test("서버에서 상품 이미지를 가져옵니다", async () => {
    render(<Type orderType="products" />);

    // 이미지 찾기
    const productImage = await screen.findAllByRole("img", {
        name: /product$/i,
    }) as HTMLImageElement[] || null ;
    expect(productImage).toHaveLength(2);

    const altTest = productImage.map((element) => element.alt);
    expect(altTest).toEqual(["America product", "England product"]);
});

test("옵션 정보를 서버에서 가져옵니다.", async () => {
    render(<Type orderType="options" />);

    const optionCheckboxes = await screen.findAllByRole("checkbox");
    expect(optionCheckboxes).toHaveLength(2);
});

test("상품 가격 정보를 서버에서 가져옵니다.", async () => {
    render(<Type orderType="products" />);

    const priceTest = await screen.findAllByText("0원", { exact: false });
    expect(priceTest).toHaveLength(2);
});

test("데이터를 가져올 때 에러가 생깁니다.", async () => {
    server.resetHandlers(
        rest.get(`${process.env.REACT_APP_API_URL}/products`, (req, res, ctx) =>
            res(ctx.status(500))
        )
    );

    render(<Type orderType="products" />);

    const errorBanner = await screen.findByTestId("error-banner");
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});
