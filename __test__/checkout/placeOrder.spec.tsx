import { render, screen, fireEvent} from '@testing-library/react';
import PlaceOrder from '../../src/components/Checkout/PlaceOrder';
import { vi } from 'vitest';
import { mockCarrinho } from '../../src/Service/Mocks/Products';
import '@testing-library/jest-dom';




const mockTotal = 3500;

describe('PlaceOrder Component', () => {
  const mockRegister = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders PlaceOrder component correctly', () => {
   render(
      <PlaceOrder
        register={mockRegister}
        checkout={mockCarrinho}
        total={mockTotal}
      />
    );   
    expect(screen.getAllByRole('paragraph',{name:/product-title/i})).toHaveLength(2);
    expect(screen.getAllByRole('paragraph',{name:/product-value/i})).toHaveLength(2);
    expect(screen.getByRole('paragraph',{name:/product-subTotal/i})).toBeInTheDocument();
    expect(screen.getByRole('paragraph',{name:/product-total/i})).toBeInTheDocument();
  });

  it('choice bank payment', () => {
    render(
      <PlaceOrder
        register={mockRegister}
        checkout={mockCarrinho}
        total={mockTotal}
      />
    );
    const bankRadio = screen.queryByRole('radio', { name: /Direct Bank Transfer/i }) as HTMLInputElement ;
    const cashRadio = screen.queryByRole('radio', { name: /Cash On Delivery/i })  as HTMLInputElement;

    fireEvent.click(bankRadio);
    expect(bankRadio?.checked).toBeTruthy();
    expect(cashRadio?.checked).toBeFalsy();
  });

  it('Choice cash payment', () => {
    render(
      <PlaceOrder
        register={mockRegister}
        checkout={mockCarrinho}
        total={mockTotal}
      />
    );
    const bankRadio = screen.queryByRole('radio', { name: /Direct Bank Transfer/i }) as HTMLInputElement ;
    const cashRadio = screen.queryByRole('radio', { name: /Cash On Delivery/i })  as HTMLInputElement;

    fireEvent.click(cashRadio);
    expect(cashRadio?.checked).toBeTruthy();
    expect(bankRadio?.checked).toBeFalsy();

  });

  test('submit button is rendered correctly', () => {
    render(
      <PlaceOrder
        register={mockRegister}
        checkout={mockCarrinho}
        total={mockTotal}
      />
    );

    const submitButton = screen.getByRole('button', { name: /place order/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('place order');
  });
});
