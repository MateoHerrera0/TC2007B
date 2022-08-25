/*
 * Test to check the correct output of the formatting functions.
 * 
 * Mateo Herrera
 * Gerardo Gutierrez
 * Francisco segundo nombre
 * 2022-08-24
 */

import {Name, Date, Email, Grade} from "./convert.js";
import '@testing-library/jest-dom';

describe('Individual functions', () => {
  test('grade conversion', ()=> {
    expect(Grade(99)).toBe('A');
    expect(Grade(94)).toBe('A');
    expect(Grade(92)).toBe('A-');
    expect(Grade(88)).toBe('B+');
    expect(Grade(80)).toBe('B-');
    expect(Grade(74)).toBe('C');
    expect(Grade(30)).toBe('E');
  });

  test('remove surname', () => {
    expect(Name('One Two Three')).toBe('One Two');
    expect(Name('Gilberto Echeverria Furio')).toBe('Gilberto Echeverria');
    expect(Name('Paco Gomez Juarez')).toBe('Paco Gomez');
  });

  test('rewrite date', () => {
    expect(Date('1/2/3')).toBe('2/1/3');
    expect(Date('11/02/113')).toBe('02/11/113');
  });

  test('make email', () => {
    expect(Email('a')).toBe('a@tec.mx');
    expect(Email('123b')).toBe('123b@tec.mx');
  });
})