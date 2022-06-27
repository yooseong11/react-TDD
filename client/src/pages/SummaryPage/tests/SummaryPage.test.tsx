import React from "react";
import SummaryPage from "../SummaryPage";
import { render, screen } from "../../../test-utils";

test.only("checkbox and button", () => {
    render(<SummaryPage />);
    const checkbox =
        (screen.getByRole("checkbox", {
            name: "주문하려는 것을 확인하셨나요?",
        }) as HTMLInputElement) || null;
    expect(checkbox.checked).toEqual(false);

    const confirmButton = screen.getByRole("button", {
        name: "주문하기",
    }) as HTMLInputElement || null;
    expect(confirmButton.disabled).toBeTruthy();
});
