import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";
import RelatedProducts from "../../../src/components/Products/RelatedProducts/RelatedProducts";
import "@testing-library/jest-dom";
import { mockProdArr } from "../../../src/Service/Mocks/Products";
import { Provider } from "react-redux";
import { store } from "../../../src/Service/store/store";

describe("RelatedProducts Component", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <RelatedProducts products={mockProdArr} />
        </Provider>
      </BrowserRouter>
    );

    expect(getByText("Related Products")).toBeInTheDocument();
  });
});

it("should renders show more link and redirect to shop page", () => {
   render(
    <BrowserRouter>
      <Provider store={store}>
        <RelatedProducts products={mockProdArr} />
      </Provider>
    </BrowserRouter>
  );
  
  const linkElement = screen.getByRole('link', {name:/Show More/i});
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/shop");

  fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/shop");

});
