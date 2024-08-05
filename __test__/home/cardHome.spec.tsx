import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Card from "../../src/components/Home/FirstComponent/Card";

describe("HomeCard", () => {
  it("should be redirect", () => {
    render(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "BUY Now" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/shop");

    fireEvent.click(link);
    expect(window.location.pathname).toBe("/shop");
  });
});
