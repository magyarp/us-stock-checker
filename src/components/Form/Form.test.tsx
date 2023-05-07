import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import {
  STOCK_DATA_QUERY_BUTTON_LABEL,
  STOCK_SYMBOL_INPUT_PLACEHOLDER,
} from "../../constants/texts";

describe("Form", () => {
  test("Renders TextInput with placeholder", () => {
    render(<Form supportedStocks={[]} />);
    expect(
      screen.getByPlaceholderText(STOCK_SYMBOL_INPUT_PLACEHOLDER)
    ).toBeVisible();
  });

  test("Renders TextInput with disabled query stock data action icon by default", () => {
    render(<Form supportedStocks={[]} />);
    expect(screen.getByLabelText(STOCK_DATA_QUERY_BUTTON_LABEL)).toBeDisabled();
  });

  test("Query stock data action icon becomes enabled once TextInput is filled", () => {
    render(<Form supportedStocks={[]} />);
    const textInput = screen.getByPlaceholderText(
      STOCK_SYMBOL_INPUT_PLACEHOLDER
    );
    fireEvent.change(textInput, { target: { value: "AAPL" } });
    expect(
      screen.getByLabelText(STOCK_DATA_QUERY_BUTTON_LABEL)
    ).not.toBeDisabled();
  });
});
