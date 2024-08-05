// Component.test.jsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../../src/pages/about/About";
import { BrowserRouter } from "react-router-dom";

test("renders the component", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  // Verifica se a imagem com o alt "não tem nada" está presente
  expect(screen.getByAltText(/não tem nada/i)).toBeInTheDocument();
});
