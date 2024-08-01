import { render, screen, fireEvent, logRoles } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { store } from '../../src/Service/store/store';
import Header from '../../src/components/shared/header/Header';
import '@testing-library/jest-dom'

vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState: vi.fn(),
}));

describe('Header Component', () => {
  beforeEach(() => {
    (useAuthState as Mock).mockReturnValue([null, false, null]);
  });

  it('renders navigation links', () => {
    const view =  render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    
    );
    const link = screen.getAllByRole('link')

    link.forEach((lin) =>{
      expect(lin).toBeInTheDocument()
    })

    logRoles(view.container)
  });

  it('renders login button when user is not logged in', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const link = screen.queryByRole('link', { name: /user/i })

    expect(link).toBeInTheDocument();
  });

  it('renders logout button when user is logged in', () => {
    (useAuthState as Mock).mockReturnValue([{ uid: '123' }, false, null]);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.queryByRole('button', { name: /sair/i })).toBeInTheDocument();
  });

  it('opens and closes the cart modal', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const cartButton = screen.getByRole('button', { name: /carticon/i });
    fireEvent.click(cartButton);

    expect(screen.queryByTestId(/cartModal/i)).toBeInTheDocument();

    fireEvent.click(document);

    expect(screen.queryByText(/cartmodal/i)).not.toBeInTheDocument();
  });
});
