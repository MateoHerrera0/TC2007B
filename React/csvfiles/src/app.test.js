/*
 * Test to ckeck the correct render of the App
 *
 * Mateo Herrera
 * Gerardo Gutierrez
 * Francisco segundo nombre
 * 2022-08-24
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app.js';

describe('Conversion App', () => {

  // Check all components are rendered
  test('Render App', () => {
    render(<App />);
    const input = screen.getByTestId('inputForFile')
    expect(input).toBeInTheDocument();
    const original = screen.getByTestId('actualTable')
    expect(original).toBeInTheDocument();
    const result = screen.getByTestId('resultTable')
    expect(result).toBeInTheDocument();
  });

  test('Conversion', () => {


  });

});