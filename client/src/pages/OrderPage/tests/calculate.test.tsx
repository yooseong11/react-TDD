import React from "react";
import { render, screen } from "../../../test-utils";
import Type from "../Type";
import OrderPage from "../OrderPage";
import userEvent from "@testing-library/user-event";

test("상품 가격이 변했을 때 상품 총 가격을 업데이트 합니다.", async () => {
    render(<Type orderType="products" />);

    const productsTotal = screen.getByText("총 가격:", { exact: false });
    // exact: ture가 defalut
    // 상품 총 가격 뒤에 어떤 텍스트가 더 있어도 인식되도록
    expect(productsTotal).toHaveTextContent("0");

    // 아메리카 여행 상품 한 개 올리기
    const americaInput = await screen.findByRole("spinbutton", {
        name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(productsTotal).toHaveTextContent("3000");
});

test("Update: 옵션 값이 바뀌면 옵션 총 가격이 변경됩니다.", async () => {
    render(<Type orderType="options" />);

    const optionsTotal = screen.getByText("옵션 총 가격:", { exact: false });
    expect(optionsTotal).toHaveTextContent("0");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
        name: "Insurance",
    });

    userEvent.click(insuranceCheckbox);
    expect(optionsTotal).toHaveTextContent("500");

    const dinnerCheckbox = await screen.findByRole("checkbox", {
        name: "Dinner",
    });

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("1000");

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("500");
});

describe("굿즈와 옵션의 총가격을 구합니다.", () => {
    test("총 가격은 0으로 시작하고 상품을 추가할때 가격이 변경됩니다.", async () => {
        render(<OrderPage />);

        const total = screen.getByText("Total Price", { exact: false });
        expect(total).toHaveTextContent("0");

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });

        userEvent.clear(americaInput);
        userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("Total Price : 3000 ( 3000 + 0 )");
    });

    test("Update: 하나의 옵션을 추가할때 총 가격이 변경됩니다.", async () => {
        render(<OrderPage />);
        const total = screen.getByText("Total Price", { exact: false });

        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });

        userEvent.click(insuranceCheckbox);
        expect(total).toHaveTextContent("500");
    });

    test("Update: 옵션과 상품을 제거할 때 총 가격이 변경됩니다.", async () => {
        render(<OrderPage />);
        const total = screen.getByText("Total Price", { exact: false });

        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });
        userEvent.click(insuranceCheckbox);

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });
        userEvent.clear(americaInput);
        userEvent.type(americaInput, "3");

        userEvent.clear(americaInput);
        userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("Total Price : 3500 ( 3000 + 500 )");
    });
});

test("+ - 버튼을 누르면 개수가 바뀌고 가격에 반영됩니다..", async () => {
    render(<OrderPage />);

    // +
    const plusBtn = await screen.findByTestId("AmericaPlusBtn");
    userEvent.click(plusBtn);
    userEvent.click(plusBtn);
    const total = screen.getByText("Total Price", { exact: false });

    expect(total).toHaveTextContent("Total Price : 6000");

    // -
    const minusBtn = await screen.findByTestId("AmericaMinusBtn");
    userEvent.click(minusBtn);

    expect(total).toHaveTextContent("Total Price : 3000");
});
