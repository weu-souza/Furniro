import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Description from '../../../src/components/Products/Description/Description';
import { mockProd } from '../../../src/Service/Mocks/Products';

describe('Description Component', () => {
 

    it('renders the description and additional information headings', () => {
    render(<Description product={mockProd} />);
    
    expect(screen.getByText('DescriptionDescription')).toBeInTheDocument();
    expect(screen.getByText('Additional Information')).toBeInTheDocument();
  });

  it('renders the product description', () => {
    render(<Description product={mockProd} />);
    
    expect(screen.getByText(mockProd.description.long)).toBeInTheDocument();
  });

  it('renders the product images', () => {
    render(<Description product={mockProd} />);
    
    const images = screen.getAllByAltText(mockProd.title);
    expect(images).toHaveLength(1);
    
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('src', mockProd.images.gallery[index]);
    });
  });
});
