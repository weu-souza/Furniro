import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShareYourSetup from '../../src/components/Home/fifthComponent/ShareYourSetup';

describe('ShareYourSetup Component', () => {
  test('renders the title correctly', () => {
    render(<ShareYourSetup />);
    
    const title = screen.getByText(/CarrosselType/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('font-Poppins font-semibold text-xl text-center text-cor-616161');
  });

  test('renders the subtitle correctly', () => {
    render(<ShareYourSetup />);
    
    const subtitle = screen.getByText(/#FuniroFurniture/i);
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveClass('font-Poppins font-bold text-4xl text-center text-cor-3A3A3A');
  });

  test('renders the image correctly', () => {
    render(<ShareYourSetup />);
    
    const image = screen.getByAltText('');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-images/share_your_setup.png');
    expect(image).toHaveClass('object-cover w-full');
  });
});
