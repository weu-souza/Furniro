// import "@testing-library/jest-dom";
// import CartModal from "../../src/components/Cart/CartModal/CartModal";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { expect, Mock, vi } from "vitest";
// import { Provider } from "react-redux";
// import { store } from "../../src/Service/store/store";
// import { BrowserRouter } from "react-router-dom";
// // Mocking functions
// vi.mock("../../../Service/Cart/Cart", () => ({
//     GetCart: vi.fn(),
//     DeleteCart: vi.fn(),
//   }));
  
//   const mockCartItems = [
//     {
//       id: 1,
//       title: "Item 1",
//       normalPrice: 100,
//       quantidade: 2,
//       images: { mainImage: "https://example.com/image1.jpg" },
//     },
//   ];
  
//   describe("CartModal", () => {
//     beforeEach(() => {
//       (GetCart as Mock).mockReturnValue(mockCartItems);
//     });
  
//     test("renders CartModal component correctly", () => {
//       render(
//         <Provider store={store}>
//           <BrowserRouter>
//             <CartModal />
//           </BrowserRouter>
//         </Provider>
//       );
  
//       // Check if title is rendered
//       expect(screen.getByText(/Shopping Cart/i)).toBeInTheDocument();
  
//       // Check if cart items are rendered
//       expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
//       expect(screen.getByText(/Rp. 100/i)).toBeInTheDocument();
  
//       // Check subtotal
//       expect(screen.getByLabelText(/total/i)).toHaveTextContent("Rp. 200");
//     });
  
//     test("removes item from cart when delete button is clicked", () => {
//       render(
//         <Provider store={store}>
//           <BrowserRouter>
//             <CartModal />
//           </BrowserRouter>
//         </Provider>
//       );
  
//       // Mock deleteCart function
//       fireEvent.click(screen.getByRole("button", { name: /delete/i }));
  
//       // Check if DeleteCart function was called
//       expect(DeleteCart).toHaveBeenCalledWith(1);
//     });
  
//     test("navigates to checkout on checkout button click", () => {
//       const { history } = render(
//         <Provider store={store}>
//           <BrowserRouter>
//             <CartModal />
//           </BrowserRouter>
//         </Provider>
//       );
  
//       // Click on the checkout button
//       fireEvent.click(screen.getByText(/Checkout/i));
  
//       // Check if navigation happened
//       expect(history.location.pathname).toBe("/checkout");
//     });
//   });
