/*
 * Test to check the correct render of the table component.
 * 
 * Mateo Herrera
 * Gerardo Gutierrez
 * Francisco segundo nombre
 * 2022-08-24
 */

import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './table.js';

// Reset DOM after each test suite
afterEach(() => {
  cleanup();
});

describe('Table component', () => {
  const tableRows = ['HeadA', 'HeadB'];
  const value = [['a', '1'], ['b', '2']];

  render(
    <Table
      tableRows={tableRows}
      values={value}
      id='table'
    />
  );
  
  const table = screen.getByTestId('table');

  // Check if the table is displayed
  test('Tables render', () => {
    expect(table).toBeInTheDocument();
  });

  // Check if the contents are displayed
  test('Tables contents', () => {
    expect(table).toHaveTextContent('HeadA');
    expect(table).toHaveTextContent('HeadB');
    expect(table).toHaveTextContent('1');
    expect(table).toHaveTextContent('b');
  });
})