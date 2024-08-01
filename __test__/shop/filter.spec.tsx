import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Filter from '../../src/components/Shop/Filter/Filter'; // Adjust the import path as needed
import { Provider } from 'react-redux';
import { store } from '../../src/Service/store/store'; // Adjust the import path as needed
import { AddItem, AddCategory } from '../../src/Service/store/store';

describe('Filter Component', () => {
    const defaultProps = {
        currentPage: 1,
        itemsPerPage: 8,
        totalItems: 50,
        categories: ['Electronics', 'Books', 'Clothing'],
      };
  it('should display the correct number of items and total results', () => { 
    render(
      <Provider store={store}>
        <Filter {...defaultProps} />
      </Provider>
    );

    expect(screen.getByText(/Showing 1–8 of 51 results/i)).toBeInTheDocument(); // 51 because totalItems + 1
  });

  
  it('should call handleChangeCategory and dispatch the correct action when a category is selected', () => {
    const mockDispatch = vi.spyOn(store, "dispatch");
    const mockProps = {
      ...defaultProps,
      dispatch: mockDispatch,
    };

    render(
      <Provider store={store}>
        <Filter {...mockProps} />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/short by/i), { target: { value: 'Books' } });
    expect(mockDispatch).toHaveBeenCalledWith(AddCategory('Books'));
  });

  it('should call handleChangeItens and dispatch the correct action when items per page is changed', () => {
    const mockDispatch = vi.spyOn(store, "dispatch");
    const mockProps = {
      ...defaultProps,
      dispatch: mockDispatch,
    };

    render(
      <Provider store={store}>
        <Filter {...mockProps} />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/show/i), { target: { value: '16' } });
    expect(mockDispatch).toHaveBeenCalledWith(AddItem(16));
  });

  it('should render category options correctly', () => {

    render(
      <Provider store={store}>
        <Filter {...defaultProps} />
      </Provider>
    );

    expect(screen.getByText(/Electronics/i)).toBeInTheDocument();
    expect(screen.getByText(/Books/i)).toBeInTheDocument();
    expect(screen.getByText(/Clothing/i)).toBeInTheDocument();
  });

});

  

