

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Paginator from '../../src/components/Shop/Paginator/Paginator'; // Adjust the import path as needed
import '@testing-library/jest-dom'

describe('Paginator Component', () => {
  const defaultProps = {
    itemsPerPage: 10,
    totalItems: 50,
    paginate: vi.fn(),
    nextPage: vi.fn(),
    currentPage: 1,
  };

  it('should render the correct number of page buttons', () => {
    render(<Paginator {...defaultProps} />);
    const pageButtons = screen.getAllByRole('button');
    expect(pageButtons).toHaveLength(Math.ceil(defaultProps.totalItems / defaultProps.itemsPerPage) + 1);
  });

  it('should call paginate with the correct page number when a page button is clicked', () => {
    render(<Paginator {...defaultProps} />);
    const pageButtons = screen.getAllByRole('button');

    fireEvent.click(pageButtons[1]);
    expect(defaultProps.paginate).toHaveBeenCalledWith(2);
  });

  it('should call nextPage when the next button is clicked', () => {
    render(<Paginator {...defaultProps} />);
    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);
    expect(defaultProps.nextPage).toHaveBeenCalled();
  });


  it('should disable the next button on the last page', () => {
    render(<Paginator {...defaultProps} currentPage={Math.ceil(defaultProps.totalItems / defaultProps.itemsPerPage)} />);
    const nextButton = screen.getByRole("button",{name:/next/i});
    expect(nextButton).toBeDisabled();
  });

  it('should highlight the current page button', () => {
    render(<Paginator {...defaultProps} currentPage={2} />);
    const pageButtons = screen.getAllByRole('button');
    expect(pageButtons[1]).toHaveClass('text-white bg-cor-B88E2F');
  });
});
