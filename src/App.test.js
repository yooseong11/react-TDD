import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("카운터는 0부터 시작합니다.", () => {
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근(접근할 때 ID로)
  const counterElement = screen.getByTestId("counter")
  //id가 counter인 엘리먼트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
})

test("마이너스 버튼에 맞는 텍스트가 들어가있다.", ()=>{
  render(<App />);
  const minusButttonElement = screen.getByTestId("minus-button");
  expect(minusButttonElement).toHaveTextContent("-");
});

test("플러스 버튼에 맞는 텍스트가 들어가있다.", () => {
  render(<App />);
  const minusButttonElement = screen.getByTestId("plus-button");
  expect(minusButttonElement).toHaveTextContent("+");
});

test("플러스 버튼을 누르면 카운터가 1로 바뀝니다.", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});
test("마이너스 버튼을 누르면 카운터가 -1로 바뀝니다.", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});