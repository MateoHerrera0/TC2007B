/*
 * Test to check the correct functionality of the format row function
 * 
 * Mateo Herrera
 * Gerardo Gutierrez
 * Francisco segundo nombre
 * 2022-08-24
 */

import Convert from "./format-data.js";
import '@testing-library/jest-dom';

describe('Complete line', () => {
  test('format line', () => {
    let line = [];
    let result = [];
    line = ['1', 'One Two Three', 'A01234567', '20/08/2020', '70'];
    result = ['1', 'One Two', 'A01234567@tec.mx', '08/20/2020', 'C-'];
    expect(Convert(line)).toStrictEqual(result);
    line = ['8', 'Juan Perez Marin', 'a09876543', '15/12/2022', '65'];
    result = ['8', 'Juan Perez', 'a09876543@tec.mx', '12/15/2022', 'D'];
    expect(Convert(line)).toStrictEqual(result);
    line = ['49', 'Maria Diaz Tapia', 'A98762345', '07/03/2021', '30'];
    result = ['49', 'Maria Diaz', 'A98762345@tec.mx', '03/07/2021', 'E'];
    expect(Convert(line)).toStrictEqual(result);
  })
})