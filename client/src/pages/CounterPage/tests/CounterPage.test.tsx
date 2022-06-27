import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CounterPage from "../CounterPage";

test("카운터는 0부터 시작합니다.", () => {
    render(<CounterPage />);
    //screen object를 이용해서 원하는 엘리먼트에 접근(접근할 때 ID로)
    const counterElement = screen.getByTestId("counter");
    //id가 counter인 엘리먼트의 텍스트가 0인지 테스트
    expect(counterElement).toHaveTextContent("0");
});

test("마이너스 버튼에 맞는 텍스트가 들어가있다.", () => {
    render(<CounterPage />);
    const minusButttonElement = screen.getByTestId("minus-button");
    expect(minusButttonElement).toHaveTextContent("-");
});

test("플러스 버튼에 맞는 텍스트가 들어가있다.", () => {
    render(<CounterPage />);
    const plusButttonElement = screen.getByTestId("plus-button");
    expect(plusButttonElement).toHaveTextContent("+");
});

test("플러스 버튼을 누르면 카운터가 1로 바뀝니다.", () => {
    render(<CounterPage />);
    const buttonElement = screen.getByTestId("plus-button");
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("1");
});

test("마이너스 버튼을 누르면 카운터가 -1로 바뀝니다.", () => {
    render(<CounterPage />);
    const buttonElement = screen.getByTestId("minus-button");
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("-1");
});

test("on/off 버튼이 파란색 입니다.", () => {
    render(<CounterPage />);
    const buttonElement = screen.getByTestId("on/off-button");
    // getByTestId로 엘레멘트를 잡는 건 좋은 방법은 아니다.
    expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("on/off 버튼을 클릭하면 +, - 버튼이 눌리는 걸 막는다", () => {
    render(<CounterPage />);
    const onOffbuttonElement = screen.getByTestId("on/off-button");
    fireEvent.click(onOffbuttonElement);
    const plusButttonElement = screen.getByTestId("plus-button");
    expect(plusButttonElement).toBeDisabled();
});
