import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../../src/pages/contact/Contact";
import { BrowserRouter } from "react-router-dom";

test("renders the component with ContactUs and ContactForm", () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  expect(
    screen.getByRole("heading", { name: /Get In Touch With Us/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('paragraph',{name:/paragraph/i})
  ).toBeInTheDocument();

  expect(screen.getByRole('heading',{name:/Address/i})).toBeInTheDocument();
  expect(screen.getByRole("heading",{name:/Phone/i})).toBeInTheDocument();
  expect(screen.getByRole('heading',{name:/Working Time/i})).toBeInTheDocument();

  expect(screen.getByLabelText(/Your name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
});
