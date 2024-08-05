// LoginForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../../src/components/Login/LoginForm';
test('renders the login form', () => {
  render(
    <Router>
      <LoginForm />
    </Router>
  );
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Google/i })).toBeInTheDocument();
});

test('shows validation errors when fields are empty', async () => {
  render(
    <Router>
      <LoginForm />
    </Router>
  );

  fireEvent.submit(screen.getByRole('button', { name: /Login/i }));

  expect(await screen.findAllByText(/This field is required/i)).toHaveLength(2);
});

test('validates email format', async () => {
  render(
    <Router>
      <LoginForm />
    </Router>
  );

  fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'invalid-email' } });
  fireEvent.submit(screen.getByRole('button', { name: /Login/i }));

  expect(await screen.findByText(/Please enter a valid email/i)).toBeInTheDocument();
});
  