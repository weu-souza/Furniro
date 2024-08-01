import '@testing-library/jest-dom'
import {fireEvent, getByRole, logRoles, render, screen} from "@testing-library/react"
import { mockProdArr } from "../../src/Service/Mocks/Products"
import { BrowserRouter } from "react-router-dom"
import Header from "../../src/components/shared/header/Header"
import { auth } from '../../src/Service/firebase/firebaseConfig'



const mockAuth = {
    signInWithEmailAndPassword: jest.fn().mockResolvedValue({ user: { email: 'test@example.com' } }),
    signOut: jest.fn().mockResolvedValue(undefined),
  };
  
  const mockFirestore = {
    collection: jest.fn().mockReturnValue({
      doc: jest.fn().mockReturnValue({
        get: jest.fn().mockResolvedValue({ data: () => ({ key: 'value' }) }),
        set: jest.fn().mockResolvedValue(undefined),
      }),
    }),
  };
  
  const firebase = {
    auth: () => mockAuth,
    firestore: () => mockFirestore,
  };



jest.mock('firebase/app', () => ({
    initializeApp: jest.fn(),
    getAuth: jest.fn(),
    getFirestore: jest.fn(),
  }));
  jest.mock('firebase', () => ({
    auth: () => firebase.auth(),
    firestore: () => firebase.firestore(),
  }));
  
  describe("Header", () => {
    it("should redirect to the correct route when a link is clicked", () => {
      // Render the Header component with a router
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
  
      // Find the link or element that triggers the redirect
      const linkElement = screen.getByText(/Go to New Route/i);
  
      // Click the link or trigger the action
      fireEvent.click(linkElement);
  
      // Assert that the URL has changed
      expect(screen.getByText(/New Route/i)).toBeInTheDocument();
    });
  });